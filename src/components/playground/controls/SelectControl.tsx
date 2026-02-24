interface Props {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
  description?: string;
}

export function SelectControl({ label, value, options, onChange, description }: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#1F2937] mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-1.5 text-sm border border-[#E5E7EB] rounded-md bg-white text-[#1F2937] focus:outline-none focus:border-[#1B7A68]"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {description && <p className="text-[11px] text-[#6B7280] mt-1">{description}</p>}
    </div>
  );
}
