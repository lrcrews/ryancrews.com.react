import { createBrowserRouter } from "react-router-dom";

import {
  AboutScreen,
  CodeHomeScreen,
  HelloWorldScreen,
  HomeScreen,
  PostsHomeScreen,
  PrivacyPolicyScreen,
  TermsScreen,
} from "../screens";

export const HOME_PATH = "/";

export const ABOUT_PATH = "/about";
export const PRIVACY_PATH = "/privacy-policy";
export const TERMS_PATH = "/terms";

export const CODE_HOME_PATH = "/code";
export const POSTS_HOME_PATH = "/code/posts";

// NEW_POST: Posts section of routes
export const HELLO_WORLD_POST = "/code/posts/hello-world";

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
    path: POSTS_HOME_PATH,
    element: <PostsHomeScreen />,
  },
  {
    path: PRIVACY_PATH,
    element: <PrivacyPolicyScreen />,
  },
  {
    path: TERMS_PATH,
    element: <TermsScreen />,
  },
  // NEW_POST: Post section of routes... too.
  {
    path: HELLO_WORLD_POST,
    element: <HelloWorldScreen />,
  },
  // Catch all
  {
    path: "*",
    element: <HomeScreen />,
  },
]);
