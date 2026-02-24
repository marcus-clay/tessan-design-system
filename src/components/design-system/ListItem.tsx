interface ListItemProps {
  title?: string;
  subtitle?: string;
  showArrow?: boolean;
}

export function ListItem({ title = 'Action Title', subtitle = 'Description text', showArrow = true }: ListItemProps) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-pointer hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow">
      <div className="w-11 h-11 rounded-full bg-[#F5F0E8] flex items-center justify-center flex-shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[15px] font-semibold text-[#12352D]">{title}</p>
        {subtitle && <p className="text-[13px] text-[#6B7280] mt-0.5">{subtitle}</p>}
      </div>
      {showArrow && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
    </div>
  );
}
