import { MY_FIRST_REAL_VIBE_POST } from "../../routes/paths";
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
            category={PostCategory.VibeCoding}
            route={MY_FIRST_REAL_VIBE_POST}
            teaser="A look at the first session that felt less like prompting and more like collaborating."
            title="My first real vibe"
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
