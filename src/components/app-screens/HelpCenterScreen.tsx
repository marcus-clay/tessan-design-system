export function HelpCenterScreen() {
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
            Centre d&apos;aide
          </span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-5 pt-6 pb-8 space-y-6">
          {/* Search input */}
          <div className="relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              readOnly
              placeholder="Rechercher une question..."
              className="w-full h-[44px] bg-white rounded-full pl-11 pr-4 text-[14px] text-[#12352D] placeholder-[#9CA3AF] outline-none border-none"
            />
          </div>

          {/* Questions fréquentes */}
          <div>
            <p
              className="text-[#12352D] text-[17px] font-bold mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Questions fr&eacute;quentes
            </p>
            <div className="space-y-3">
              {/* FAQ 1 — collapsed */}
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3.5">
                  <span className="text-[#12352D] text-[14px] font-medium flex-1 pr-2">
                    Comment fonctionne la t&eacute;l&eacute;consultation ?
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* FAQ 2 — expanded */}
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3.5">
                  <span className="text-[#12352D] text-[14px] font-medium flex-1 pr-2">
                    La t&eacute;l&eacute;consultation est-elle rembours&eacute;e ?
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </div>
                <div className="px-4 pb-4 -mt-1">
                  <p className="text-[#4B5563] text-[13px] leading-relaxed">
                    Oui, les t&eacute;l&eacute;consultations Tessan sont prises en charge par l&apos;Assurance Maladie dans les m&ecirc;mes conditions qu&apos;une consultation en cabinet. Le tiers payant est appliqu&eacute; automatiquement.
                  </p>
                </div>
              </div>

              {/* FAQ 3 — collapsed */}
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3.5">
                  <span className="text-[#12352D] text-[14px] font-medium flex-1 pr-2">
                    Comment trouver une cabine sant&eacute; ?
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* FAQ 4 — collapsed */}
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3.5">
                  <span className="text-[#12352D] text-[14px] font-medium flex-1 pr-2">
                    Comment renouveler une ordonnance ?
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Nous contacter */}
          <div>
            <p
              className="text-[#12352D] text-[17px] font-bold mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Nous contacter
            </p>
            <div className="space-y-3">
              {/* Email */}
              <div className="bg-white rounded-xl px-4 py-3.5 flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-[#12352D] text-[14px]">support@tessan.io</span>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl px-4 py-3.5 flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-[#12352D] text-[14px]">01 23 45 67 89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
