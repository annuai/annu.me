import React, { useState } from 'react';
import './CodeBlock.css';

// ── Token types ──────────────────────────────────────────────────────────────
const C_KEYWORDS = new Set([
  'const',
  'int',
  'void',
  'if',
  'else',
  'while',
  'for',
  'return',
  'true',
  'false',
  'boolean',
  'byte',
  'char',
  'float',
  'double',
  'long',
  'unsigned',
  'short',
  'static',
  'extern',
  'struct',
  'enum',
  'new',
  'delete',
  'class',
  'public',
  'private',
  'protected',
  'this',
  'HIGH',
  'LOW',
  'INPUT',
  'OUTPUT',
  'INPUT_PULLUP',
  'LED_BUILTIN',
  'NULL',
  'nullptr',
  'true',
  'false',
]);

const JS_KEYWORDS = new Set([
  'const',
  'let',
  'var',
  'function',
  'return',
  'if',
  'else',
  'for',
  'while',
  'do',
  'switch',
  'case',
  'break',
  'continue',
  'new',
  'delete',
  'typeof',
  'instanceof',
  'in',
  'of',
  'import',
  'export',
  'default',
  'class',
  'extends',
  'super',
  'this',
  'true',
  'false',
  'null',
  'undefined',
  'async',
  'await',
  'try',
  'catch',
  'finally',
  'throw',
  'void',
  'static',
]);

function getKeywords(lang) {
  if (lang === 'js' || lang === 'javascript' || lang === 'ts' || lang === 'typescript')
    return JS_KEYWORDS;
  return C_KEYWORDS; // default: C / C++ / Arduino
}

// ── Tokeniser ─────────────────────────────────────────────────────────────────
function tokenize(code, lang) {
  const keywords = getKeywords(lang);
  const tokens = [];
  let i = 0;

  while (i < code.length) {
    // Block comment
    if (code[i] === '/' && code[i + 1] === '*') {
      const end = code.indexOf('*/', i + 2);
      const endIdx = end === -1 ? code.length : end + 2;
      tokens.push({ type: 'comment', value: code.slice(i, endIdx) });
      i = endIdx;
      continue;
    }

    // Line comment
    if (code[i] === '/' && code[i + 1] === '/') {
      const end = code.indexOf('\n', i);
      const endIdx = end === -1 ? code.length : end;
      tokens.push({ type: 'comment', value: code.slice(i, endIdx) });
      i = endIdx;
      continue;
    }

    // Hash comment (Python / shell)
    if (code[i] === '#' && (lang === 'python' || lang === 'sh' || lang === 'bash')) {
      const end = code.indexOf('\n', i);
      const endIdx = end === -1 ? code.length : end;
      tokens.push({ type: 'comment', value: code.slice(i, endIdx) });
      i = endIdx;
      continue;
    }

    // Preprocessor directive (#include, #define …)
    if (code[i] === '#' && (i === 0 || code[i - 1] === '\n')) {
      const end = code.indexOf('\n', i);
      const endIdx = end === -1 ? code.length : end;
      tokens.push({ type: 'preprocessor', value: code.slice(i, endIdx) });
      i = endIdx;
      continue;
    }

    // Double-quoted string
    if (code[i] === '"') {
      let j = i + 1;
      while (j < code.length && code[j] !== '"' && code[j] !== '\n') {
        if (code[j] === '\\') j++;
        j++;
      }
      tokens.push({ type: 'string', value: code.slice(i, j + 1) });
      i = j + 1;
      continue;
    }

    // Single-quoted char / string
    if (code[i] === "'") {
      let j = i + 1;
      while (j < code.length && code[j] !== "'" && code[j] !== '\n') {
        if (code[j] === '\\') j++;
        j++;
      }
      tokens.push({ type: 'string', value: code.slice(i, j + 1) });
      i = j + 1;
      continue;
    }

    // Identifier or keyword
    if (/[a-zA-Z_$]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_$]/.test(code[j])) j++;
      const word = code.slice(i, j);
      tokens.push({ type: keywords.has(word) ? 'keyword' : 'ident', value: word });
      i = j;
      continue;
    }

    // Number (int, float, hex)
    if (/[0-9]/.test(code[i]) || (code[i] === '.' && /[0-9]/.test(code[i + 1]))) {
      let j = i;
      while (j < code.length && /[0-9a-fA-FxX._]/.test(code[j])) j++;
      tokens.push({ type: 'number', value: code.slice(i, j) });
      i = j;
      continue;
    }

    // Everything else (operators, punctuation, whitespace, newlines)
    tokens.push({ type: 'plain', value: code[i] });
    i++;
  }

  return tokens;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderTokens(tokens) {
  return tokens
    .map((tok, idx) => {
      const safe = escapeHtml(tok.value);
      if (tok.type === 'plain' || tok.type === 'ident') return safe;
      return `<span class="cb-${tok.type}">${safe}</span>`;
    })
    .join('');
}

// ── Component ─────────────────────────────────────────────────────────────────
const CodeBlock = ({ code, language = 'cpp', label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        // fallback for older browsers
        const el = document.createElement('textarea');
        el.value = code;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  const displayLabel = label || language;
  const tokens = tokenize(code, language);
  const highlighted = renderTokens(tokens);

  return (
    <div className="cb-root">
      <div className="cb-header">
        <span className="cb-lang">{displayLabel}</span>
        <button
          className={`cb-copy ${copied ? 'cb-copy--done' : ''}`}
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="cb-pre" dangerouslySetInnerHTML={{ __html: highlighted }} />
    </div>
  );
};

export default CodeBlock;
