import { act } from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../../test-utils/renderWithProviders";

import FoodHomeScreen from "./FoodHome";

function renderFoodHome() {
  return renderWithProviders(<FoodHomeScreen />);
}

describe("FoodHomeScreen", () => {
  test("filters recipes by comma-separated terms", async () => {
    renderFoodHome();

    const filterInput = screen.getByLabelText(/filter recipes by tag or title/i);

    await act(async () => {
      await userEvent.type(filterInput, "chicken, onion");
    });

    expect(filterInput).toHaveValue("chicken, onion");
    expect(screen.getByText("Chicken Marsala")).toBeInTheDocument();
    expect(screen.queryByText("Braised Chicken")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Beef Negimaki (Beef and Scallion Roll)")
    ).not.toBeInTheDocument();
  });

  test("shows an empty state and clears back to the full recipe list", async () => {
    renderFoodHome();

    const filterInput = screen.getByLabelText(/filter recipes by tag or title/i);

    await act(async () => {
      await userEvent.type(filterInput, "nope");
    });

    expect(
      screen.getByText("No recipes match the current filter.")
    ).toBeInTheDocument();
    expect(screen.queryByText("Braised Chicken")).not.toBeInTheDocument();

    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: "Clear" }));
    });

    expect(filterInput).toHaveValue("");
    expect(
      screen.queryByText("No recipes match the current filter.")
    ).not.toBeInTheDocument();
    expect(screen.getByText("Braised Chicken")).toBeInTheDocument();
    expect(screen.getByText("Beef Stir Fry")).toBeInTheDocument();
  });

  test("toggles quick filter buttons on and off", async () => {
    renderFoodHome();

    const filterInput = screen.getByLabelText(/filter recipes by tag or title/i);
    const chickenButton = screen.getByRole("button", { name: "chicken" });

    await act(async () => {
      await userEvent.click(chickenButton);
    });

    expect(filterInput).toHaveValue("chicken");
    expect(chickenButton).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("Braised Chicken")).toBeInTheDocument();
    expect(screen.queryByText("Beef Stir Fry")).not.toBeInTheDocument();

    await act(async () => {
      await userEvent.click(chickenButton);
    });

    expect(filterInput).toHaveValue("");
    expect(chickenButton).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByText("Braised Chicken")).toBeInTheDocument();
    expect(screen.getByText("Beef Stir Fry")).toBeInTheDocument();
  });
});
