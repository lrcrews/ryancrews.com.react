import AboutScreen from "./about/About";
import PrivacyPolicyScreen from "./about/PrivacyPolicy";
import TermsScreen from "./about/Terms";

import HomeScreen from "./home/Home";

import CodeHomeScreen from "./code/CodeHome";
import PostsHomeScreen, {
  PostCategoryDisplayName,
  PostCategory,
} from "./code/posts/PostsHome";
// NEW_POST: Posts section of imports
import HelloWorldScreen from "./code/posts/content/HelloWorld";

import FoodHomeScreen from "./food/FoodHome";
// NEW_RECIPE: Recipes section of imports
import YakiSortaScreen from "./food/content/YakiSorta";

export {
  AboutScreen,
  CodeHomeScreen,
  FoodHomeScreen,
  HomeScreen,
  PostCategory,
  PostCategoryDisplayName,
  PostsHomeScreen,
  PrivacyPolicyScreen,
  TermsScreen,
  // NEW_POST: Posts section of screens
  HelloWorldScreen,
  // NEW_RECIPE: Recipes section of screens
  YakiSortaScreen,
};
