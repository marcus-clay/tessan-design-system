/* ------------------------------------------------------------------ */
/*  Inline SVG icon helpers                                           */
/* ------------------------------------------------------------------ */

function IconChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconMapPinGray() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconNavigation() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Cabin card data                                                   */
/* ------------------------------------------------------------------ */

interface CabinData {
  name: string;
  address: string;
  distance: string;
  openLabel: string;
  openColor: string;
  cabinsLabel: string;
  cabinsBg: string;
  cabinsColor: string;
  disabled: boolean;
}

const cabins: CabinData[] = [
  {
    name: 'Pharmacie du Centre',
    address: '12 rue de Rivoli, 75001 Paris',
    distance: '350m',
    openLabel: 'Ouverte jusqu\u2019\u00e0 20h',
    openColor: '#059669',
    cabinsLabel: '3 cabines disponibles',
    cabinsBg: '#E5EDCC',
    cabinsColor: '#12352D',
    disabled: false,
  },
  {
    name: 'Centre Commercial Beaugrenelle',
    address: '12 rue Linois, 75015 Paris',
    distance: '1.2km',
    openLabel: 'Ouverte jusqu\u2019\u00e0 21h',
    openColor: '#059669',
    cabinsLabel: '1 cabine disponible',
    cabinsBg: '#E5EDCC',
    cabinsColor: '#12352D',
    disabled: false,
  },
  {
    name: 'Gare Montparnasse',
    address: '17 bd Vaugirard, 75015 Paris',
    distance: '2.1km',
    openLabel: 'Ferm\u00e9e',
    openColor: '#DC2626',
    cabinsLabel: '0 cabine disponible',
    cabinsBg: '#F3F4F6',
    cabinsColor: '#9CA3AF',
    disabled: true,
  },
];

/* ------------------------------------------------------------------ */
/*  CabinSearchScreen                                                 */
/* ------------------------------------------------------------------ */

export function CabinSearchScreen() {
  return (
    <div
      className="w-[375px] h-[812px] bg-[#F5F0E8] flex flex-col relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ---- Green header ---- */}
      <div className="bg-[#12352D] rounded-b-[24px] pb-5 relative z-10 shrink-0">
        {/* Status bar spacer */}
        <div className="h-[54px]" />

        {/* Top row: back + title */}
        <div className="flex items-center px-5 mb-4 relative">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer -ml-2">
            <IconChevronLeft />
          </button>
          <span
            className="absolute left-1/2 -translate-x-1/2 text-[17px] font-semibold text-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Cabine sant&eacute;
          </span>
        </div>

        {/* Search input */}
        <div className="px-5">
          <div className="bg-white rounded-full flex items-center gap-2.5 px-4 h-[46px]">
            <IconSearch />
            <span className="text-[14px] text-[#9CA3AF]">Rechercher une adresse...</span>
          </div>
        </div>
      </div>

      {/* ---- Scrollable content ---- */}
      <div className="flex-1 overflow-y-auto pb-28">
        <div className="px-5 pt-5">
          {/* Section title */}
          <h2
            className="text-[17px] font-semibold text-[#12352D] mb-3"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            &Agrave; proximit&eacute;
          </h2>

          {/* Cabin cards */}
          <div className="flex flex-col gap-3">
            {cabins.map((cabin) => (
              <div
                key={cabin.name}
                className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                {/* Name row */}
                <div className="flex items-start gap-2.5 mb-1">
                  <div className="mt-0.5 shrink-0">
                    {cabin.disabled ? <IconMapPinGray /> : <IconMapPin />}
                  </div>
                  <h3
                    className="text-[15px] font-semibold text-[#12352D] leading-snug"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {cabin.name}
                  </h3>
                </div>

                {/* Address */}
                <p className="text-[13px] text-[#6B7280] ml-[30px] mb-1.5">
                  {cabin.address}
                </p>

                {/* Distance + open status */}
                <p className="text-[13px] text-[#6B7280] ml-[30px] mb-3">
                  {cabin.distance}{' '}
                  <span className="text-[#6B7280]">&middot;</span>{' '}
                  <span style={{ color: cabin.openColor, fontWeight: 500 }}>
                    {cabin.openLabel}
                  </span>
                </p>

                {/* Cabins badge + button row */}
                <div className="flex items-center justify-between ml-[30px]">
                  <span
                    className="text-[12px] font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: cabin.cabinsBg,
                      color: cabin.cabinsColor,
                    }}
                  >
                    {cabin.cabinsLabel}
                  </span>

                  <button
                    className={`flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-full border-2 transition-all duration-150 ${
                      cabin.disabled
                        ? 'border-[#D1D5DB] text-[#9CA3AF] cursor-not-allowed opacity-50'
                        : 'border-[#12352D] text-[#12352D] cursor-pointer hover:bg-[#12352D] hover:text-white active:scale-[0.97]'
                    }`}
                    disabled={cabin.disabled}
                  >
                    <IconNavigation />
                    Y aller
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Sticky bottom CTA ---- */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#F5F0E8] px-5 pt-3 pb-8 z-20">
        <button className="w-full h-[52px] bg-[#EDE455] hover:bg-[#D4CC3A] text-[#1A1A1A] text-[15px] font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[0.98] cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
            <line x1="8" y1="2" x2="8" y2="18" />
            <line x1="16" y1="6" x2="16" y2="22" />
          </svg>
          Voir sur la carte
        </button>
      </div>
    </div>
  );
}
