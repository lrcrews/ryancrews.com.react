import { ReactNode } from "react";

import { AdTile, PageWrapper } from "../../../shared-components";
import { PostCategory, PostCategoryDisplayName } from "./PostsHome";

import "./PostWrapper.scss";

type PostWrapperProps = {
  category: PostCategory;
  children: ReactNode;
  title: string;

  subTitle?: string;
};

function PostWrapper(props: PostWrapperProps) {
  const { category, children, subTitle, title } = props;

  return (
    <PageWrapper>
      <main className="post-screen">
        <h1>{title}</h1>
        {subTitle && <div className="subheader">({subTitle})</div>}
        <div className={`label categoryLabel ${category}`}>
          {PostCategoryDisplayName(category)}
        </div>
        <div className="post-wrapper">
          <AdTile />
          <div>{children}</div>
        </div>
      </main>
    </PageWrapper>
  );
}

export default PostWrapper;
