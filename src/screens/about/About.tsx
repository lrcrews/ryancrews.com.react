import { PageWrapper } from "../../shared-components";

import "./About.scss";

function AboutScreen() {
  return (
    <PageWrapper>
      <main className="home-screen">
        <h1>About</h1>
        <h2>Why does everything end up here?</h2>
        <p>
          With thin latest interation of my blog there are many things that are
          a work-in-progress. If you are seeing this message than you ended up
          here before I have any (or all of the) pages set up. Congrats 🎉
        </p>
        <p>
          Check back soon as things should be filling in nicely over the next
          couple of weeks!
        </p>
      </main>
    </PageWrapper>
  );
}

export default AboutScreen;
