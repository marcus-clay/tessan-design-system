import { useState } from 'react';

interface ToggleProps {
  label?: string;
  defaultChecked?: boolean;
}

export function Toggle({ label = '', defaultChecked = false }: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => setChecked(!checked)}
        className={`relative w-[52px] h-8 rounded-full transition-colors ${checked ? 'bg-[#12352D]' : 'bg-[#E5E7EB]'}`}
      >
        <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-sm transition-transform ${checked ? 'translate-x-5' : ''}`} />
      </button>
      {label && <span className="text-sm text-[#1F2937]">{label}</span>}
    </label>
  );
}
