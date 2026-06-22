import { Link } from "react-router-dom";

import {
  HOME_PATH,
  POSTS_HOME_PATH,
  USEFUL_TOOLS_AND_CODE_HOME_PATH,
} from "../../routes/paths";
import { PageWrapper } from "../../shared-components";

function CodeHomeScreen() {
  return (
    <PageWrapper>
      <main>
        <p>
          👈 <Link to={HOME_PATH}>Back to home</Link>
        </p>
        <h1>Coding, Programming, Software Engineering</h1>
        <div className="subheader">
          (Really we just read code most the time)
        </div>
        <h2>
          📝 <Link to={POSTS_HOME_PATH}>Blog Posts</Link>
        </h2>
        <p>
          A collection of different types of posts, from technical looks at code
          ranging from interview-question-esque breakdowns to implementations of
          random bits of code that I find interesting or cool.
        </p>
        <h2>
          🛠{" "}
          <Link to={USEFUL_TOOLS_AND_CODE_HOME_PATH}>Useful Tools & Code</Link>
        </h2>
        <p>
          Various tools, snippets, utility methods, and reference notes that
          surely exist elsewhere (but here there are far less ads and I don't
          have to search for the ones I want).
        </p>
      </main>
    </PageWrapper>
  );
}

export default CodeHomeScreen;
