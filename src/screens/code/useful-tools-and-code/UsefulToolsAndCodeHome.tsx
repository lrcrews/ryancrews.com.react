import { useState } from "react";
import { Link } from "react-router-dom";

import { CODE_HOME_PATH } from "../../../routes/paths";
import {
  CategoryFilter,
  EmptyContentState,
  PageWrapper,
  useCategorizedItems,
} from "../../../shared-components";
import { UsefulToolPreviewTile } from "../../../shared-components/tiles";
import {
  UsefulToolCategory,
  UsefulToolCategoryDisplayName,
  usefulToolCategories,
} from "./usefulToolCategories";
import { usefulToolsAndCode } from "./usefulToolsAndCode";

import "./UsefulToolCategoryLabel.scss";
import "./UsefulToolsAndCodeHome.scss";

function UsefulToolsAndCodeHomeScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<UsefulToolCategory | null>(null);
  const {
    latestItem: latestUsefulToolOrCode,
    remainingItems: remainingUsefulToolsAndCode,
  } = useCategorizedItems(usefulToolsAndCode, selectedCategory);

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
        {latestUsefulToolOrCode ? (
          <UsefulToolPreviewTile
            category={latestUsefulToolOrCode.category}
            route={latestUsefulToolOrCode.path}
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
          <h2>Other Tools or Code</h2>
          {remainingUsefulToolsAndCode.map((item) => (
            <UsefulToolPreviewTile
              category={item.category}
              key={item.path}
              route={item.path}
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
