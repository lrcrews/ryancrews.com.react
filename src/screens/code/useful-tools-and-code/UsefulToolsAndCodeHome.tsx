import { Link } from "react-router-dom";

import { CODE_HOME_PATH } from "../../../routes/paths";
import { PageWrapper } from "../../../shared-components";

import "./UsefulToolCategoryLabel.scss";
import "./UsefulToolsAndCodeHome.scss";

export enum UsefulToolCategory {
  CSSSnippet = "css_snippet",
  DebuggingNote = "debugging_note",
  Reference = "reference",
  Tool = "tool",
  UtilityMethod = "utility_method",
}

export function UsefulToolCategoryDisplayName(category: UsefulToolCategory) {
  return category.replaceAll("_", " ");
}

function UsefulToolsAndCodeHomeScreen() {
  return (
    <PageWrapper>
      <main className="useful-tools-and-code-screen">
        <p>
          👈 <Link to={CODE_HOME_PATH}>Back to code</Link>
        </p>
        <h1>Useful Tools & Code</h1>
        <div className="subheader">
          (Small things worth finding again quickly)
        </div>
        <h2>Categories</h2>
        <div className="useful-tool-categories">
          {Object.values(UsefulToolCategory).map((category) => (
            <div
              className={`label usefulToolCategoryLabel ${category}`}
              key={category}
            >
              {UsefulToolCategoryDisplayName(category)}
            </div>
          ))}
        </div>
        <h2>Latest Useful Tool or Code</h2>
        {/* NEW_USEFUL_TOOL: like a T0D0 comment for myself so I remember where I do the manual things */}
        <p>Nothing here yet.</p>
        <div className="useful-tools-and-code">
          {/* NEW_USEFUL_TOOL: Useful tools and code section of tiles */}
        </div>
      </main>
    </PageWrapper>
  );
}

export default UsefulToolsAndCodeHomeScreen;
