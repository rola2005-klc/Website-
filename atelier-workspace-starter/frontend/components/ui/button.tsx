import * as React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'secondary';
};

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition',
        variant === 'default' && 'bg-zinc-900 text-white hover:bg-zinc-800',
        variant === 'outline' && 'border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50',
        variant === 'secondary' && 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
        className
      )}
      {...props}
    />
  );
}
