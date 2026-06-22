import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../test-utils/renderWithProviders";
import { posts } from "../code/posts/posts";

import HomeScreen from "./Home";

describe("HomeScreen", () => {
  test("shows the latest post from the post registry", () => {
    renderWithProviders(<HomeScreen />);

    const latestPost = posts[0];

    expect(screen.getByText(latestPost.title)).toBeInTheDocument();
    expect(screen.getByText(latestPost.teaser)).toBeInTheDocument();
  });
});
