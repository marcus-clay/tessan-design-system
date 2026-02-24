export function ReminderDetailScreen() {
  return (
    <div className="w-[375px] min-h-[812px] bg-[#F5F0E8] flex flex-col relative" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div className="w-full bg-white border-b border-[#E5E7EB] shrink-0">
        <div className="h-[54px]" />
        <div className="h-14 px-5 flex items-center relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-[#12352D]">Rappel sant&eacute;</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-28">
        {/* Yellow badge area */}
        <div className="bg-[#FDF5DC] px-5 py-6">
          <div className="flex items-center gap-3 mb-2">
            {/* Blood test icon */}
            <div className="w-11 h-11 rounded-full bg-[#EDE455]/40 flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v6" />
                <path d="M12 22c-4 0-6-2.69-6-6 0-4 6-10 6-10s6 6 6 10c0 3.31-2 6-6 6z" />
                <path d="M9 17c0-1.66 1.34-3 3-3" />
              </svg>
            </div>
            <div>
              <h1 className="text-[22px] font-bold text-[#12352D] leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                Bilan sanguin annuel
              </h1>
            </div>
          </div>
          <p className="text-[13px] text-[#6B7280] mt-1">Rappel cr&eacute;&eacute; le 12 d&eacute;cembre 2024</p>
        </div>

        {/* Info cards */}
        <div className="px-5 py-5 space-y-4">
          {/* Why this reminder card */}
          <div className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <h2 className="text-[16px] font-semibold text-[#12352D] mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
              Pourquoi ce rappel ?
            </h2>
            <p className="text-[14px] text-[#4B5563] leading-relaxed">
              Un bilan sanguin annuel permet de v&eacute;rifier votre &eacute;tat de sant&eacute; g&eacute;n&eacute;ral et de d&eacute;tecter d&rsquo;&eacute;ventuelles anomalies.
            </p>
          </div>

          {/* Recommendation card */}
          <div className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <h2 className="text-[16px] font-semibold text-[#12352D] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
              Recommandation
            </h2>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-[14px] text-[#4B5563]">Fr&eacute;quence : tous les 12 mois</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="text-[14px] text-[#4B5563]">Dernier bilan : janvier 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span className="text-[14px] text-[#DC2626] font-semibold">Statut : En retard</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom sticky CTA */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] px-5 py-4 pb-8">
        <button className="w-full h-[52px] bg-[#EDE455] text-[#1A1A1A] font-semibold text-[15px] rounded-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 cursor-pointer">
          Prendre rendez-vous
        </button>
      </div>
    </div>
  );
}
