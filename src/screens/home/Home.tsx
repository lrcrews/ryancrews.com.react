import { useContext } from "react";
import { Link } from "react-router-dom";

import { SiteFooter, SiteHeader } from "../../shared-components";
import {
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
} from "../../shared-components/buttons";
import { ThemeContext } from "../../themes";

import "./Home.scss";

export default function HomeScreen() {
  const { themeName } = useContext(ThemeContext);

  return (
    <div className={`theme-${themeName}`}>
      <SiteHeader />
      <main className="home-screen">
        <div className="splash">
          <h1>A Blog for Code and Food</h1>
          <p>
            On this blog you'll find pages about code, tools to help in coding,
            posts about the job of being a Software Engineer... and
            non-annoying, storyless, and to-the-point food recipes (mostly for
            my own sanity 👨‍🍳)
          </p>
        </div>
        <ButtonContainer>
          <PrimaryButton>Code</PrimaryButton>
          <SecondaryButton>Food</SecondaryButton>
        </ButtonContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
