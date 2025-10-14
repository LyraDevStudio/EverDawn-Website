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
        
        // Try primary domain first (mc.everdawn.fr via Cloudflare)
        let response = await fetch('https://api.mcsrvstat.us/3/mc.everdawn.fr', {
          cache: 'no-store',
        });
        
        if (!response.ok) throw new Error('Primary fetch failed');
        
        let data = await response.json();
        
        // If domain query fails or server appears offline, try direct IP fallback
        if (!data.online) {
          console.log('Primary domain offline, trying direct IP fallback...');
          
          // Fallback to direct IP (not exposed in UI)
          const fallbackResponse = await fetch('https://api.mcsrvstat.us/3/193.38.250.145:10003', {
            cache: 'no-store',
          });
          
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            // Use fallback data if it shows server is actually online
            if (fallbackData.online) {
              data = fallbackData;
            }
          }
        }
        
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
        
        // Last resort: try direct IP fallback on error
        try {
          const fallbackResponse = await fetch('https://api.mcsrvstat.us/3/193.38.250.145:10003', {
            cache: 'no-store',
          });
          
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            setStatus({
              online: fallbackData.online || false,
              players: fallbackData.players ? {
                online: fallbackData.players.online || 0,
                max: fallbackData.players.max || 100,
              } : undefined,
              version: fallbackData.version,
              motd: fallbackData.motd?.clean?.[0],
            });
            setLoading(false);
            return;
          }
        } catch (fallbackErr) {
          console.error('Fallback also failed:', fallbackErr);
        }
        
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
