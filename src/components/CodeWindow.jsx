import { FiFileText } from 'react-icons/fi'

/**
 * The hero's signature element: a syntax-highlighted editor window whose
 * lines animate in once on load. Purely decorative, so it's aria-hidden.
 */

// Leading spaces are preserved via `whitespace-pre` on the row.
const lines = [
  <span className="tok-com">// developer profile</span>,
  <>
    <span className="tok-key">const</span> sumit <span className="tok-punc">=</span>{' '}
    <span className="tok-punc">{'{'}</span>
  </>,
  <>
    {'  '}
    <span className="tok-prop">role</span>
    <span className="tok-punc">:</span> <span className="tok-str">"MERN Full Stack Developer"</span>
    <span className="tok-punc">,</span>
  </>,
  <>
    {'  '}
    <span className="tok-prop">stack</span>
    <span className="tok-punc">:</span> <span className="tok-punc">[</span>
    <span className="tok-str">"MongoDB"</span>
    <span className="tok-punc">,</span> <span className="tok-str">"Express"</span>
    <span className="tok-punc">,</span> <span className="tok-str">"React"</span>
    <span className="tok-punc">,</span> <span className="tok-str">"Node"</span>
    <span className="tok-punc">],</span>
  </>,
  <>
    {'  '}
    <span className="tok-prop">builds</span>
    <span className="tok-punc">:</span> <span className="tok-punc">[</span>
    <span className="tok-str">"REST APIs"</span>
    <span className="tok-punc">,</span> <span className="tok-str">"auth"</span>
    <span className="tok-punc">,</span> <span className="tok-str">"payments"</span>
    <span className="tok-punc">],</span>
  </>,
  <>
    {'  '}
    <span className="tok-prop">learning</span>
    <span className="tok-punc">:</span> <span className="tok-punc">[</span>
    <span className="tok-str">"Python"</span>
    <span className="tok-punc">,</span> <span className="tok-str">"AI/ML"</span>
    <span className="tok-punc">,</span> <span className="tok-str">"LLMs"</span>
    <span className="tok-punc">],</span>
  </>,
  <>
    {'  '}
    <span className="tok-prop">openToWork</span>
    <span className="tok-punc">:</span> <span className="tok-num">true</span>
    <span className="tok-punc">,</span>
  </>,
  <>
    <span className="tok-punc">{'}'}</span>
    <span className="tok-punc">;</span>
  </>,
  <>&nbsp;</>,
  <span className="tok-com">// let's build something great</span>,
  <>
    sumit<span className="tok-punc">.</span>
    <span className="tok-fn">connect</span>
    <span className="tok-punc">(</span>
    <span className="tok-str">"hire me"</span>
    <span className="tok-punc">)</span>
    <span className="tok-punc">;</span>
  </>,
]

export default function CodeWindow() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-2xl border border-line-strong bg-surface/90 shadow-glow backdrop-blur-sm"
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-line bg-white/[0.02] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-1 flex items-center gap-2 rounded-md bg-white/[0.04] px-2.5 py-1 text-xs text-muted">
          <FiFileText size={13} className="text-accent" />
          <span className="font-mono">sumit.js</span>
        </div>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto px-3 py-4 sm:px-5">
        <pre className="font-mono text-[0.78rem] leading-[1.65] text-[#c9d3e6] sm:text-[0.85rem]">
          <code>
            {lines.map((line, i) => (
              <div
                key={i}
                className="code-line flex whitespace-pre"
                style={{ animationDelay: `${250 + i * 70}ms` }}
              >
                <span className="mr-4 hidden w-5 shrink-0 select-none text-right text-faint sm:inline-block">
                  {i + 1}
                </span>
                <span className="min-w-0">
                  {line}
                  {i === lines.length - 1 && (
                    <span className="ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.15em] bg-accent/80 animate-blink" />
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Status strip */}
      <div className="flex items-center justify-between border-t border-line bg-white/[0.02] px-4 py-2 font-mono text-[0.7rem] text-faint">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          main
        </span>
        <span>UTF-8 · JavaScript</span>
      </div>
    </div>
  )
}
