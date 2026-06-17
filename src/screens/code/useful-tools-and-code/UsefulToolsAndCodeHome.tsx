import { useState } from "react";
import { Link } from "react-router-dom";

import { CODE_HOME_PATH } from "../../../routes/paths";
import {
  CategoryFilter,
  EmptyContentState,
  PageWrapper,
} from "../../../shared-components";
import { UsefulToolPreviewTile } from "../../../shared-components/tiles";

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

const usefulToolCategories = Object.values(UsefulToolCategory);
const usefulToolsAndCode: {
  category: UsefulToolCategory;
  route: string;
  teaser: string;
  title: string;
}[] = [
  // NEW_USEFUL_TOOL: Useful tools and code section of preview data
];

function UsefulToolsAndCodeHomeScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<UsefulToolCategory | null>(null);
  const filteredUsefulToolsAndCode = selectedCategory
    ? usefulToolsAndCode.filter((item) => item.category === selectedCategory)
    : usefulToolsAndCode;
  const latestUsefulToolOrCode = filteredUsefulToolsAndCode[0];

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
        <CategoryFilter
          categories={usefulToolCategories}
          categoryClassName="usefulToolCategoryLabel"
          displayName={UsefulToolCategoryDisplayName}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <h2>Latest Useful Tool or Code</h2>
        {/* NEW_USEFUL_TOOL: like a T0D0 comment for myself so I remember where I do the manual things */}
        {latestUsefulToolOrCode ? (
          <UsefulToolPreviewTile
            category={latestUsefulToolOrCode.category}
            route={latestUsefulToolOrCode.route}
            teaser={latestUsefulToolOrCode.teaser}
            title={latestUsefulToolOrCode.title}
          />
        ) : (
          <EmptyContentState
            alt="A colorful empty coding stage with brackets, a terminal prompt, and an empty content panel."
            message="Nothing here yet."
          />
        )}
        <div className="useful-tools-and-code">
          {/* NEW_USEFUL_TOOL: Useful tools and code section of tiles */}
          {filteredUsefulToolsAndCode.map((item) => (
            <UsefulToolPreviewTile
              category={item.category}
              key={item.route}
              route={item.route}
              teaser={item.teaser}
              title={item.title}
            />
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}

export default UsefulToolsAndCodeHomeScreen;
