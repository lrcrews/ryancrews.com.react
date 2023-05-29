import { HELLO_WORLD_POST } from "../../routes/routes";
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
            category={PostCategory.CoolThing}
            route={HELLO_WORLD_POST}
            teaser="In a world, where teasers have a voice, we have some writing."
            title="Hello World"
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
