import { createBrowserRouter } from "react-router-dom";
import { AboutScreen, HomeScreen } from "../screens";

export const ABOUT_PATH = "/about";
export const HOME_PATH = "/";

export const router = createBrowserRouter([
  {
    path: ABOUT_PATH,
    element: <AboutScreen />,
  },
  {
    path: "*",
    element: <HomeScreen />,
  },
]);
