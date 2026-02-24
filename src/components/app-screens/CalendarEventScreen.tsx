const days = [
  { num: 13, day: 'Lun' },
  { num: 14, day: 'Mar' },
  { num: 15, day: 'Mer' },
  { num: 16, day: 'Jeu' },
  { num: 17, day: 'Ven' },
  { num: 18, day: 'Sam' },
  { num: 19, day: 'Dim' },
];

import { BottomTabBar } from './BottomTabBar';

export function CalendarEventScreen() {
  return (
    <div className="w-[375px] min-h-[812px] bg-[#F5F0E8] flex flex-col relative" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* White header */}
      <div className="w-full bg-white border-b border-[#E5E7EB] shrink-0">
        <div className="h-[54px]" />
        <div className="h-14 px-5 flex items-center relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-[#12352D]">Mon agenda</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Date header */}
        <div className="px-5 pt-5 pb-3">
          <h2 className="text-[18px] font-semibold text-[#12352D]" style={{ fontFamily: "'Fraunces', serif" }}>
            Janvier 2025
          </h2>
        </div>

        {/* Mini calendar strip */}
        <div className="px-5 pb-5">
          <div className="flex items-center gap-1 overflow-x-auto">
            {days.map((d) => {
              const isActive = d.num === 15;
              return (
                <button
                  key={d.num}
                  className={`flex flex-col items-center py-2 px-2.5 rounded-xl min-w-[44px] transition-colors ${
                    isActive ? 'bg-[#12352D]' : 'bg-white'
                  }`}
                >
                  <span className={`text-[11px] mb-1 ${isActive ? 'text-white/70' : 'text-[#9CA3AF]'}`}>
                    {d.day}
                  </span>
                  <span className={`text-[15px] font-semibold ${isActive ? 'text-white' : 'text-[#12352D]'}`}>
                    {d.num}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Event card */}
        <div className="px-5 mb-4">
          <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden flex">
            {/* Left colored bar */}
            <div className="w-1 bg-[#1B7A68] shrink-0 rounded-l-2xl" />

            {/* Card content */}
            <div className="flex-1 p-4 pl-4">
              {/* Time */}
              <p className="text-[13px] text-[#6B7280] mb-1">14:30 - 15:00</p>

              {/* Title */}
              <h3 className="text-[16px] font-semibold text-[#12352D] mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                T&eacute;l&eacute;consultation
              </h3>

              {/* Doctor */}
              <div className="flex items-center gap-2 mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-[13px] text-[#6B7280]">Dr. Sophie Laurent</span>
              </div>

              {/* Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#E5EDCC] text-[#059669]">
                Confirm&eacute;
              </span>
            </div>

            {/* Video icon */}
            <div className="flex items-start pt-4 pr-4">
              <div className="w-9 h-9 rounded-lg bg-[#F5F0E8] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Empty state */}
        <div className="px-5 py-8 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <p className="text-[14px] text-[#9CA3AF] text-center">
            Pas d&rsquo;autres rendez-vous ce jour
          </p>
        </div>
      </div>

      {/* Bottom nav */}
      <BottomTabBar activeTab="accueil" />
    </div>
  );
}
