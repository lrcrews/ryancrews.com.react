import { ReactNode, useRef, useState } from "react";

import "./CodeSnippet.scss";

type CodeSnippetProps = {
  children: ReactNode;

  className?: string;
  label?: string;
  wrap?: boolean;
};

function CodeSnippet(props: CodeSnippetProps) {
  const { children, className = "", label = "snippet", wrap = false } = props;
  const codeRef = useRef<HTMLElement>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const preClassName = wrap ? "codeSnippet-pre wrap" : "codeSnippet-pre";
  const rootClassName = className
    ? `codeSnippet ${className}`
    : "codeSnippet";

  async function handleCopy() {
    const codeText = codeRef.current?.textContent?.trim() || "";

    if (!navigator.clipboard || !codeText) {
      setCopyStatus("Copy failed.");
      return;
    }

    try {
      await navigator.clipboard.writeText(codeText);
      setCopyStatus("Copied.");
    } catch {
      setCopyStatus("Copy failed.");
    }
  }

  return (
    <div className={rootClassName}>
      <div className="codeSnippet-toolbar">
        <button
          className="codeSnippet-copy"
          onClick={handleCopy}
          type="button"
        >
          copy
        </button>
        <div className="codeSnippet-label">{label}</div>
      </div>
      <div className="codeSnippet-status" role="status">
        {copyStatus}
      </div>
      <pre className={preClassName}>
        <code ref={codeRef}>{children}</code>
      </pre>
    </div>
  );
}

export default CodeSnippet;
