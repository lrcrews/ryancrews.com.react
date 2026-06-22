import { act } from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";

import {
  BRAISED_CHICKEN_RECIPE,
  FOOD_HOME_PATH,
  HOME_PATH,
} from "../../routes/paths";
import { renderWithProviders } from "../../test-utils/renderWithProviders";

import SiteFooter from "./SiteFooter";

function TestHarness() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(HOME_PATH)}>Go home</button>
      <button onClick={() => navigate(BRAISED_CHICKEN_RECIPE)}>
        Go to recipe
      </button>
      <button onClick={() => navigate(FOOD_HOME_PATH)}>Go to food home</button>
      <SiteFooter />
    </>
  );
}

function mockWakeLock() {
  const sentinel = {
    addEventListener: jest.fn(),
    release: jest.fn().mockResolvedValue(undefined),
    removeEventListener: jest.fn(),
  };
  const request = jest.fn().mockResolvedValue(sentinel);

  Object.defineProperty(navigator, "wakeLock", {
    configurable: true,
    value: { request },
  });

  return { request, sentinel };
}

function renderFooter(initialEntries: string[]) {
  return renderWithProviders(<TestHarness />, { initialEntries });
}

describe("SiteFooter", () => {
  afterEach(() => {
    delete (navigator as Navigator & { wakeLock?: unknown }).wakeLock;
  });

  test("shows cook mode unchecked on recipe pages", () => {
    const { request } = mockWakeLock();

    renderFooter([BRAISED_CHICKEN_RECIPE]);

    const cookModeCheckbox = screen.getByRole("checkbox", {
      name: /cook mode/i,
    });

    expect(cookModeCheckbox).not.toBeChecked();
    expect(request).not.toHaveBeenCalled();
  });

  test("enables cook mode when selected on recipe pages", async () => {
    const { request } = mockWakeLock();

    renderFooter([BRAISED_CHICKEN_RECIPE]);

    await act(async () => {
      await userEvent.click(
        screen.getByRole("checkbox", { name: /cook mode/i })
      );
    });

    await waitFor(() => {
      expect(request).toHaveBeenCalledWith("screen");
    });
  });

  test("hides cook mode away from recipe pages", () => {
    mockWakeLock();

    renderFooter([HOME_PATH]);

    expect(
      screen.queryByRole("checkbox", { name: /cook mode/i })
    ).not.toBeInTheDocument();
  });

  test("hides cook mode when wake lock is unavailable", () => {
    renderFooter([BRAISED_CHICKEN_RECIPE]);

    expect(
      screen.queryByRole("checkbox", { name: /cook mode/i })
    ).not.toBeInTheDocument();
  });

  test("turns cook mode off when leaving a recipe page", async () => {
    const { request, sentinel } = mockWakeLock();

    renderFooter([BRAISED_CHICKEN_RECIPE]);

    await act(async () => {
      await userEvent.click(
        screen.getByRole("checkbox", { name: /cook mode/i })
      );
    });

    await waitFor(() => {
      expect(request).toHaveBeenCalledWith("screen");
    });

    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: /go home/i }));
    });

    await waitFor(() => {
      expect(
        screen.queryByRole("checkbox", { name: /cook mode/i })
      ).not.toBeInTheDocument();
      expect(sentinel.release).toHaveBeenCalled();
    });
  });
});
