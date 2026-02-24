import { useState } from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

export function Input({ label = '', placeholder = '', error = '', disabled = false }: InputProps) {
  const [value, setValue] = useState('');
  const hasError = error.length > 0;

  return (
    <div className="w-full max-w-xs">
      {label && <label className="block text-sm font-medium text-[#1F2937] mb-1.5">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={[
          'w-full px-4 py-3 text-sm rounded-lg border bg-white text-[#1F2937] transition-colors',
          'placeholder:text-[#6B7280] focus:outline-none',
          hasError ? 'border-[#DC2626] border-2' : 'border-[#E5E7EB] focus:border-[#12352D] focus:border-2',
          disabled ? 'opacity-50 cursor-not-allowed bg-[#F0F0F0]' : '',
        ].join(' ')}
      />
      {hasError && <p className="mt-1 text-xs text-[#DC2626]">{error}</p>}
    </div>
  );
}
