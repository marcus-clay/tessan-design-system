export function NotesModalScreen() {
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

        {/* Title */}
        <div className="px-5 pt-2 pb-3 shrink-0">
          <h2
            className="text-[#12352D] text-[20px] font-semibold"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Notes du médecin
          </h2>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#E5E7EB] mx-5 shrink-0" />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 pt-4 pb-4">
          {/* Date */}
          <p
            className="text-[#6B7280] text-[13px] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            15 janvier 2025
          </p>

          {/* Diagnostic */}
          <p
            className="text-[#12352D] text-[15px] font-semibold mb-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Diagnostic : Rhinopharyngite aiguë
          </p>

          {/* Description */}
          <p
            className="text-[#374151] text-[14px] leading-relaxed mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Le patient présente des symptômes de rhinopharyngite : congestion nasale, maux de gorge légers, fatigue modérée. Pas de fièvre.
          </p>

          {/* Recommandations */}
          <p
            className="text-[#12352D] text-[15px] font-semibold mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Recommandations :
          </p>

          {/* Bullet list */}
          <ul className="space-y-2 mb-5">
            {[
              'Repos 2-3 jours',
              'Hydratation abondante',
              'Paracétamol si besoin (max 3g/jour)',
              'Lavages de nez au sérum physiologique',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-[6px] h-[6px] rounded-full bg-[#1B7A68] mt-[7px] shrink-0" />
                <span
                  className="text-[#374151] text-[14px] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Follow-up note */}
          <p
            className="text-[#374151] text-[14px] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Consultation de suivi si les symptômes persistent au-delà de 7 jours.
          </p>
        </div>

        {/* Bottom button area */}
        <div className="px-5 pt-2 pb-8 shrink-0">
          <button
            className="w-full py-3.5 rounded-2xl border-2 border-[#D1D5DB] bg-transparent text-[#374151] text-[15px] font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
