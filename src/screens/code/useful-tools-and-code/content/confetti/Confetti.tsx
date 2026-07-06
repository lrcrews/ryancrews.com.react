import { CSSProperties, useEffect, useState } from "react";

import { CodeSnippet, PrimaryButton } from "../../../../../shared-components";
import UsefulToolWrapper from "../../UsefulToolWrapper";
import { UsefulToolCategory } from "../../usefulToolCategories";

import "./Confetti.scss";

const CONFETTI_PIECES = [
  {
    color: "#ff4f81",
    delay: "0s",
    duration: "4.8s",
    left: "6%",
    size: "10px",
    sway: "42px",
  },
  {
    color: "#ffca3a",
    delay: "0.35s",
    duration: "5.4s",
    left: "12%",
    size: "8px",
    sway: "-56px",
  },
  {
    color: "#8ac926",
    delay: "0.15s",
    duration: "4.6s",
    left: "18%",
    size: "12px",
    sway: "38px",
  },
  {
    color: "#1982c4",
    delay: "0.7s",
    duration: "5.7s",
    left: "24%",
    size: "9px",
    sway: "-44px",
  },
  {
    color: "#6a4c93",
    delay: "0.25s",
    duration: "5.1s",
    left: "31%",
    size: "11px",
    sway: "60px",
  },
  {
    color: "#ff595e",
    delay: "0.5s",
    duration: "4.9s",
    left: "38%",
    size: "7px",
    sway: "-50px",
  },
  {
    color: "#00bbf9",
    delay: "0.05s",
    duration: "5.6s",
    left: "45%",
    size: "10px",
    sway: "46px",
  },
  {
    color: "#f15bb5",
    delay: "0.65s",
    duration: "4.7s",
    left: "52%",
    size: "12px",
    sway: "-62px",
  },
  {
    color: "#fee440",
    delay: "0.2s",
    duration: "5.3s",
    left: "59%",
    size: "8px",
    sway: "54px",
  },
  {
    color: "#00f5d4",
    delay: "0.45s",
    duration: "5s",
    left: "66%",
    size: "11px",
    sway: "-40px",
  },
  {
    color: "#fb5607",
    delay: "0.1s",
    duration: "5.8s",
    left: "73%",
    size: "9px",
    sway: "58px",
  },
  {
    color: "#3a86ff",
    delay: "0.75s",
    duration: "4.8s",
    left: "80%",
    size: "10px",
    sway: "-46px",
  },
  {
    color: "#8338ec",
    delay: "0.3s",
    duration: "5.5s",
    left: "87%",
    size: "7px",
    sway: "36px",
  },
  {
    color: "#ff006e",
    delay: "0.6s",
    duration: "5.2s",
    left: "94%",
    size: "12px",
    sway: "-52px",
  },
];

const confettiCss = `.confetti {
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  position: fixed;
  z-index: 9999;
}

.confetti-piece {
  animation:
    confetti-drop var(--duration) linear var(--delay) forwards,
    confetti-sway 900ms ease-in-out var(--delay) infinite alternate;
  background: var(--color);
  height: calc(var(--size) * 1.6);
  left: var(--left);
  opacity: 0;
  position: absolute;
  top: -10vh;
  transform: translate3d(0, 0, 0) rotate(0deg);
  width: var(--size);
}

@keyframes confetti-drop {
  0% {
    opacity: 1;
    top: -10vh;
  }

  100% {
    opacity: 0.9;
    top: 110vh;
    transform: translate3d(var(--sway), 0, 0) rotate(720deg);
  }
}

@keyframes confetti-sway {
  from {
    margin-left: calc(var(--sway) * -0.5);
  }

  to {
    margin-left: calc(var(--sway) * 0.5);
  }
}`;

function ConfettiScreen() {
  const [burstId, setBurstId] = useState(0);

  function launchConfetti() {
    setBurstId((currentBurstId) => currentBurstId + 1);
  }

  useEffect(() => {
    launchConfetti();
  }, []);

  return (
    <UsefulToolWrapper
      category={UsefulToolCategory.CSSSnippet}
      subTitle="what user doesn't like some fun?"
      title="Confetti"
    >
      <div className="confettiToolSurface">
        {burstId > 0 && (
          <div aria-hidden="true" className="confetti" key={burstId}>
            {CONFETTI_PIECES.map((piece, index) => (
              <span
                className="confetti-piece"
                key={`${burstId}-${index}`}
                style={
                  {
                    "--color": piece.color,
                    "--delay": piece.delay,
                    "--duration": piece.duration,
                    "--left": piece.left,
                    "--size": piece.size,
                    "--sway": piece.sway,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        )}

        <PrimaryButton className="confetti-trigger" onClick={launchConfetti}>
          Drop the confetti
        </PrimaryButton>

        <CodeSnippet className="confetti-code" label="css">
          {confettiCss}
        </CodeSnippet>
      </div>
    </UsefulToolWrapper>
  );
}

export default ConfettiScreen;
