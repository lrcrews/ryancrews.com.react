import { ReactNode } from "react";

import { POSTS_HOME_PATH } from "../../../routes/paths";
import { AdTile } from "../../../shared-components";
import CodeContentWrapper from "../components/CodeContentWrapper";
import { PostCategory, PostCategoryDisplayName } from "./postCategories";

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
    <CodeContentWrapper
      backLabel="Back to posts"
      backPath={POSTS_HOME_PATH}
      category={category}
      categoryClassName="categoryLabel"
      displayName={PostCategoryDisplayName}
      screenClassName="post-screen"
      subTitle={subTitle}
      title={title}
    >
      <div className="post-wrapper">
        <AdTile />
        <div>{children}</div>
      </div>
    </CodeContentWrapper>
  );
}

export default PostWrapper;
