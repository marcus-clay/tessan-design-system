export function ConsultationDetailScreen() {
  return (
    <div className="w-[375px] min-h-[812px] bg-[#F5F0E8] flex flex-col relative" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* White header */}
      <div className="w-full bg-white border-b border-[#E5E7EB] shrink-0">
        <div className="h-[54px]" />
        <div className="h-14 px-5 flex items-center relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="absolute left-1/2 -translate-x-1/2 text-[17px] font-semibold text-[#12352D]">
            D&eacute;tail consultation
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-8 space-y-4">
        {/* Top consultation card */}
        <div className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-[#D4E8F5] flex items-center justify-center mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </div>
          <h1
            className="text-[17px] font-semibold text-[#12352D] mb-1"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            T&eacute;l&eacute;consultation
          </h1>
          <p className="text-[13px] text-[#6B7280] mb-3">
            15 janvier 2025 &middot; 14h30 - 15h00
          </p>
          <span className="inline-block text-[12px] font-medium text-[#059669] bg-[#E5EDCC] rounded-full px-3 py-1">
            Termin&eacute;e
          </span>
        </div>

        {/* Doctor card */}
        <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#D4E8F5] flex items-center justify-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-semibold text-[#12352D]">Dr. Sophie Laurent</p>
            <p className="text-[13px] text-[#6B7280] mt-0.5">M&eacute;decin g&eacute;n&eacute;raliste</p>
          </div>
        </div>

        {/* Documents section */}
        <div>
          <h2
            className="text-[16px] font-semibold text-[#12352D] mb-3 px-1"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Documents
          </h2>
          <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Compte-rendu */}
            <div className="px-4 py-3.5 flex items-center gap-3 cursor-pointer active:bg-gray-50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#F5F0E8] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span className="flex-1 text-[14px] text-[#12352D] font-medium">Compte-rendu</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            {/* Divider */}
            <div className="h-px bg-[#F3F4F6] mx-4" />
            {/* Ordonnance */}
            <div className="px-4 py-3.5 flex items-center gap-3 cursor-pointer active:bg-gray-50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#F5F0E8] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span className="flex-1 text-[14px] text-[#12352D] font-medium">Ordonnance</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Motif section */}
        <div>
          <h2
            className="text-[16px] font-semibold text-[#12352D] mb-3 px-1"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Motif
          </h2>
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <p className="text-[14px] text-[#4B5563] leading-relaxed">
              Renouvellement ordonnance
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="pt-2 space-y-3">
          {/* Replay consultation - disabled */}
          <button
            disabled
            className="w-full h-[52px] bg-[#E5E7EB] text-[#9CA3AF] font-semibold text-[15px] rounded-xl flex items-center justify-center gap-2 cursor-not-allowed"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Rejouer la consultation
          </button>

          {/* New appointment - primary */}
          <button className="w-full h-[52px] bg-[#EDE455] text-[#1A1A1A] font-semibold text-[15px] rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 cursor-pointer">
            Prendre un nouveau RDV
          </button>
        </div>
      </div>
    </div>
  );
}
