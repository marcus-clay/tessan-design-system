export function OrdonnancesScreen() {
  return (
    <div className="w-[375px] min-h-[812px] bg-[#F5F0E8] flex flex-col relative" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Green header */}
      <div className="w-full bg-[#12352D] rounded-b-3xl shrink-0 pb-6">
        {/* Status bar */}
        <div className="h-[54px]" />
        {/* Title */}
        <div className="px-5">
          <h1
            className="text-[22px] font-bold text-white"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Ordonnances
          </h1>
          <p className="text-[14px] text-white/70 mt-1">
            3 ordonnances actives
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-24 space-y-3">
        {/* Doliprane card */}
        <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-pointer active:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-[#FDF5DC] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.5 1.5H13.5C14.33 1.5 15 2.17 15 3V4.5H9V3C9 2.17 9.67 1.5 10.5 1.5Z" />
                <rect x="6" y="4.5" width="12" height="18" rx="3" ry="3" />
                <line x1="12" y1="10" x2="12" y2="16" />
                <line x1="9" y1="13" x2="15" y2="13" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-semibold text-[#12352D]">Doliprane 1000mg</p>
              <p className="text-[13px] text-[#6B7280] mt-0.5">
                Dr. Sophie Laurent &middot; 15 jan. 2025
              </p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          {/* Progress bar */}
          <div className="mb-2">
            <div className="w-full h-2 bg-[#E5EDCC] rounded-full overflow-hidden">
              <div className="h-full bg-[#059669] rounded-full" style={{ width: '70%' }} />
            </div>
          </div>
          <p className="text-[12px] text-[#6B7280]">Expire dans 2 mois</p>
        </div>

        {/* Spray nasal card */}
        <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-pointer active:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-[#FDF5DC] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.5 1.5H13.5C14.33 1.5 15 2.17 15 3V4.5H9V3C9 2.17 9.67 1.5 10.5 1.5Z" />
                <rect x="6" y="4.5" width="12" height="18" rx="3" ry="3" />
                <line x1="12" y1="10" x2="12" y2="16" />
                <line x1="9" y1="13" x2="15" y2="13" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-semibold text-[#12352D]">Spray nasal Physiomer</p>
              <p className="text-[13px] text-[#6B7280] mt-0.5">
                Dr. Sophie Laurent &middot; 15 jan. 2025
              </p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          {/* Progress bar */}
          <div className="mb-2">
            <div className="w-full h-2 bg-[#E5EDCC] rounded-full overflow-hidden">
              <div className="h-full bg-[#059669] rounded-full" style={{ width: '70%' }} />
            </div>
          </div>
          <p className="text-[12px] text-[#6B7280]">Expire dans 2 mois</p>
        </div>

        {/* Amoxicilline card */}
        <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-pointer active:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-[#FDF5DC] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.5 1.5H13.5C14.33 1.5 15 2.17 15 3V4.5H9V3C9 2.17 9.67 1.5 10.5 1.5Z" />
                <rect x="6" y="4.5" width="12" height="18" rx="3" ry="3" />
                <line x1="12" y1="10" x2="12" y2="16" />
                <line x1="9" y1="13" x2="15" y2="13" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-semibold text-[#12352D]">Amoxicilline 500mg</p>
              <p className="text-[13px] text-[#6B7280] mt-0.5">
                Dr. Marc Dubois &middot; 3 d&eacute;c. 2024
              </p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          {/* Progress bar */}
          <div className="mb-2">
            <div className="w-full h-2 bg-[#E5EDCC] rounded-full overflow-hidden">
              <div className="h-full bg-[#059669] rounded-full" style={{ width: '20%' }} />
            </div>
          </div>
          <p className="text-[12px] text-[#D97706] font-medium">Expire dans 15 jours</p>
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
        {/* Historique */}
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-[10px] text-[#9CA3AF]">Historique</span>
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
        {/* Ordonnances - active */}
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span className="text-[10px] font-semibold text-[#1B7A68]">Ordonnances</span>
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
