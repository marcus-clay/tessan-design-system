interface HeaderProps {
  variant?: 'dark' | 'light';
  title?: string;
  showBack?: boolean;
}

export function Header({ variant = 'dark', title = '', showBack = false }: HeaderProps) {
  const isDark = variant === 'dark';
  return (
    <div className={`w-full max-w-[375px] ${isDark ? 'bg-[#12352D]' : 'bg-white border-b border-[#E5E7EB]'}`}>
      <div className="h-[54px]" />
      <div className="h-14 px-5 flex items-center gap-3">
        {showBack && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDark ? 'white' : '#12352D'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        )}
        {title ? (
          <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-[#12352D]'}`}>{title}</span>
        ) : (
          isDark && <span className="font-bold text-white tracking-[0.2em] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>TESSAN</span>
        )}
      </div>
    </div>
  );
}
