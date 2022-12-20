import { PageWrapper } from "../../shared-components";

import CodeTiles from "./components/CodeTiles";
import Splash from "./components/Splash";

import "./Home.scss";

function HomeScreen() {
  return (
    <PageWrapper>
      <main className="home-screen">
        <Splash />
        <div className="tile-group">
          <CodeTiles />
        </div>
      </main>
    </PageWrapper>
  );
}

export default HomeScreen;
