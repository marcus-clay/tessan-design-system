import type { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'status' | 'kpi';
  status?: 'normal' | 'warning' | 'danger' | 'success';
  children?: ReactNode;
}

const statusStyles: Record<string, string> = {
  normal: 'bg-[#F5F0E8] text-[#12352D]',
  warning: 'bg-[#FEF3C7] text-[#D97706]',
  danger: 'bg-[#FEE2E2] text-[#DC2626]',
  success: 'bg-[#E5EDCC] text-[#059669]',
};

export function Badge({ variant = 'status', status = 'normal', children }: BadgeProps) {
  if (variant === 'kpi') {
    return (
      <span className="inline-block px-4 py-2 border-2 border-dashed border-[#EDE455] rounded-full text-[13px] font-semibold text-[#12352D]">
        {children || 'RAPPEL SANTE'}
      </span>
    );
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}>
      {children || status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
