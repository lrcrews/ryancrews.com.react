import { Link } from "react-router-dom";

import {
  CODE_HOME_PATH,
  HELLO_ISSUES_POST,
  HELLO_WORLD_POST,
} from "../../../routes/paths";
import { PageWrapper } from "../../../shared-components";
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

function PostsHomeScreen() {
  return (
    <PageWrapper>
      <main className="posts-screen">
        <p>
          👈 <Link to={CODE_HOME_PATH}>Back to code</Link>
        </p>
        <h1>When you write enough code you want to write something else</h1>
        <div className="subheader">(...but, you know, still about code)</div>
        <h2>Latest Post</h2>
        {/* NEW_POST: like a T0D0 comment for myself so I remember where I do the manual things */}
        <PostPreviewTile
          category={PostCategory.HowTo}
          route={HELLO_ISSUES_POST}
          teaser="Using GitHub issues as the handoff point for small, verified content updates."
          title="Hello issues!"
        />
        <div className="posts">
          <PostPreviewTile
            category={PostCategory.HowTo}
            route={HELLO_ISSUES_POST}
            teaser="A lightweight workflow from issue label to local branch to verified change."
            title="Hello issues!"
          />
          <PostPreviewTile
            category={PostCategory.CoolThing}
            route={HELLO_WORLD_POST}
            teaser="In a world, where teasers have a voice, we have some writing."
            title="Hello World"
          />
        </div>
      </main>
    </PageWrapper>
  );
}

export default PostsHomeScreen;
