import { BottomTabBar } from './BottomTabBar';

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
      <BottomTabBar activeTab="ordonnances" />
    </div>
  );
}
