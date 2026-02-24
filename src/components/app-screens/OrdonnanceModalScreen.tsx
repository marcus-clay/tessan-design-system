export function OrdonnanceModalScreen() {
  return (
    <div className="w-[375px] h-[812px] relative overflow-hidden">
      {/* Background content (dimmed) */}
      <div className="absolute inset-0 bg-[#1a1a1a]" />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal card (bottom sheet) */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl flex flex-col max-h-[720px]">
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-2 shrink-0">
          <div className="w-[40px] h-[4px] rounded-full bg-[#D1D5DB]" />
        </div>

        {/* Title + badge row */}
        <div className="px-5 pt-2 pb-3 flex items-center gap-3 shrink-0">
          <h2
            className="text-[#12352D] text-[20px] font-semibold"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Ordonnance
          </h2>
          <span
            className="px-2.5 py-1 rounded-full bg-[#ECFCCB] text-[#3F6212] text-[11px] font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Valide 3 mois
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#E5E7EB] mx-5 shrink-0" />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 pt-4 pb-4">
          {/* Doctor info */}
          <p
            className="text-[#6B7280] text-[13px] mb-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Dr. Sophie Laurent &middot; Médecin généraliste
          </p>

          {/* Date */}
          <p
            className="text-[#9CA3AF] text-[12px] mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            15 janvier 2025
          </p>

          {/* Prescription items */}
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-start gap-3">
              {/* Pill icon */}
              <div className="w-[40px] h-[40px] rounded-xl bg-[#F0FDF4] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="7" width="16" height="6" rx="3" fill="#1B7A68" />
                  <line x1="10" y1="7" x2="10" y2="13" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-[#12352D] text-[15px] font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Doliprane 1000mg
                </p>
                <p
                  className="text-[#6B7280] text-[13px] leading-relaxed mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  1 comprimé 3 fois par jour pendant 5 jours
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3">
              {/* Pill icon */}
              <div className="w-[40px] h-[40px] rounded-xl bg-[#F0FDF4] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="7" width="16" height="6" rx="3" fill="#1B7A68" />
                  <line x1="10" y1="7" x2="10" y2="13" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-[#12352D] text-[15px] font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Spray nasal Physiomer
                </p>
                <p
                  className="text-[#6B7280] text-[13px] leading-relaxed mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  3 pulvérisations par narine, 3 fois par jour
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#E5E7EB] mx-5 shrink-0" />

        {/* Bottom buttons */}
        <div className="px-5 pt-4 pb-8 space-y-3 shrink-0">
          {/* Download PDF - secondary */}
          <button
            className="w-full py-3.5 rounded-2xl border-2 border-[#D1D5DB] bg-transparent text-[#374151] text-[15px] font-semibold flex items-center justify-center gap-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {/* Download icon */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2V12M9 12L5 8M9 12L13 8" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 14V15C2 15.552 2.448 16 3 16H15C15.552 16 16 15.552 16 15V14" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Télécharger le PDF
          </button>

          {/* Send to pharmacy - primary yellow */}
          <button
            className="w-full py-3.5 rounded-2xl bg-[#EDE455] text-[#12352D] text-[15px] font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Envoyer à ma pharmacie
          </button>
        </div>
      </div>
    </div>
  );
}
