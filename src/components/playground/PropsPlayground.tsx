import { useState, type ReactNode } from 'react';
import { SelectControl } from './controls/SelectControl';
import { BooleanControl } from './controls/BooleanControl';
import { TextControl } from './controls/TextControl';
import { NumberControl } from './controls/NumberControl';
import type { ComponentPlaygroundConfig, PropDefinition } from './propDefinitions';

interface Props {
  config: ComponentPlaygroundConfig;
  renderComponent: (props: Record<string, any>) => ReactNode;
}

function ControlRenderer({ def, value, onChange }: { def: PropDefinition; value: any; onChange: (v: any) => void }) {
  switch (def.type) {
    case 'select':
      return <SelectControl label={def.name} value={value} options={def.options!} onChange={onChange} description={def.description} />;
    case 'boolean':
      return <BooleanControl label={def.name} value={value} onChange={onChange} description={def.description} />;
    case 'text':
      return <TextControl label={def.name} value={value} onChange={onChange} description={def.description} />;
    case 'number':
      return <NumberControl label={def.name} value={value} onChange={onChange} min={def.min} max={def.max} step={def.step} description={def.description} />;
    default:
      return null;
  }
}

export function PropsPlayground({ config, renderComponent }: Props) {
  const [propValues, setPropValues] = useState<Record<string, any>>(() => {
    const init: Record<string, any> = {};
    config.props.forEach((p) => { init[p.name] = p.defaultValue; });
    if (config.defaultChildren) init.children = config.defaultChildren;
    return init;
  });

  const update = (name: string, value: any) => {
    setPropValues((prev) => ({ ...prev, [name]: value }));
  };

  const generateCode = (): string => {
    const propsStr = config.props
      .filter((p) => propValues[p.name] !== p.defaultValue)
      .map((p) => {
        const val = propValues[p.name];
        if (typeof val === 'boolean') return val ? p.name : '';
        if (typeof val === 'string') return `${p.name}="${val}"`;
        return `${p.name}={${JSON.stringify(val)}}`;
      })
      .filter(Boolean)
      .join(' ');

    const children = propValues.children || '';
    const tag = config.name;
    if (children) {
      return `<${tag}${propsStr ? ' ' + propsStr : ''}>${children}</${tag}>`;
    }
    return `<${tag}${propsStr ? ' ' + propsStr : ''} />`;
  };

  return (
    <div className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
      <div className="p-8 bg-[#F5F0E8] flex items-center justify-center min-h-[180px]">
        {renderComponent(propValues)}
      </div>

      <div className="border-t border-[#E5E7EB] p-5">
        <h4 className="text-xs font-semibold text-[#12352D] uppercase tracking-wider mb-4">Props</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {config.defaultChildren && (
            <TextControl label="children" value={propValues.children} onChange={(v) => update('children', v)} />
          )}
          {config.props.map((prop) => (
            <ControlRenderer key={prop.name} def={prop} value={propValues[prop.name]} onChange={(v) => update(prop.name, v)} />
          ))}
        </div>
      </div>

      <div className="border-t border-[#E5E7EB] bg-[#F7F5F0] px-5 py-3">
        <pre className="text-sm font-mono text-[#12352D] overflow-x-auto whitespace-pre-wrap">
          {generateCode()}
        </pre>
      </div>
    </div>
  );
}
