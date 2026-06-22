import { act } from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../../../test-utils/renderWithProviders";

import UsefulToolsAndCodeHomeScreen from "./UsefulToolsAndCodeHome";

describe("UsefulToolsAndCodeHomeScreen", () => {
  test("uses the categorized list flow for latest and remaining tools", async () => {
    renderWithProviders(<UsefulToolsAndCodeHomeScreen />);

    expect(screen.getByText("Button with Select")).toBeInTheDocument();
    expect(screen.getByText("Color Converter")).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: "tool" }));
    });

    expect(screen.getByText("Button with Select")).toBeInTheDocument();
    expect(screen.getByText("Color Converter")).toBeInTheDocument();
  });
});
