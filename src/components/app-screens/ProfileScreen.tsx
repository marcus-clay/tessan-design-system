export function ProfileScreen() {
  return (
    <div className="w-[375px] h-[812px] bg-[#F5F0E8] flex flex-col relative overflow-hidden">
      {/* Green header */}
      <div className="bg-[#12352D] rounded-b-3xl shrink-0">
        {/* Status bar */}
        <div className="h-[54px]" />

        {/* Profile info */}
        <div className="flex flex-col items-center pb-8 pt-2">
          {/* Avatar */}
          <div className="w-[80px] h-[80px] rounded-full bg-[#D4E8F5] flex items-center justify-center">
            <span
              className="text-white text-[28px] font-bold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              ML
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-white text-[24px] font-bold mt-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Marie Laurent
          </h1>

          {/* Email */}
          <p
            className="text-white/60 text-[14px] mt-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            marie.laurent@email.com
          </p>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-6 space-y-6">
          {/* Section: Mon compte */}
          <div>
            <p
              className="text-[#6B7280] text-[12px] font-semibold uppercase tracking-wider mb-2 px-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Mon compte
            </p>
            <div className="bg-white rounded-2xl overflow-hidden divide-y divide-[#F3F4F6]">
              {/* Données personnelles */}
              <div className="flex items-center px-4 py-3.5 gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span
                  className="flex-1 text-[#12352D] text-[15px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Donn&eacute;es personnelles
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>

              {/* Consentements */}
              <div className="flex items-center px-4 py-3.5 gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span
                  className="flex-1 text-[#12352D] text-[15px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Consentements
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>

              {/* Notifications */}
              <div className="flex items-center px-4 py-3.5 gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span
                  className="flex-1 text-[#12352D] text-[15px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Notifications
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Section: Support */}
          <div>
            <p
              className="text-[#6B7280] text-[12px] font-semibold uppercase tracking-wider mb-2 px-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Support
            </p>
            <div className="bg-white rounded-2xl overflow-hidden divide-y divide-[#F3F4F6]">
              {/* Centre d'aide */}
              <div className="flex items-center px-4 py-3.5 gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span
                  className="flex-1 text-[#12352D] text-[15px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Centre d&apos;aide
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>

              {/* À propos */}
              <div className="flex items-center px-4 py-3.5 gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span
                  className="flex-1 text-[#12352D] text-[15px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  &Agrave; propos
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Section: Paramètres */}
          <div>
            <p
              className="text-[#6B7280] text-[12px] font-semibold uppercase tracking-wider mb-2 px-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Param&egrave;tres
            </p>
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3.5 gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                <span
                  className="flex-1 text-[#12352D] text-[15px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Param&egrave;tres
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Logout button */}
          <div className="mt-8 flex justify-center">
            <button
              className="text-[#DC2626] text-[15px] font-semibold bg-transparent border-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Se d&eacute;connecter
            </button>
          </div>

          {/* Version */}
          <p
            className="text-[#9CA3AF] text-[12px] text-center pb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Tessan v2.1.0
          </p>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] flex items-center justify-around px-2 pt-2 pb-7">
        {/* Accueil */}
        <div className="flex flex-col items-center gap-1">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span
            className="text-[10px] text-[#9CA3AF]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Accueil
          </span>
        </div>

        {/* Rendez-vous */}
        <div className="flex flex-col items-center gap-1">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span
            className="text-[10px] text-[#9CA3AF]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Rendez-vous
          </span>
        </div>

        {/* Santé */}
        <div className="flex flex-col items-center gap-1">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span
            className="text-[10px] text-[#9CA3AF]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sant&eacute;
          </span>
        </div>

        {/* Profil (active) */}
        <div className="flex flex-col items-center gap-1">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span
            className="text-[10px] text-[#1B7A68] font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Profil
          </span>
        </div>
      </div>
    </div>
  );
}
