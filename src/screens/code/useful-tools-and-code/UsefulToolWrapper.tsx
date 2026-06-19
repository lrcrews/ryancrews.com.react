import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { USEFUL_TOOLS_AND_CODE_HOME_PATH } from "../../../routes/paths";
import { PageWrapper } from "../../../shared-components";
import {
  UsefulToolCategory,
  UsefulToolCategoryDisplayName,
} from "./UsefulToolsAndCodeHome";

import "./UsefulToolCategoryLabel.scss";

type UsefulToolWrapperProps = {
  category: UsefulToolCategory;
  children: ReactNode;
  title: string;

  subTitle?: string;
};

function UsefulToolWrapper(props: UsefulToolWrapperProps) {
  const { category, children, subTitle, title } = props;

  return (
    <PageWrapper>
      <main className="useful-tool-screen">
        <p>
          👈{" "}
          <Link to={USEFUL_TOOLS_AND_CODE_HOME_PATH}>
            Back to useful tools & code
          </Link>
        </p>
        <h1>{title}</h1>
        {subTitle && <div className="subheader">({subTitle})</div>}
        <div className={`label usefulToolCategoryLabel ${category}`}>
          {UsefulToolCategoryDisplayName(category)}
        </div>
        {children}
      </main>
    </PageWrapper>
  );
}

export default UsefulToolWrapper;
