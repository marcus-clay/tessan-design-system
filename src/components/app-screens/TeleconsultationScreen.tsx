export function TeleconsultationScreen() {
  return (
    <div className="w-[375px] h-[812px] bg-[#F5F0E8] flex flex-col relative overflow-hidden">
      {/* Green header */}
      <div className="bg-[#12352D] rounded-b-[24px] shrink-0">
        {/* Status bar */}
        <div className="h-[54px]" />
        {/* Nav row */}
        <div className="flex items-center px-5 pb-5">
          {/* Back chevron */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="ml-3 text-white text-[17px] font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Téléconsultation
          </span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-5 pt-6 pb-8 flex flex-col items-center gap-5">
          {/* Illustration: teal circle with video camera icon */}
          <div className="w-[120px] h-[120px] rounded-full bg-[#1B7A68] flex items-center justify-center">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <rect x="6" y="14" width="28" height="24" rx="4" stroke="white" strokeWidth="2.5" />
              <path d="M34 22L46 16V36L34 30V22Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Title */}
          <h1
            className="text-[#12352D] text-[22px] font-bold text-center leading-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Consultez un médecin en vidéo
          </h1>

          {/* Subtitle */}
          <p
            className="text-[#6B7280] text-[14px] text-center -mt-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Disponible 7j/7, de 8h à 23h
          </p>

          {/* Doctor available card */}
          <div className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm">
            {/* Avatar */}
            <div className="w-[48px] h-[48px] rounded-full bg-[#D4E8F5] flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="9" r="4" fill="#8BB8D6" />
                <path d="M4 21C4 17.134 7.582 14 12 14C16.418 14 20 17.134 20 21" fill="#8BB8D6" />
              </svg>
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <p
                className="text-[#12352D] text-[15px] font-semibold truncate"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Dr. Sophie Laurent
              </p>
              <p
                className="text-[#6B7280] text-[13px] truncate"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Médecin généraliste
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-[8px] h-[8px] rounded-full bg-[#22C55E] inline-block" />
                <span
                  className="text-[#22C55E] text-[12px] font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Disponible maintenant
                </span>
              </div>
            </div>
          </div>

          {/* Motif de consultation */}
          <div className="w-full">
            <p
              className="text-[#12352D] text-[15px] font-semibold mb-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Motif de consultation
            </p>
            <div className="flex flex-wrap gap-2">
              {/* Selected chip */}
              <span
                className="px-4 py-2 rounded-full bg-[#12352D] text-white text-[13px] font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Renouvellement ordonnance
              </span>
              {/* Unselected chips */}
              <span
                className="px-4 py-2 rounded-full border border-[#D1D5DB] text-[#374151] text-[13px] font-medium bg-transparent"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Symptômes
              </span>
              <span
                className="px-4 py-2 rounded-full border border-[#D1D5DB] text-[#374151] text-[13px] font-medium bg-transparent"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Question médicale
              </span>
              <span
                className="px-4 py-2 rounded-full border border-[#D1D5DB] text-[#374151] text-[13px] font-medium bg-transparent"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Autre
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="w-full py-4 rounded-2xl bg-[#EDE455] text-[#12352D] text-[16px] font-semibold mt-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Démarrer la consultation
          </button>

          {/* Small text */}
          <p
            className="text-[#9CA3AF] text-[12px] text-center -mt-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Consultation remboursée par l'Assurance Maladie
          </p>
        </div>
      </div>
    </div>
  );
}
