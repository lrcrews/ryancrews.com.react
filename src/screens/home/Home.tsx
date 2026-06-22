import { PageWrapper } from "../../shared-components";
import { PostPreviewTile } from "../../shared-components/tiles";
import { posts } from "../code/posts/posts";

import CodeTiles from "./components/CodeTiles";
import CookingTiles from "./components/CookingTiles";
import Splash from "./components/Splash";

import "./Home.scss";

function HomeScreen() {
  const latestPost = posts[0];

  return (
    <PageWrapper>
      <main className="home-screen">
        <Splash />
        <div className="latest-post">
          <h2>Latest Post</h2>
          <PostPreviewTile
            category={latestPost.category}
            route={latestPost.path}
            teaser={latestPost.teaser}
            title={latestPost.title}
          />
        </div>
        <div className="tile-group">
          <CodeTiles />
        </div>
        <div className="tile-group">
          <CookingTiles />
        </div>
      </main>
    </PageWrapper>
  );
}

export default HomeScreen;
