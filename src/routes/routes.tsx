import { createBrowserRouter } from "react-router-dom";

import {
  AboutScreen,
  CodeHomeScreen,
  FoodHomeScreen,
  HomeScreen,
  PostsHomeScreen,
  PrivacyPolicyScreen,
  TermsScreen,
  UsefulToolsAndCodeHomeScreen,
} from "../screens";
import { posts } from "../screens/code/posts/posts";
import { usefulToolsAndCode } from "../screens/code/useful-tools-and-code/usefulToolsAndCode";
import { recipes } from "../screens/food/recipes";
import {
  ABOUT_PATH,
  CODE_HOME_PATH,
  FOOD_HOME_PATH,
  POSTS_HOME_PATH,
  PRIVACY_PATH,
  TERMS_PATH,
  USEFUL_TOOLS_AND_CODE_HOME_PATH,
} from "./paths";

export * from "./paths";

const contentRoutes = [...posts, ...usefulToolsAndCode, ...recipes].map(
  ({ path, Screen }) => ({
    path,
    element: <Screen />,
  }),
);

export const router = createBrowserRouter([
  {
    path: ABOUT_PATH,
    element: <AboutScreen />,
  },
  {
    path: CODE_HOME_PATH,
    element: <CodeHomeScreen />,
  },
  {
    path: FOOD_HOME_PATH,
    element: <FoodHomeScreen />,
  },
  {
    path: POSTS_HOME_PATH,
    element: <PostsHomeScreen />,
  },
  {
    path: USEFUL_TOOLS_AND_CODE_HOME_PATH,
    element: <UsefulToolsAndCodeHomeScreen />,
  },
  {
    path: PRIVACY_PATH,
    element: <PrivacyPolicyScreen />,
  },
  {
    path: TERMS_PATH,
    element: <TermsScreen />,
  },
  ...contentRoutes,
  // Catch all
  {
    path: "*",
    element: <HomeScreen />,
  },
]);
