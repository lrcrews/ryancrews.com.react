import { PageWrapper } from "../../shared-components";

function PrivacyPolicyScreen() {
  return (
    <PageWrapper>
      <main>
        <h1>Privacy Policy</h1>
        <p>
          TL;DR: I don't collect any of your data, and I don't use any cookies
          (not even analytics tracking ones like Google Analytics). The only ads
          on the site are for my Wife's company (SACROtees), and share no data
          with her (I don't have any), there's just links on this site to that
          one in case you want to buy a cool shirt 👍
        </p>
        <h2>Cookies</h2>
        <p>No cookies in use, not even for performance/analytics.</p>
        <h2>Personal Data</h2>
        <p>
          None is collected. There are no user accounts, no uploads, no forms to
          collect any of your personal data.
        </p>
        <h3>Who I Share Your Data With</h3>
        <p>Nobody. I have no data about you.</p>
        <h3>How Long I Retain Your Data</h3>
        <p>Zero seconds. I have no data about you.</p>
        <h2>Advertisements</h2>
        <p>
          The only ads on this website are to my wife's shop. I share no data
          with her (I don't have any), just link directly to her shop as I think
          she sells cool stuff.
        </p>
      </main>
    </PageWrapper>
  );
}

export default PrivacyPolicyScreen;
