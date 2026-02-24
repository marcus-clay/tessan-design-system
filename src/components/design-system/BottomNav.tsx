interface BottomNavProps {
  activeTab?: string;
}

const tabs = [
  { id: 'accueil', label: 'Accueil', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'historique', label: 'Historique', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { id: 'ordonnances', label: 'Ordonnances', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { id: 'profil', label: 'Profil', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
];

export function BottomNav({ activeTab = 'accueil' }: BottomNavProps) {
  return (
    <div className="w-full max-w-[375px] bg-white/95 border-t border-[#E5E7EB] px-2 py-2">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button key={tab.id} className="flex flex-col items-center gap-0.5 px-3 py-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#12352D' : '#6B7280'} strokeWidth={isActive ? 2.5 : 1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d={tab.icon} />
              </svg>
              <span className={`text-[10px] ${isActive ? 'font-semibold text-[#12352D]' : 'text-[#6B7280]'}`}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
