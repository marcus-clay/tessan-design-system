import { BottomTabBar } from './BottomTabBar';

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
      <BottomTabBar activeTab="historique" />
    </div>
  );
}
