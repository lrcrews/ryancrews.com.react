import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { PageWrapper } from "../../../shared-components";

type CodeContentWrapperProps<TCategory extends string> = {
  backLabel: string;
  backPath: string;
  category: TCategory;
  categoryClassName: string;
  children: ReactNode;
  displayName: (category: TCategory) => string;
  screenClassName: string;
  title: string;

  subTitle?: string;
};

function CodeContentWrapper<TCategory extends string>(
  props: CodeContentWrapperProps<TCategory>,
) {
  const {
    backLabel,
    backPath,
    category,
    categoryClassName,
    children,
    displayName,
    screenClassName,
    subTitle,
    title,
  } = props;

  return (
    <PageWrapper>
      <main className={screenClassName}>
        <p>
          👈 <Link to={backPath}>{backLabel}</Link>
        </p>
        <h1>{title}</h1>
        {subTitle && <div className="subheader">({subTitle})</div>}
        <div className={`label ${categoryClassName} ${category}`}>
          {displayName(category)}
        </div>
        {children}
      </main>
    </PageWrapper>
  );
}

export default CodeContentWrapper;
