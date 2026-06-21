import "./VibeMessage.scss";

import { ReactNode } from "react";

type VibeMessageProps = {
  children: ReactNode;
  from: "Ryan" | "Codex";
};

function VibeMessage(props: VibeMessageProps) {
  const { children, from } = props;
  const side = from === "Ryan" ? "ryan" : "codex";
  const emoji = from === "Ryan" ? "👨‍💻" : "🤖";

  return (
    <div className={`vibe-message vibe-message--${side}`}>
      <div className="vibe-message-author">
        <span aria-label={from} role="img">
          {emoji}
        </span>
      </div>
      <div className="vibe-message-body">{children}</div>
    </div>
  );
}

export default VibeMessage;
