import { createBrowserRouter } from "react-router-dom";

import {
  AboutScreen,
  CodeHomeScreen,
  HomeScreen,
  PrivacyPolicyScreen,
  TermsScreen,
} from "../screens";

export const HOME_PATH = "/";

export const ABOUT_PATH = "/about";
export const PRIVACY_PATH = "/privacy-policy";
export const TERMS_PATH = "/terms";

export const CODE_HOME_PATH = "/code";

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
    path: PRIVACY_PATH,
    element: <PrivacyPolicyScreen />,
  },
  {
    path: TERMS_PATH,
    element: <TermsScreen />,
  },
  {
    path: "*",
    element: <HomeScreen />,
  },
]);
