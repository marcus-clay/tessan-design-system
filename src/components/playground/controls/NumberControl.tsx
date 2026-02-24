interface Props {
  label: string;
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
  description?: string;
}

export function NumberControl({ label, value, onChange, min = 0, max = 100, step = 1, description }: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#1F2937] mb-1">
        {label} <span className="text-[#6B7280] font-mono">{value}</span>
      </label>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#1B7A68]"
      />
      {description && <p className="text-[11px] text-[#6B7280] mt-1">{description}</p>}
    </div>
  );
}
