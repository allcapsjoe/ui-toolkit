import React from 'react';

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

/**
 * CodeBlock
 * 
 * A syntax-highlighted (simulated) block for monospaced code.
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title }) => {
  return (
    <div className="ads-code-block" style={{
      margin: '1rem 0',
      border: '1px solid var(--ads-color-border)',
      background: 'var(--ads-color-surface)'
    }}>
      {title && (
        <div style={{
          padding: '4px 8px',
          fontSize: '0.7rem',
          borderBottom: '1px solid var(--ads-color-border)',
          opacity: 0.7,
          textTransform: 'uppercase'
        }}>
          {title} {language && `[${language}]`}
        </div>
      )}
      <pre style={{
        margin: 0,
        padding: '1rem',
        overflowX: 'auto',
        color: 'var(--ads-color-text)',
        fontSize: '0.85rem'
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
};
