export function ConsentsScreen() {
  return (
    <div className="w-[375px] h-[812px] bg-[#F5F0E8] flex flex-col relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* White header */}
      <div className="w-full bg-white border-b border-[#E5E7EB] shrink-0">
        <div className="h-[54px]" />
        <div className="h-14 px-5 flex items-center relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="absolute left-1/2 -translate-x-1/2 text-[17px] font-semibold text-[#12352D]">
            Consentements
          </span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-28">
        <div className="px-5 pt-6 pb-8 space-y-4">
          {/* Info banner */}
          <div className="bg-[#D4E8F5] rounded-xl px-4 py-3.5 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <p className="text-[#12352D] text-[13px] leading-snug">
              Vos donn&eacute;es sont prot&eacute;g&eacute;es conform&eacute;ment au RGPD
            </p>
          </div>

          {/* Consent: Données de santé — ON, disabled */}
          <div className="bg-white rounded-xl px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-[#12352D] text-[15px] font-semibold">Donn&eacute;es de sant&eacute;</p>
                <p className="text-[#6B7280] text-[13px] mt-1 leading-snug">
                  N&eacute;cessaire au fonctionnement du service
                </p>
              </div>
              {/* Toggle ON disabled */}
              <div className="w-[44px] h-[26px] rounded-full bg-[#1B7A68] opacity-50 flex items-center px-[3px] shrink-0 mt-0.5">
                <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm ml-auto" />
              </div>
            </div>
          </div>

          {/* Consent: Partage avec votre médecin — ON */}
          <div className="bg-white rounded-xl px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-[#12352D] text-[15px] font-semibold">Partage avec votre m&eacute;decin</p>
                <p className="text-[#6B7280] text-[13px] mt-1 leading-snug">
                  Permet &agrave; votre m&eacute;decin d&apos;acc&eacute;der &agrave; votre historique
                </p>
              </div>
              {/* Toggle ON */}
              <div className="w-[44px] h-[26px] rounded-full bg-[#1B7A68] flex items-center px-[3px] cursor-pointer shrink-0 mt-0.5">
                <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm ml-auto" />
              </div>
            </div>
          </div>

          {/* Consent: Données anonymisées — OFF */}
          <div className="bg-white rounded-xl px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-[#12352D] text-[15px] font-semibold">Donn&eacute;es anonymis&eacute;es</p>
                <p className="text-[#6B7280] text-[13px] mt-1 leading-snug">
                  Contribue &agrave; l&apos;am&eacute;lioration du service
                </p>
              </div>
              {/* Toggle OFF */}
              <div className="w-[44px] h-[26px] rounded-full bg-[#D1D5DB] flex items-center px-[3px] cursor-pointer shrink-0 mt-0.5">
                <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm" />
              </div>
            </div>
          </div>

          {/* Consent: Communications — OFF */}
          <div className="bg-white rounded-xl px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-[#12352D] text-[15px] font-semibold">Communications</p>
                <p className="text-[#6B7280] text-[13px] mt-1 leading-snug">
                  Recevoir des informations sur les services Tessan
                </p>
              </div>
              {/* Toggle OFF */}
              <div className="w-[44px] h-[26px] rounded-full bg-[#D1D5DB] flex items-center px-[3px] cursor-pointer shrink-0 mt-0.5">
                <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm" />
              </div>
            </div>
          </div>

          {/* Last update text */}
          <p className="text-[#9CA3AF] text-[12px] text-center pt-2">
            Derni&egrave;re mise &agrave; jour : 12 d&eacute;cembre 2024
          </p>
        </div>
      </div>

      {/* Bottom sticky CTA */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] px-5 py-4 pb-8">
        <button className="w-full h-[52px] bg-[#EDE455] text-[#12352D] font-semibold text-[15px] rounded-2xl flex items-center justify-center active:scale-[0.98] transition-all duration-150 cursor-pointer">
          Enregistrer
        </button>
      </div>
    </div>
  );
}
