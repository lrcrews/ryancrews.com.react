import { CODE_HOME_PATH, FOOD_HOME_PATH } from "../../../routes/paths";

import {
  ButtonContainer,
  ButtonKind,
  LinkButton,
} from "../../../shared-components";

import "./Splash.scss";

function Splash() {
  return (
    <div className="splash">
      <h1>Blog: Code, Food</h1>
      <p>
        On this blog you'll find pages about code, tools to help in coding, and
        posts about the job of being a Software Engineer...
      </p>
      <p>
        ...and to-the-point food recipes that are simple, storyless, static
        pages (mostly for my own sanity 👨‍🍳)
      </p>
      <ButtonContainer>
        <LinkButton kind={ButtonKind.Primary} route={CODE_HOME_PATH}>
          Code
        </LinkButton>
        <LinkButton kind={ButtonKind.Secondary} route={FOOD_HOME_PATH}>
          Food
        </LinkButton>
      </ButtonContainer>
    </div>
  );
}

export default Splash;
