import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const variants: Record<string, string> = {
  primary: 'bg-[#EDE455] text-[#1A1A1A] hover:bg-[#D4CC3A]',
  secondary: 'bg-white text-[#12352D] border-2 border-[#12352D] hover:bg-[#12352D] hover:text-white',
  ghost: 'bg-transparent text-[#12352D] hover:bg-[#F5F0E8]',
};

const sizes: Record<string, string> = {
  sm: 'px-4 py-2 text-[13px] h-9',
  md: 'px-6 py-3 text-sm h-11',
  lg: 'px-7 py-3.5 text-[15px] h-[52px]',
};

export function Button({ variant = 'primary', size = 'md', children, fullWidth, disabled, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 cursor-pointer',
        'active:scale-[0.98]',
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
      ].join(' ')}
    >
      {children}
    </button>
  );
}
