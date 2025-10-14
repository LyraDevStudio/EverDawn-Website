'use client';

import { useEffect, useState } from 'react';
import { Users, WifiOff, Wifi, Loader2 } from 'lucide-react';

interface ServerStatusData {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
  version?: string;
  motd?: string;
}

interface ServerStatusProps {
  className?: string;
  compact?: boolean;
}

export function ServerStatus({ className = '', compact = false }: ServerStatusProps) {
  const [status, setStatus] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        setLoading(true);
        setError(false);
        
        // Using mcsrvstat.us API - a public Minecraft server status API
        // Primary: mc.everdawn.fr (Cloudflare, faster)
        // Fallback: Direct IP for more accurate ping
        const response = await fetch('https://api.mcsrvstat.us/3/mc.everdawn.fr', {
          cache: 'no-store',
        });
        
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        
        setStatus({
          online: data.online || false,
          players: data.players ? {
            online: data.players.online || 0,
            max: data.players.max || 100,
          } : undefined,
          version: data.version,
          motd: data.motd?.clean?.[0],
        });
      } catch (err) {
        console.error('Error fetching server status:', err);
        setError(true);
        setStatus({ online: false });
      } finally {
        setLoading(false);
      }
    };

    fetchServerStatus();
    
    // Refresh every 60 seconds
    const interval = setInterval(fetchServerStatus, 60000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <Loader2 className="w-4 h-4 animate-spin text-amber" />
        <span className="text-sm text-slate-text/60">Vérification...</span>
      </div>
    );
  }

  if (error || !status) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <WifiOff className="w-4 h-4 text-red-500" />
        <span className="text-sm text-slate-text/60">Status indisponible</span>
      </div>
    );
  }

  if (compact) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        {status.online ? (
          <>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-slate-text">
              {status.players?.online || 0} joueur{(status.players?.online || 0) > 1 ? 's' : ''} en ligne
            </span>
          </>
        ) : (
          <>
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-sm text-slate-text/60">Hors ligne</span>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 bg-ivory/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg ${className}`}>
      {status.online ? (
        <>
          <Wifi className="w-5 h-5 text-green-500" />
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-amber" />
            <span className="font-semibold text-slate-text">
              {status.players?.online || 0} / {status.players?.max || 100}
            </span>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </>
      ) : (
        <>
          <WifiOff className="w-5 h-5 text-red-500" />
          <span className="text-sm text-slate-text/60">Serveur hors ligne</span>
        </>
      )}
    </div>
  );
}
