import { ReactNode } from "react";

import { USEFUL_TOOLS_AND_CODE_HOME_PATH } from "../../../routes/paths";
import CodeContentWrapper from "../components/CodeContentWrapper";
import {
  UsefulToolCategory,
  UsefulToolCategoryDisplayName,
} from "./usefulToolCategories";

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
    <CodeContentWrapper
      backLabel="Back to useful tools & code"
      backPath={USEFUL_TOOLS_AND_CODE_HOME_PATH}
      category={category}
      categoryClassName="usefulToolCategoryLabel"
      displayName={UsefulToolCategoryDisplayName}
      screenClassName="useful-tool-screen"
      subTitle={subTitle}
      title={title}
    >
      {children}
    </CodeContentWrapper>
  );
}

export default UsefulToolWrapper;
