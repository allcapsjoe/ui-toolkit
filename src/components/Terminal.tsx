import React, { useEffect, useState } from 'react';

export interface TerminalProps {
  lines: string[];
  title?: string;
  showCursor?: boolean;
  typeSpeed?: number;
  className?: string;
}

/**
 * Terminal
 * 
 * A container that simulates a monospaced command-line interface.
 * Features optional auto-typing effect and a blinking cursor.
 */
export const Terminal: React.FC<TerminalProps> = ({ 
  lines, 
  title = "SYSTEM TERMINAL", 
  showCursor = true,
  typeSpeed = 0, // 0 for instant, > 0 for typing effect
  className = '' 
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>(typeSpeed > 0 ? [] : lines);

  useEffect(() => {
    if (typeSpeed > 0) {
      let currentLineIndex = 0;
      const interval = setInterval(() => {
        if (currentLineIndex < lines.length) {
          setDisplayedLines(prev => [...prev, lines[currentLineIndex]]);
          currentLineIndex++;
        } else {
          clearInterval(interval);
        }
      }, typeSpeed);
      return () => clearInterval(interval);
    }
  }, [lines, typeSpeed]);

  return (
    <div className={`ads-terminal ${className}`} style={{
      background: 'var(--ads-color-bg)',
      color: 'var(--ads-color-primary)',
      fontFamily: 'var(--ads-font-mono)',
      padding: '1rem',
      border: '1px solid var(--ads-color-border)',
      boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
      position: 'relative'
    }}>
      {title && (
        <div style={{ 
          fontSize: '0.7rem', 
          opacity: 0.5, 
          marginBottom: '0.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '2px'
        }}>
          {title}
        </div>
      )}
      <div className="ads-terminal__output" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
        {displayedLines.map((line, i) => (
          <div key={i} style={{ marginBottom: '2px' }}>
            <span style={{ marginRight: '8px', opacity: 0.7 }}>&gt;</span>
            {line}
          </div>
        ))}
        {showCursor && (
          <span className="ads-terminal__cursor" style={{
            display: 'inline-block',
            width: '8px',
            height: '15px',
            background: 'var(--ads-color-primary)',
            marginLeft: '4px',
            animation: 'ads-blink 1s infinite'
          }} />
        )}
      </div>
      <style>{`
        @keyframes ads-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ads-terminal__cursor {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};
