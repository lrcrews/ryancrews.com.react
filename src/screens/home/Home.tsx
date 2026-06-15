import { HELLO_ISSUES_POST } from "../../routes/paths";
import { PageWrapper } from "../../shared-components";
import { PostPreviewTile } from "../../shared-components/tiles";
import { PostCategory } from "../code/posts/PostsHome";

import CodeTiles from "./components/CodeTiles";
import CookingTiles from "./components/CookingTiles";
import Splash from "./components/Splash";

import "./Home.scss";

function HomeScreen() {
  return (
    <PageWrapper>
      <main className="home-screen">
        <Splash />
        <div className="tile-group">
          <h2>Latest Post</h2>
          {/* NEW_POST: like a T0D0 comment for myself so I remember where I do the manual things */}
          <PostPreviewTile
            category={PostCategory.HowTo}
            route={HELLO_ISSUES_POST}
            teaser="Using GitHub issues as the handoff point for small, verified content updates."
            title="Hello issues!"
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
