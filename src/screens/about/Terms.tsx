import { PageWrapper } from "../../shared-components";

function TermsScreen() {
  return (
    <PageWrapper>
      <main>
        <h1>Terms of Use</h1>
        <p>
          This website (blog) is provided AS IS for your information and use
          (and my enjoyment). I offer no warranty or guarantee of any kind that
          the content, tools, or anything else found on this website are
          accurate.
        </p>
        <p>
          It's just a blog, and a nice place for me to store useful information
          for myself (and hopefully others).
        </p>
        <p>
          If you do notice an error you are welcome to open an issue or pull
          request directly to this blog:{" "}
          <a
            href="https://github.com/lrcrews/ryancrews.com.react"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/lrcrews/ryancrews.com.react
          </a>
        </p>
      </main>
    </PageWrapper>
  );
}

export default TermsScreen;
