import { act } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { CookModeProvider } from "../../cook-mode";
import {
  BRAISED_CHICKEN_RECIPE,
  FOOD_HOME_PATH,
  HOME_PATH,
} from "../../routes/paths";
import { ThemeProvider } from "../../themes";

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
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <ThemeProvider themeName="light">
        <CookModeProvider>
          <TestHarness />
        </CookModeProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
}

describe("SiteFooter", () => {
  afterEach(() => {
    delete (navigator as Navigator & { wakeLock?: unknown }).wakeLock;
  });

  test("automatically enables cook mode on recipe pages", async () => {
    const { request } = mockWakeLock();

    renderFooter([BRAISED_CHICKEN_RECIPE]);

    const cookModeCheckbox = screen.getByRole("checkbox", {
      name: /cook mode/i,
    });

    expect(cookModeCheckbox).toBeChecked();

    await waitFor(() => {
      expect(request).toHaveBeenCalledWith("screen");
    });
  });

  test("turns cook mode off when leaving a recipe page", async () => {
    const { request, sentinel } = mockWakeLock();

    renderFooter([BRAISED_CHICKEN_RECIPE]);

    await waitFor(() => {
      expect(request).toHaveBeenCalledWith("screen");
    });

    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: /go home/i }));
    });

    await waitFor(() => {
      expect(screen.getByRole("checkbox", { name: /cook mode/i })).not.toBeChecked();
      expect(sentinel.release).toHaveBeenCalled();
    });
  });

  test("allows manual cook mode toggling away from recipe pages", async () => {
    const { request, sentinel } = mockWakeLock();

    renderFooter([HOME_PATH]);

    const cookModeCheckbox = screen.getByRole("checkbox", {
      name: /cook mode/i,
    });

    expect(cookModeCheckbox).not.toBeChecked();

    await act(async () => {
      await userEvent.click(cookModeCheckbox);
    });

    expect(cookModeCheckbox).toBeChecked();

    await waitFor(() => {
      expect(request).toHaveBeenCalledWith("screen");
    });

    await act(async () => {
      await userEvent.click(cookModeCheckbox);
    });

    await waitFor(() => {
      expect(cookModeCheckbox).not.toBeChecked();
      expect(sentinel.release).toHaveBeenCalled();
    });
  });
});
