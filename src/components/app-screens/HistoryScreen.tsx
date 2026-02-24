export function HistoryScreen() {
  return (
    <div className="w-[375px] min-h-[812px] bg-[#F5F0E8] flex flex-col relative" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Green header */}
      <div className="w-full bg-[#12352D] rounded-b-3xl shrink-0 pb-5">
        {/* Status bar */}
        <div className="h-[54px]" />
        {/* Title */}
        <div className="px-5 mb-4">
          <h1
            className="text-[22px] font-bold text-white"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Historique
          </h1>
        </div>
        {/* Filter tabs */}
        <div className="px-5 flex items-center gap-2">
          <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-[13px] font-medium cursor-pointer">
            Tout
          </span>
          <span className="px-4 py-1.5 rounded-full text-white/70 text-[13px] font-medium cursor-pointer">
            T&eacute;l&eacute;consultation
          </span>
          <span className="px-4 py-1.5 rounded-full text-white/70 text-[13px] font-medium cursor-pointer">
            Cabine
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-24 space-y-5">
        {/* Section: Janvier 2025 */}
        <div>
          <h2 className="text-[13px] font-semibold text-[#6B7280] uppercase tracking-wide mb-3">
            Janvier 2025
          </h2>
          {/* Teleconsultation card */}
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-3">
            <div className="shrink-0">
              <div className="w-11 h-11 rounded-full bg-[#D4E8F5] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <span className="inline-block text-[11px] font-medium text-[#1B7A68] bg-[#E5EDCC] rounded px-1.5 py-0.5 mb-1">
                T&eacute;l&eacute;consultation
              </span>
              <p className="text-[15px] font-semibold text-[#12352D] leading-tight">
                Dr. Sophie Laurent
              </p>
              <p className="text-[13px] text-[#6B7280] mt-0.5">
                15 janvier 2025 &middot; 14h30
              </p>
            </div>
            <div className="flex flex-col items-end gap-2 shrink-0">
              <span className="inline-block text-[11px] font-medium text-[#059669] bg-[#E5EDCC] rounded-full px-2.5 py-0.5">
                Termin&eacute;e
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Section: Décembre 2024 */}
        <div>
          <h2 className="text-[13px] font-semibold text-[#6B7280] uppercase tracking-wide mb-3">
            D&eacute;cembre 2024
          </h2>
          <div className="space-y-3">
            {/* Cabine santé card */}
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-3">
              <div className="shrink-0">
                <div className="w-11 h-11 rounded-full bg-[#F2C8B4] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="9" y1="6" x2="9" y2="6.01" />
                    <line x1="15" y1="6" x2="15" y2="6.01" />
                    <line x1="9" y1="10" x2="9" y2="10.01" />
                    <line x1="15" y1="10" x2="15" y2="10.01" />
                    <path d="M9 18h6" />
                    <path d="M9 14h6" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[11px] font-medium text-[#92400E] bg-[#F2C8B4]/40 rounded px-1.5 py-0.5 mb-1">
                  Cabine sant&eacute;
                </span>
                <p className="text-[15px] font-semibold text-[#12352D] leading-tight">
                  Centre Sant&eacute; Paris 15e
                </p>
                <p className="text-[13px] text-[#6B7280] mt-0.5">
                  3 d&eacute;cembre 2024 &middot; 10h00
                </p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="inline-block text-[11px] font-medium text-[#059669] bg-[#E5EDCC] rounded-full px-2.5 py-0.5">
                  Termin&eacute;e
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>

            {/* Teleconsultation card */}
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-3">
              <div className="shrink-0">
                <div className="w-11 h-11 rounded-full bg-[#D4E8F5] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[11px] font-medium text-[#1B7A68] bg-[#E5EDCC] rounded px-1.5 py-0.5 mb-1">
                  T&eacute;l&eacute;consultation
                </span>
                <p className="text-[15px] font-semibold text-[#12352D] leading-tight">
                  Dr. Marc Dubois
                </p>
                <p className="text-[13px] text-[#6B7280] mt-0.5">
                  28 novembre 2024 &middot; 09h00
                </p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="inline-block text-[11px] font-medium text-[#059669] bg-[#E5EDCC] rounded-full px-2.5 py-0.5">
                  Termin&eacute;e
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] px-2 pt-2 pb-7 flex items-center justify-around">
        {/* Accueil */}
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-[10px] text-[#9CA3AF]">Accueil</span>
        </div>
        {/* Historique - active */}
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-[10px] font-semibold text-[#1B7A68]">Historique</span>
        </div>
        {/* Consulter */}
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <div className="w-12 h-12 -mt-5 rounded-full bg-[#EDE455] flex items-center justify-center shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <span className="text-[10px] text-[#9CA3AF]">Consulter</span>
        </div>
        {/* Ordonnances */}
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span className="text-[10px] text-[#9CA3AF]">Ordonnances</span>
        </div>
        {/* Profil */}
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-[10px] text-[#9CA3AF]">Profil</span>
        </div>
      </div>
    </div>
  );
}
