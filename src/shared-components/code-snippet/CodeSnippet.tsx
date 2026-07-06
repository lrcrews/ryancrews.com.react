import { ReactNode } from "react";

import "./CodeSnippet.scss";

type CodeSnippetProps = {
  children: ReactNode;

  className?: string;
  label?: string;
  wrap?: boolean;
};

function CodeSnippet(props: CodeSnippetProps) {
  const { children, className = "", label = "snippet", wrap = false } = props;
  const preClassName = wrap ? "codeSnippet-pre wrap" : "codeSnippet-pre";
  const rootClassName = className
    ? `codeSnippet ${className}`
    : "codeSnippet";

  return (
    <div className={rootClassName}>
      <div className="codeSnippet-toolbar" aria-hidden="true">
        <div className="codeSnippet-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="codeSnippet-label">{label}</div>
      </div>
      <pre className={preClassName}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default CodeSnippet;
