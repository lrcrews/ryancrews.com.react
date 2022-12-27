import { Link } from "react-router-dom";

import { ABOUT_PATH } from "../../routes/routes";
import { PageWrapper } from "../../shared-components";

import "./CodeHome.scss";

function CodeHomeScreen() {
  return (
    <PageWrapper>
      <main className="code-home-screen">
        <h1>Coding, Programming, Software Engineering</h1>
        <div className="subheader">
          (Really we just read code most the time)
        </div>
        <h2>
          📝 <Link to={ABOUT_PATH}>Blog Posts</Link>
        </h2>
        <p>
          A collection of different types of posts, from technical looks at code
          ranging from interview-question-esque breakdowns to implementations of
          random bits of code that I find interesting or cool.
        </p>
        <h2>
          🛠 <Link to={ABOUT_PATH}>Tools</Link>
        </h2>
        <p>
          Various tools, from the novel to the useful, that surely exist
          elsewhere (but here there are far less ads and I don't have to search
          for the ones I want).
        </p>
        <h2>
          👨‍💻 <Link to={ABOUT_PATH}>Project Pages</Link>
        </h2>
        <p>
          Pages dedicated to some of my projects (including this blog) with
          links, images, and descriptions.
        </p>
      </main>
    </PageWrapper>
  );
}

export default CodeHomeScreen;
