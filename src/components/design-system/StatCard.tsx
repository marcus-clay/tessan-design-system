interface StatCardProps {
  label?: string;
  value?: string;
  unit?: string;
  variant?: 'default' | 'highlight';
}

export function StatCard({ label = 'LABEL', value = '12', unit = '', variant = 'default' }: StatCardProps) {
  const isHighlight = variant === 'highlight';
  return (
    <div className={`rounded-xl px-4 py-3 min-w-[100px] ${isHighlight ? 'bg-[#12352D]' : 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]'}`}>
      <span className={`block text-[10px] font-semibold uppercase tracking-wider ${isHighlight ? 'text-white/70' : 'text-[#6B7280]'}`}>
        {label}
      </span>
      <span className={`block text-3xl mt-1 ${isHighlight ? 'text-[#EDE455]' : 'text-[#12352D]'}`} style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700 }}>
        {value}{unit && <span className="text-lg">{unit}</span>}
      </span>
    </div>
  );
}
