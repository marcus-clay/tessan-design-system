import type { ReactNode } from 'react';

interface CardProps {
  variant?: 'light' | 'tint' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

const variantStyles: Record<string, string> = {
  light: 'bg-white text-[#1F2937] shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
  tint: 'bg-[#F5F0E8] text-[#12352D]',
  dark: 'bg-[#12352D] text-white',
};

const paddings: Record<string, string> = {
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
};

export function Card({ variant = 'light', padding = 'md', children }: CardProps) {
  return (
    <div className={`rounded-2xl ${variantStyles[variant]} ${paddings[padding]}`}>
      {children || 'Contenu de la carte'}
    </div>
  );
}
