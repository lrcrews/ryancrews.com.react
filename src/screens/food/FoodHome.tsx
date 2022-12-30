import { Link } from "react-router-dom";

import { ABOUT_PATH } from "../../routes/routes";
import { PageWrapper } from "../../shared-components";

function FoodHomeScreen() {
  return (
    <PageWrapper>
      <main>
        <h1>Recipes</h1>
        <p>
          Very bare-bones. This is a place for me and my wife to see altered
          versions of recipes we enjoy (after-all, sometimes shallot works
          better than an onion, or sake substituted for part of the soy sauce...
          but it's hard to remember all those changes).
        </p>
        <ul>
          {/* NEW_RECIPE: like a T0D0 comment for myself so I remember where I do the manual things */}
          <li>
            <Link to={ABOUT_PATH} className="large-label">
              Yaki-Sorta
            </Link>
          </li>
        </ul>
      </main>
    </PageWrapper>
  );
}

export default FoodHomeScreen;
