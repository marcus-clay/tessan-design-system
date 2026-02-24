/* ------------------------------------------------------------------ */
/*  MapModalScreen - Map overlay with bottom sheet                    */
/* ------------------------------------------------------------------ */

export function MapModalScreen() {
  return (
    <div
      className="w-[375px] h-[812px] bg-[#D4E8F5] flex flex-col relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ---- Map area ---- */}
      <div className="relative flex-1" style={{ minHeight: '58%' }}>
        {/* Map background gradient + simulated roads */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(170deg, #D4E8F5 0%, #c8dfe8 30%, #d6e5d0 60%, #E5EDCC 100%)',
          }}
        >
          {/* Simulated road grid */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            {/* Horizontal roads */}
            <line x1="0" y1="80" x2="375" y2="80" stroke="#C5D5C0" strokeWidth="2" opacity="0.5" />
            <line x1="0" y1="160" x2="375" y2="160" stroke="#B8CCCA" strokeWidth="3" opacity="0.4" />
            <line x1="0" y1="240" x2="375" y2="240" stroke="#C5D5C0" strokeWidth="2" opacity="0.5" />
            <line x1="0" y1="320" x2="375" y2="320" stroke="#B8CCCA" strokeWidth="2" opacity="0.35" />
            {/* Vertical roads */}
            <line x1="60" y1="0" x2="60" y2="500" stroke="#C5D5C0" strokeWidth="2" opacity="0.4" />
            <line x1="140" y1="0" x2="140" y2="500" stroke="#B8CCCA" strokeWidth="3" opacity="0.35" />
            <line x1="230" y1="0" x2="230" y2="500" stroke="#C5D5C0" strokeWidth="2" opacity="0.4" />
            <line x1="310" y1="0" x2="310" y2="500" stroke="#B8CCCA" strokeWidth="2" opacity="0.35" />
            {/* Diagonal boulevard */}
            <line x1="0" y1="200" x2="375" y2="60" stroke="#B0C4B0" strokeWidth="4" opacity="0.3" />
            {/* Park / green block */}
            <rect x="160" y="100" width="80" height="60" rx="8" fill="#C5D8B8" opacity="0.4" />
            <rect x="40" y="260" width="60" height="40" rx="6" fill="#C5D8B8" opacity="0.35" />
          </svg>
        </div>

        {/* Status bar spacer */}
        <div className="h-[54px] relative z-10" />

        {/* Top bar: back button + close */}
        <div className="relative z-10 flex items-center justify-between px-4">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Red map pin marker (centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full z-10">
          <svg width="40" height="52" viewBox="0 0 40 52" fill="none">
            {/* Pin shadow */}
            <ellipse cx="20" cy="48" rx="8" ry="3" fill="#00000020" />
            {/* Pin body */}
            <path d="M20 0C10 0 2 8 2 18c0 12 18 30 18 30s18-18 18-30C38 8 30 0 20 0z" fill="#DC2626" />
            {/* Inner circle */}
            <circle cx="20" cy="17" r="7" fill="white" />
            {/* Inner dot */}
            <circle cx="20" cy="17" r="3" fill="#DC2626" />
          </svg>
        </div>
      </div>

      {/* ---- Bottom sheet ---- */}
      <div className="bg-white rounded-t-[24px] shrink-0 relative z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-[#D1D5DB] rounded-full" />
        </div>

        <div className="px-5 pb-8">
          {/* Title */}
          <h2
            className="text-[18px] font-semibold text-[#12352D] mb-1"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Pharmacie du Centre
          </h2>

          {/* Address */}
          <p className="text-[13px] text-[#6B7280] mb-3">
            12 rue de Rivoli, 75001 Paris
          </p>

          {/* Open status */}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#059669] shrink-0" />
            <span className="text-[13px] text-[#12352D] font-medium">
              Ouverte{' '}
              <span className="text-[#6B7280] font-normal">&middot; Ferme &agrave; 20h00</span>
            </span>
          </div>

          {/* Available cabins */}
          <p className="text-[13px] font-medium text-[#059669] mb-4">
            3 cabines disponibles
          </p>

          {/* Divider */}
          <div className="h-px bg-[#E5E7EB] mb-4" />

          {/* Services */}
          <p className="text-[13px] font-semibold text-[#12352D] mb-2.5">
            Services disponibles :
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {['T\u00e9l\u00e9consultation', 'Prise de sang', '\u00c9lectrocardiogramme'].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[12px] text-[#12352D] font-medium bg-[#F5F0E8] rounded-full px-3.5 py-1.5"
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          {/* Primary CTA */}
          <button className="w-full h-[50px] bg-[#EDE455] hover:bg-[#D4CC3A] text-[#1A1A1A] text-[15px] font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[0.98] cursor-pointer mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Itin&eacute;raire
          </button>

          {/* Secondary CTA */}
          <button className="w-full h-[50px] bg-white text-[#12352D] text-[15px] font-semibold rounded-xl border-2 border-[#12352D] flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98] cursor-pointer hover:bg-[#12352D] hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            R&eacute;server un cr&eacute;neau
          </button>
        </div>
      </div>
    </div>
  );
}
