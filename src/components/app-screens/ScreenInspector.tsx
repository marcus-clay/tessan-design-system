import { useState } from 'react';

export interface TokenUsage {
  category: string;
  items: { token: string; value: string; cssVar: string }[];
}

export interface ComponentUsage {
  name: string;
  props?: string;
  link: string;
}

interface ScreenInspectorProps {
  tokens: TokenUsage[];
  components: ComponentUsage[];
  code: string;
}

export function ScreenInspector({ tokens, components, code }: ScreenInspectorProps) {
  const [activeTab, setActiveTab] = useState<'tokens' | 'components' | 'code'>('tokens');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-[340px] bg-[#0f0f23] rounded-2xl border border-white/10 overflow-hidden flex flex-col max-h-[852px]">
      {/* Tab bar */}
      <div className="flex border-b border-white/10">
        {(['tokens', 'components', 'code'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-xs font-medium transition-colors ${
              activeTab === tab
                ? 'text-[#EDE455] border-b-2 border-[#EDE455]'
                : 'text-white/40 hover:text-white/60'
            }`}
          >
            {tab === 'tokens' ? 'Tokens' : tab === 'components' ? 'Composants' : 'Code'}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}>
        {activeTab === 'tokens' && (
          <div className="space-y-5">
            {tokens.map((group) => (
              <div key={group.category}>
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#2D9B84] mb-2">
                  {group.category}
                </h4>
                <div className="space-y-1.5">
                  {group.items.map((item) => (
                    <div key={item.token} className="flex items-center gap-2.5 bg-white/5 rounded-lg px-3 py-2">
                      {item.value.startsWith('#') ? (
                        <div
                          className="w-5 h-5 rounded flex-shrink-0 border border-white/10"
                          style={{ backgroundColor: item.value }}
                        />
                      ) : (
                        <div className="w-5 h-5 rounded flex-shrink-0 bg-white/10 flex items-center justify-center">
                          <span className="text-[8px] text-white/50">T</span>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-medium text-white/80 truncate">{item.token}</p>
                        <p className="text-[10px] text-white/40 font-mono truncate">{item.cssVar}</p>
                      </div>
                      <span className="text-[10px] text-white/30 font-mono flex-shrink-0">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'components' && (
          <div className="space-y-2">
            {components.map((comp) => (
              <a
                key={comp.name}
                href={comp.link}
                className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2.5 hover:bg-white/10 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1B7A68]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-[#2D9B84]">
                    {comp.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium text-white/80">{comp.name}</p>
                  {comp.props && (
                    <p className="text-[10px] text-white/40 font-mono truncate">{comp.props}</p>
                  )}
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20 group-hover:text-white/50 flex-shrink-0">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>
            ))}
            {components.length === 0 && (
              <p className="text-xs text-white/30 text-center py-4">Aucun composant DS utilisé</p>
            )}
          </div>
        )}

        {activeTab === 'code' && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-white/40 font-mono">JSX</span>
              <button
                onClick={copyCode}
                className="text-[10px] text-white/40 hover:text-white/70 transition-colors flex items-center gap-1"
              >
                {copied ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Copié
                  </>
                ) : (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    Copier
                  </>
                )}
              </button>
            </div>
            <pre className="bg-white/5 rounded-lg p-3 overflow-x-auto text-[11px] font-mono leading-relaxed text-white/70 whitespace-pre-wrap break-words">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
