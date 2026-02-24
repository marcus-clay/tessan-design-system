export function SettingsScreen() {
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
            Param&egrave;tres
          </span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-5 pt-6 pb-8 space-y-6">
          {/* Section: Notifications */}
          <div>
            <p className="text-[#6B7280] text-[12px] font-semibold uppercase tracking-wider mb-2 px-1">
              Notifications
            </p>
            <div className="bg-white rounded-2xl overflow-hidden divide-y divide-[#F3F4F6]">
              {/* Rappels de prévention — ON */}
              <div className="flex items-center justify-between px-4 py-3.5">
                <span className="text-[#12352D] text-[15px]">Rappels de pr&eacute;vention</span>
                <div className="w-[44px] h-[26px] rounded-full bg-[#1B7A68] flex items-center px-[3px] cursor-pointer">
                  <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm ml-auto" />
                </div>
              </div>

              {/* Rappels de rendez-vous — ON */}
              <div className="flex items-center justify-between px-4 py-3.5">
                <span className="text-[#12352D] text-[15px]">Rappels de rendez-vous</span>
                <div className="w-[44px] h-[26px] rounded-full bg-[#1B7A68] flex items-center px-[3px] cursor-pointer">
                  <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm ml-auto" />
                </div>
              </div>

              {/* Notifications marketing — OFF */}
              <div className="flex items-center justify-between px-4 py-3.5">
                <span className="text-[#12352D] text-[15px]">Notifications marketing</span>
                <div className="w-[44px] h-[26px] rounded-full bg-[#D1D5DB] flex items-center px-[3px] cursor-pointer">
                  <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Apparence */}
          <div>
            <p className="text-[#6B7280] text-[12px] font-semibold uppercase tracking-wider mb-2 px-1">
              Apparence
            </p>
            <div className="bg-white rounded-2xl overflow-hidden divide-y divide-[#F3F4F6]">
              {/* Mode sombre — OFF */}
              <div className="flex items-center justify-between px-4 py-3.5">
                <span className="text-[#12352D] text-[15px]">Mode sombre</span>
                <div className="w-[44px] h-[26px] rounded-full bg-[#D1D5DB] flex items-center px-[3px] cursor-pointer">
                  <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm" />
                </div>
              </div>

              {/* Langue */}
              <div className="flex items-center justify-between px-4 py-3.5">
                <span className="text-[#12352D] text-[15px]">Langue</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#6B7280] text-[14px]">Fran&ccedil;ais</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Confidentialité */}
          <div>
            <p className="text-[#6B7280] text-[12px] font-semibold uppercase tracking-wider mb-2 px-1">
              Confidentialit&eacute;
            </p>
            <div className="bg-white rounded-2xl overflow-hidden divide-y divide-[#F3F4F6]">
              {/* Partage de données anonymes — OFF */}
              <div className="flex items-center justify-between px-4 py-3.5">
                <span className="text-[#12352D] text-[15px]">Partage de donn&eacute;es anonymes</span>
                <div className="w-[44px] h-[26px] rounded-full bg-[#D1D5DB] flex items-center px-[3px] cursor-pointer">
                  <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm" />
                </div>
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
          </div>

          {/* Section: Compte */}
          <div>
            <p className="text-[#6B7280] text-[12px] font-semibold uppercase tracking-wider mb-2 px-1">
              Compte
            </p>
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="px-4 py-3.5">
                <span className="text-[#DC2626] text-[15px] font-medium">
                  Supprimer mon compte
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
