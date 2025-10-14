'use client';

import { useEffect } from 'react';
import { Check, X, AlertCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  onClose: () => void;
  duration?: number;
}

const icons = {
  success: Check,
  error: X,
  warning: AlertCircle,
  info: Info,
};

const styles = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-slate-text',
  info: 'bg-blue-500 text-white',
};

export function Toast({ message, type = 'success', onClose, duration = 3000 }: ToastProps) {
  const Icon = icons[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed bottom-24 right-8 z-[60] flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl animate-slide-in-right ${styles[type]}`}
      role="alert"
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:opacity-70 transition-opacity"
        aria-label="Fermer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
