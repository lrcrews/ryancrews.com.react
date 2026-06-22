import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { CookModeProvider } from "../cook-mode";
import { ThemeProvider } from "../themes";

type RenderWithProvidersOptions = {
  initialEntries?: string[];
};

export function renderWithProviders(
  ui: ReactElement,
  options: RenderWithProvidersOptions = {},
) {
  const { initialEntries = ["/"] } = options;

  window.scrollTo = jest.fn();

  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <ThemeProvider themeName="light">
        <CookModeProvider>{ui}</CookModeProvider>
      </ThemeProvider>
    </MemoryRouter>,
  );
}
