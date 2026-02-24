export function SplashScreen() {
  return (
    <div className="w-[375px] h-[812px] bg-[#12352D] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Centered brand block */}
      <div className="flex flex-col items-center gap-3">
        <h1
          className="text-white text-[22px] font-bold tracking-[0.3em]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          TESSAN
        </h1>
        <p
          className="text-white/70 text-[16px] italic"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Votre sant&eacute;, simplifi&eacute;e
        </p>
      </div>

      {/* Loading dots at bottom */}
      <div className="absolute bottom-16 flex items-center gap-2">
        <span
          className="w-[6px] h-[6px] rounded-full bg-white/50 inline-block"
          style={{ animation: 'splashPulse 1.4s ease-in-out infinite' }}
        />
        <span
          className="w-[6px] h-[6px] rounded-full bg-white/50 inline-block"
          style={{ animation: 'splashPulse 1.4s ease-in-out 0.2s infinite' }}
        />
        <span
          className="w-[6px] h-[6px] rounded-full bg-white/50 inline-block"
          style={{ animation: 'splashPulse 1.4s ease-in-out 0.4s infinite' }}
        />
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes splashPulse {
          0%, 80%, 100% { opacity: 0.3; transform: scale(1); }
          40% { opacity: 1; transform: scale(1.35); }
        }
      `}</style>
    </div>
  );
}
