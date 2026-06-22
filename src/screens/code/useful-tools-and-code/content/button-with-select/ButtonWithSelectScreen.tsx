import { useState } from "react";

import UsefulToolWrapper from "../../UsefulToolWrapper";
import { UsefulToolCategory } from "../../usefulToolCategories";
import ButtonWithSelect, { ButtonWithSelectAction } from "./ButtonWithSelect";

function ButtonWithSelectScreen() {
  const [lastTriggeredAction, setLastTriggeredAction] = useState(
    "Use the main button to run the current default action.",
  );

  const demoActions: ButtonWithSelectAction[] = [
    {
      title: "Preview component",
      description: "Run the default preview flow without opening the chooser.",
      action: () => setLastTriggeredAction("Ran: Preview component."),
    },
    {
      title: "Copy import path",
      description: "Swap the default action to a quick copy-oriented workflow.",
      action: () => setLastTriggeredAction("Ran: Copy import path."),
    },
    {
      title: "Draft blog post",
      description:
        "Switch to the action that starts writing the companion post.",
      action: () => setLastTriggeredAction("Ran: Draft blog post."),
    },
  ];

  return (
    <UsefulToolWrapper
      category={UsefulToolCategory.Tool}
      subTitle="A split button keeps one fast default action while letting people choose a different action if desired."
      title="Button with Select"
    >
      <div className="buttonWithSelectSurface">
        <section className="buttonWithSelectShowcase">
          <div className="buttonWithSelectCopy">
            <h2>Demo</h2>
            <p>
              The left button always runs the current default action. The right
              button opens a small chooser where each option has a title and
              supporting description.
            </p>
          </div>

          <div className="buttonWithSelectDemoPanel">
            <ButtonWithSelect actions={demoActions} />
            <p className="buttonWithSelectStatus" role="status">
              {lastTriggeredAction}
            </p>
          </div>
        </section>

        <section className="buttonWithSelectNotes">
          <article className="buttonWithSelectNoteCard">
            <h2>Why this pattern works</h2>
            <p>
              It looks like a single control, but it stays semantically honest:
              one button executes an action and the adjacent button chooses
              which action that is.
            </p>
          </article>

          <article className="buttonWithSelectNoteCard">
            <h2>Accessibility details</h2>
            <p>
              The control uses a labeled button group, a menu button with
              `aria-expanded`, and radio-style menu items so the current default
              action is discoverable with both keyboard and screen readers.
            </p>
          </article>
        </section>
      </div>
    </UsefulToolWrapper>
  );
}

export default ButtonWithSelectScreen;
