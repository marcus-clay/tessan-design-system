export function AboutScreen() {
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
            &Agrave; propos
          </span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-5 pt-8 pb-8 space-y-6">
          {/* Brand name + version */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-[#12352D] text-[28px] font-bold tracking-[0.15em]">
              TESSAN
            </h1>
            <p className="text-[#9CA3AF] text-[14px]">Version 2.1.0</p>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#E5E7EB]" />

          {/* About paragraph */}
          <p className="text-[#4B5563] text-[14px] leading-relaxed text-center">
            Tessan est une solution de sant&eacute; innovante qui facilite l&apos;acc&egrave;s aux soins gr&acirc;ce &agrave; la t&eacute;l&eacute;consultation et aux cabines de sant&eacute; connect&eacute;es.
          </p>

          {/* Notre mission */}
          <div>
            <p
              className="text-[#12352D] text-[17px] font-bold mb-2"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Notre mission
            </p>
            <p className="text-[#4B5563] text-[14px] leading-relaxed">
              Rendre la sant&eacute; accessible &agrave; tous, partout en France, gr&acirc;ce &agrave; des solutions de t&eacute;l&eacute;m&eacute;decine et des cabines de sant&eacute; connect&eacute;es.
            </p>
          </div>

          {/* Links section */}
          <div className="bg-white rounded-2xl overflow-hidden divide-y divide-[#F3F4F6]">
            {/* Site web */}
            <div className="flex items-center justify-between px-4 py-3.5">
              <span className="text-[#12352D] text-[15px]">Site web</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>

            {/* Mentions légales */}
            <div className="flex items-center justify-between px-4 py-3.5">
              <span className="text-[#12352D] text-[15px]">Mentions l&eacute;gales</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Politique de confidentialité */}
            <div className="flex items-center justify-between px-4 py-3.5">
              <span className="text-[#12352D] text-[15px]">Politique de confidentialit&eacute;</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Conditions d'utilisation */}
            <div className="flex items-center justify-between px-4 py-3.5">
              <span className="text-[#12352D] text-[15px]">Conditions d&apos;utilisation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center gap-1.5 pt-4">
            <p className="text-[#9CA3AF] text-[12px]">
              &copy; 2025 Tessan. Tous droits r&eacute;serv&eacute;s.
            </p>
            <p className="text-[#9CA3AF] text-[12px]">
              Fait avec &#10084;&#65039; en France
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
