export function VideoCallScreen() {
  return (
    <div className="w-[375px] h-[812px] bg-[#1a1a1a] flex flex-col relative overflow-hidden">
      {/* Status bar */}
      <div className="h-[54px] shrink-0" />

      {/* Top info */}
      <div className="flex flex-col items-center shrink-0 pt-1 pb-4 relative z-10">
        <p
          className="text-white text-[17px] font-semibold"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Dr. Sophie Laurent
        </p>
        <p
          className="text-white/60 text-[14px] mt-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          05:23
        </p>
      </div>

      {/* Main video area */}
      <div className="flex-1 relative mx-3 rounded-2xl overflow-hidden">
        {/* Doctor video feed placeholder (teal-to-dark gradient) */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, #1B7A68 0%, #12352D 45%, #0a1f1a 100%)',
          }}
        />
        {/* Subtle video grain overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)',
          }}
        />

        {/* Self camera view (bottom-right) */}
        <div
          className="absolute bottom-4 right-4 w-[120px] h-[90px] rounded-xl overflow-hidden border-2 border-white/20"
          style={{
            background: 'linear-gradient(135deg, #2a2a2a 0%, #111111 100%)',
          }}
        >
          {/* Self silhouette hint */}
          <div className="w-full h-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity="0.3">
              <circle cx="16" cy="12" r="5" fill="white" />
              <path d="M6 28C6 23.582 10.478 20 16 20C21.522 20 26 23.582 26 28" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* Control bar */}
      <div className="shrink-0 px-5 pt-6 pb-2">
        <div className="flex items-center justify-between px-2">
          {/* Mute */}
          <button className="w-[60px] h-[60px] rounded-full bg-white/15 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="9" y="2" width="6" height="12" rx="3" stroke="white" strokeWidth="2" />
              <path d="M5 10V11C5 14.866 8.134 18 12 18C15.866 18 19 14.866 19 11V10" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 18V22" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Video off */}
          <button className="w-[60px] h-[60px] rounded-full bg-white/15 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="6" width="14" height="12" rx="2" stroke="white" strokeWidth="2" />
              <path d="M16 10L22 7V17L16 14V10Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </button>

          {/* End call */}
          <button className="w-[60px] h-[60px] rounded-full bg-[#DC2626] flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5 12.5C5 12.5 8 9 14 9C20 9 23 12.5 23 12.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M5 12.5L6.5 17.5C6.5 17.5 7 18.5 8.5 18.5C10 18.5 10 17 10 17V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M23 12.5L21.5 17.5C21.5 17.5 21 18.5 19.5 18.5C18 18.5 18 17 18 17V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Chat */}
          <button className="w-[60px] h-[60px] rounded-full bg-white/15 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 11.5C21 16.194 16.97 20 12 20C10.62 20 9.32 19.71 8.14 19.18L3 20.5L4.64 16.34C3.6 14.94 3 13.28 3 11.5C3 6.806 7.03 3 12 3C16.97 3 21 6.806 21 11.5Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </button>

          {/* More */}
          <button className="w-[60px] h-[60px] rounded-full bg-white/15 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="5" r="1.5" fill="white" />
              <circle cx="12" cy="12" r="1.5" fill="white" />
              <circle cx="12" cy="19" r="1.5" fill="white" />
            </svg>
          </button>
        </div>
      </div>

      {/* Safe area bottom padding */}
      <div className="h-[34px] shrink-0" />
    </div>
  );
}
