import { act } from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../../../test-utils/renderWithProviders";

import PostsHomeScreen from "./PostsHome";

describe("PostsHomeScreen", () => {
  test("filters posts and promotes the filtered latest post", async () => {
    renderWithProviders(<PostsHomeScreen />);

    expect(screen.getByText("Color Convert")).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: "how to" }));
    });

    expect(screen.getByText("Hello issues!")).toBeInTheDocument();
    expect(screen.queryByText("Color Convert")).not.toBeInTheDocument();
  });
});
