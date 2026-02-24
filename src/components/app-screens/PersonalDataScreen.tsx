export function PersonalDataScreen() {
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
            Donn&eacute;es personnelles
          </span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-28">
        <div className="px-5 pt-6 pb-8 space-y-3">
          {/* Prénom */}
          <div className="bg-white rounded-xl px-4 py-3">
            <p className="text-[#9CA3AF] text-[12px] mb-1">Pr&eacute;nom</p>
            <p className="text-[#12352D] text-[15px]">Marie</p>
          </div>

          {/* Nom */}
          <div className="bg-white rounded-xl px-4 py-3">
            <p className="text-[#9CA3AF] text-[12px] mb-1">Nom</p>
            <p className="text-[#12352D] text-[15px]">Laurent</p>
          </div>

          {/* Date de naissance */}
          <div className="bg-white rounded-xl px-4 py-3">
            <p className="text-[#9CA3AF] text-[12px] mb-1">Date de naissance</p>
            <p className="text-[#12352D] text-[15px]">15/03/1990</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl px-4 py-3">
            <p className="text-[#9CA3AF] text-[12px] mb-1">Email</p>
            <p className="text-[#12352D] text-[15px]">marie.laurent@email.com</p>
          </div>

          {/* Téléphone */}
          <div className="bg-white rounded-xl px-4 py-3">
            <p className="text-[#9CA3AF] text-[12px] mb-1">T&eacute;l&eacute;phone</p>
            <p className="text-[#12352D] text-[15px]">06 12 34 56 78</p>
          </div>

          {/* Adresse */}
          <div className="bg-white rounded-xl px-4 py-3">
            <p className="text-[#9CA3AF] text-[12px] mb-1">Adresse</p>
            <p className="text-[#12352D] text-[15px]">12 rue de la Paix, 75002 Paris</p>
          </div>

          {/* N° Sécurité sociale */}
          <div className="bg-white rounded-xl px-4 py-3">
            <p className="text-[#9CA3AF] text-[12px] mb-1">N&deg; S&eacute;curit&eacute; sociale</p>
            <p className="text-[#12352D] text-[15px]">2 90 03 75 *** *** **</p>
          </div>
        </div>
      </div>

      {/* Bottom sticky CTA */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] px-5 py-4 pb-8">
        <button className="w-full h-[52px] bg-[#EDE455] text-[#12352D] font-semibold text-[15px] rounded-2xl flex items-center justify-center active:scale-[0.98] transition-all duration-150 cursor-pointer">
          Modifier
        </button>
      </div>
    </div>
  );
}
