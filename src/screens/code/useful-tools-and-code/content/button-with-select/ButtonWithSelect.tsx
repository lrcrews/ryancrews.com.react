import {
  KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import "./ButtonWithSelect.scss";

export type ButtonWithSelectAction = {
  action: () => void;
  description: string;
  title: string;
};

type ButtonWithSelectProps = {
  actions: ButtonWithSelectAction[];
  ariaLabel?: string;
  initialSelectedIndex?: number;
};

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      className="buttonWithSelect-chevron"
      viewBox="0 0 16 16"
    >
      <path d="M4 6.5 8 10l4-3.5" />
    </svg>
  );
}

function clampSelectedIndex(length: number, initialSelectedIndex: number) {
  if (length === 0) {
    return 0;
  }

  return Math.min(Math.max(initialSelectedIndex, 0), length - 1);
}

function ButtonWithSelect(props: ButtonWithSelectProps) {
  const {
    actions,
    ariaLabel = "Split button actions",
    initialSelectedIndex = 0,
  } = props;
  const safeInitialIndex = clampSelectedIndex(
    actions.length,
    initialSelectedIndex,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(safeInitialIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();
  const clampedSelectedIndex = clampSelectedIndex(actions.length, selectedIndex);

  useEffect(() => {
    if (selectedIndex !== clampedSelectedIndex) {
      setSelectedIndex(clampedSelectedIndex);
    }
  }, [clampedSelectedIndex, selectedIndex]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    optionRefs.current[clampedSelectedIndex]?.focus();

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    function handleDocumentKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleDocumentKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [clampedSelectedIndex, isMenuOpen]);

  if (actions.length === 0) {
    return null;
  }

  const selectedAction = actions[clampedSelectedIndex];

  function closeMenu(restoreToggleFocus = false) {
    setIsMenuOpen(false);

    if (restoreToggleFocus) {
      toggleButtonRef.current?.focus();
    }
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  function selectAction(index: number) {
    setSelectedIndex(index);
    closeMenu(true);
  }

  function moveFocus(nextIndex: number) {
    optionRefs.current[nextIndex]?.focus();
  }

  function handleToggleButtonKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openMenu();
    }
  }

  function handleOptionKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    optionIndex: number,
  ) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        moveFocus((optionIndex + 1) % actions.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        moveFocus((optionIndex - 1 + actions.length) % actions.length);
        break;
      case "Home":
        event.preventDefault();
        moveFocus(0);
        break;
      case "End":
        event.preventDefault();
        moveFocus(actions.length - 1);
        break;
      case "Tab":
        closeMenu();
        break;
      default:
        break;
    }
  }

  return (
    <div className="buttonWithSelect" ref={containerRef}>
      <div
        aria-label={ariaLabel}
        className="buttonWithSelect-control"
        role="group"
      >
        <button
          className="buttonWithSelect-primary"
          onClick={selectedAction.action}
          type="button"
        >
          {selectedAction.title}
        </button>
        <button
          aria-controls={menuId}
          aria-expanded={isMenuOpen}
          aria-haspopup="menu"
          aria-label={`Choose action. Current action ${selectedAction.title}`}
          className="buttonWithSelect-toggle"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          onKeyDown={handleToggleButtonKeyDown}
          ref={toggleButtonRef}
          type="button"
        >
          <ChevronDownIcon />
        </button>
      </div>

      {isMenuOpen && (
        <div
          aria-label="Available actions"
          className="buttonWithSelect-menu"
          id={menuId}
          role="menu"
        >
          {actions.map((action, index) => (
            <button
              aria-checked={clampedSelectedIndex === index}
              className="buttonWithSelect-option"
              key={action.title}
              onClick={() => selectAction(index)}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
              ref={(node) => {
                optionRefs.current[index] = node;
              }}
              role="menuitemradio"
              type="button"
            >
              <span className="buttonWithSelect-optionTitleRow">
                <span className="buttonWithSelect-optionTitle">
                  {action.title}
                </span>
                {clampedSelectedIndex === index && (
                  <span className="buttonWithSelect-selectedBadge">
                    Selected
                  </span>
                )}
              </span>
              <span className="buttonWithSelect-optionDescription">
                {action.description}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ButtonWithSelect;
