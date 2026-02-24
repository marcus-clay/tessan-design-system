interface Props {
  label: string;
  value: boolean;
  onChange: (val: boolean) => void;
  description?: string;
}

export function BooleanControl({ label, value, onChange, description }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <span className="text-xs font-medium text-[#1F2937]">{label}</span>
        {description && <p className="text-[11px] text-[#6B7280]">{description}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={`relative w-10 h-6 rounded-full transition-colors ${value ? 'bg-[#1B7A68]' : 'bg-[#E5E7EB]'}`}
      >
        <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform shadow-sm ${value ? 'translate-x-4' : ''}`} />
      </button>
    </div>
  );
}
