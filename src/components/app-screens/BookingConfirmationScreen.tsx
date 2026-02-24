export function BookingConfirmationScreen() {
  return (
    <div className="w-[375px] min-h-[812px] bg-[#F5F0E8] flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Green header */}
      <div className="w-full bg-[#12352D] shrink-0">
        <div className="h-[54px]" />
        <div className="h-14 px-5 flex items-center relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-white">Confirmation</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Success icon and text */}
        <div className="flex flex-col items-center pt-10 pb-6 px-5">
          {/* Large green checkmark circle */}
          <div className="w-20 h-20 rounded-full bg-[#E5EDCC] flex items-center justify-center mb-5">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-[24px] font-bold text-[#12352D] text-center mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
            Rendez-vous confirm&eacute; !
          </h1>
          <p className="text-[14px] text-[#6B7280] text-center">
            Votre t&eacute;l&eacute;consultation est programm&eacute;e
          </p>
        </div>

        {/* Details card */}
        <div className="px-5 mb-6">
          <div className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-4">
            {/* Date */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5F0E8] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <span className="text-[14px] text-[#12352D] font-medium">Mercredi 15 janvier 2025</span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5F0E8] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="text-[14px] text-[#12352D] font-medium">14h30 - 15h00</span>
            </div>

            {/* Doctor */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5F0E8] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="text-[14px] text-[#12352D] font-medium">Dr. Sophie Laurent</span>
            </div>

            {/* Video consultation */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5F0E8] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <span className="text-[14px] text-[#12352D] font-medium">T&eacute;l&eacute;consultation vid&eacute;o</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="px-5 space-y-3 pb-6">
          {/* Secondary - Add to calendar */}
          <button className="w-full h-[52px] bg-white text-[#12352D] font-semibold text-[15px] rounded-lg border-2 border-[#12352D] flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 cursor-pointer hover:bg-[#12352D] hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="12" y1="14" x2="12" y2="18" />
              <line x1="10" y1="16" x2="14" y2="16" />
            </svg>
            Ajouter au calendrier
          </button>

          {/* Primary - Return home */}
          <button className="w-full h-[52px] bg-[#EDE455] text-[#1A1A1A] font-semibold text-[15px] rounded-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 cursor-pointer">
            Retour &agrave; l&rsquo;accueil
          </button>
        </div>

        {/* Note */}
        <p className="text-center text-[12px] text-[#9CA3AF] px-10 pb-8">
          Un SMS de rappel vous sera envoy&eacute; 1h avant
        </p>
      </div>
    </div>
  );
}
