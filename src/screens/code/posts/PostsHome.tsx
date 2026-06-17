import { useState } from "react";
import { Link } from "react-router-dom";

import {
  CODE_HOME_PATH,
  HELLO_ISSUES_POST,
  HELLO_WORLD_POST,
} from "../../../routes/paths";
import {
  CategoryFilter,
  EmptyContentState,
  PageWrapper,
} from "../../../shared-components";
import { PostPreviewTile } from "../../../shared-components/tiles";

import "./PostsHome.scss";

export enum PostCategory {
  CoolThing = "cool_thing",
  HowTo = "how_to",
  Other = "other",
  TheArt = "the_art",
  TheJob = "the_job",
}

export function PostCategoryDisplayName(category: PostCategory) {
  return category.replaceAll("_", " ");
}

const postCategories = Object.values(PostCategory);

const posts = [
  {
    category: PostCategory.HowTo,
    route: HELLO_ISSUES_POST,
    teaser:
      "A lightweight workflow from issue label to local branch to verified change.",
    title: "Hello issues!",
  },
  {
    category: PostCategory.CoolThing,
    route: HELLO_WORLD_POST,
    teaser: "In a world, where teasers have a voice, we have some writing.",
    title: "Hello World",
  },
];

function PostsHomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState<PostCategory | null>(
    null
  );
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;
  const latestPost = filteredPosts[0];

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
        {/* NEW_POST: like a T0D0 comment for myself so I remember where I do the manual things */}
        {latestPost ? (
          <PostPreviewTile
            category={latestPost.category}
            route={latestPost.route}
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
          {filteredPosts.map((post) => (
            <PostPreviewTile
              category={post.category}
              key={post.route}
              route={post.route}
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
