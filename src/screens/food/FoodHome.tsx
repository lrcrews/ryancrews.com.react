import { Link } from "react-router-dom";

import {
  BEEF_STIR_FRY_RECIPE,
  BEER_BATTERED_FISH_RECIPE,
  BLACK_BEAN_FLAUTAS_RECIPE,
  CAULIFLOWER_HOT_WINGS_RECIPE,
  CHICKEN_MARSALA_RECIPE,
  CREAMY_CHICKEN_RECIPE,
  FRIED_CHICKEN_NUGGETS_RECIPE,
  GENERAL_TSOS_CHICKEN_RECIPE,
  GRANOLA_RECIPE,
  KOREAN_LETTUCE_WRAPS_RECIPE,
  LEMON_GARLIC_BOK_CHOY_RECIPE,
  NOBO_MISO_MARINATED_FISH_RECIPE,
  SKAGENRORA_RECIPE,
  SPAGHETTI_BOLOGNESE_RECIPE,
  YAKI_SORTA_RECIPE,
} from "../../routes/routes";
import { PageWrapper } from "../../shared-components";

function FoodHomeScreen() {
  return (
    <PageWrapper>
      <main>
        <h1>Recipes</h1>
        <p>
          Very bare-bones. This is a place for my wife and me to see altered
          versions of recipes we enjoy (after-all, sometimes shallot works
          better than an onion, or sake substituted for part of the soy sauce...
          but it's hard to remember all those changes).
        </p>
        <ul className="u-list-of-links">
          {/* NEW_RECIPE: like a T0D0 comment for myself so I remember where I do the manual things */}
          <li>
            <Link to={BEEF_STIR_FRY_RECIPE} className="large-label">
              Beef Stir Fry
            </Link>
          </li>
          <li>
            <Link to={BEER_BATTERED_FISH_RECIPE} className="large-label">
              Beer Battered Fish
            </Link>
          </li>
          <li>
            <Link to={BLACK_BEAN_FLAUTAS_RECIPE} className="large-label">
              Black Bean Flautas
            </Link>
          </li>
          <li>
            <Link to={CAULIFLOWER_HOT_WINGS_RECIPE} className="large-label">
              Cauliflower Hot Wings
            </Link>
          </li>
          <li>
            <Link to={CHICKEN_MARSALA_RECIPE} className="large-label">
              Chicken Marsala
            </Link>
          </li>
          <li>
            <Link to={CREAMY_CHICKEN_RECIPE} className="large-label">
              Creamy Chicken
            </Link>
          </li>
          <li>
            <Link to={FRIED_CHICKEN_NUGGETS_RECIPE} className="large-label">
              Fried Chicken Nuggets
            </Link>
          </li>
          <li>
            <Link to={GENERAL_TSOS_CHICKEN_RECIPE} className="large-label">
              General Tso's Chicken
            </Link>
          </li>
          <li>
            <Link to={GRANOLA_RECIPE} className="large-label">
              Granola
            </Link>
          </li>
          <li>
            <Link to={KOREAN_LETTUCE_WRAPS_RECIPE} className="large-label">
              Korean Lettuce Wraps
            </Link>
          </li>
          <li>
            <Link to={LEMON_GARLIC_BOK_CHOY_RECIPE} className="large-label">
              Lemon Garlic Sautéed Bok Choy
            </Link>
          </li>
          <li>
            <Link to={NOBO_MISO_MARINATED_FISH_RECIPE} className="large-label">
              Nobu's Miso-Marinated Fish
            </Link>
          </li>
          <li>
            <Link to={SKAGENRORA_RECIPE} className="large-label">
              Skagenrora (Swedish)
            </Link>
          </li>
          <li>
            <Link to={SPAGHETTI_BOLOGNESE_RECIPE} className="large-label">
              Spaghetti Bolognese
            </Link>
          </li>
          <li>
            <Link to={YAKI_SORTA_RECIPE} className="large-label">
              Yaki-Sorta
            </Link>
          </li>
        </ul>
      </main>
    </PageWrapper>
  );
}

export default FoodHomeScreen;
