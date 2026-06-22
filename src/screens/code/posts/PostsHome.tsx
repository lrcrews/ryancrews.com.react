import { useState } from "react";
import { Link } from "react-router-dom";

import { CODE_HOME_PATH } from "../../../routes/paths";
import {
  CategoryFilter,
  EmptyContentState,
  PageWrapper,
  useCategorizedItems,
} from "../../../shared-components";
import { PostPreviewTile } from "../../../shared-components/tiles";
import {
  PostCategory,
  PostCategoryDisplayName,
  postCategories,
} from "./postCategories";
import { posts } from "./posts";

import "./PostsHome.scss";

function PostsHomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState<PostCategory | null>(
    null,
  );
  const { latestItem: latestPost, remainingItems: remainingPosts } =
    useCategorizedItems(posts, selectedCategory);

  return (
    <PageWrapper>
      <main className="posts-screen">
        <p>
          👈 <Link to={CODE_HOME_PATH}>Back to code</Link>
        </p>
        <h1>When you write enough code you want to write something else</h1>
        <div className="subheader">(...but, you know, still about code)</div>
        <h2>Categories</h2>
        <CategoryFilter
          categories={postCategories}
          categoryClassName="postCategoryLabel"
          displayName={PostCategoryDisplayName}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <h2>Latest Post</h2>
        {latestPost ? (
          <PostPreviewTile
            category={latestPost.category}
            route={latestPost.path}
            teaser={latestPost.teaser}
            title={latestPost.title}
          />
        ) : (
          <EmptyContentState
            alt="A colorful empty coding stage with brackets, a terminal prompt, and an empty content panel."
            message="Nothing here yet."
          />
        )}
        <div className="posts">
          <h2>Other Posts</h2>
          {remainingPosts.map((post) => (
            <PostPreviewTile
              category={post.category}
              key={post.path}
              route={post.path}
              teaser={post.teaser}
              title={post.title}
            />
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}

export default PostsHomeScreen;
