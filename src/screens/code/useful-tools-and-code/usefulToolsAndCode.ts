import { ComponentType } from "react";

import {
  BUTTON_WITH_SELECT_TOOL,
  COLOR_CONVERTER_TOOL,
  CONFETTI_TOOL,
} from "../../../routes/paths";

import ButtonWithSelectScreen from "./content/button-with-select/ButtonWithSelectScreen";
import ColorConverterScreen from "./content/color-converter/ColorConverter";
import ConfettiScreen from "./content/confetti/Confetti";
import { UsefulToolCategory } from "./usefulToolCategories";

export interface UsefulToolSummary {
  Screen: ComponentType;
  category: UsefulToolCategory;
  path: string;
  teaser: string;
  title: string;
}

export const usefulToolsAndCode: UsefulToolSummary[] = [
  // NEW_USEFUL_TOOL: Useful tools and code section of preview data
  {
    Screen: ConfettiScreen,
    category: UsefulToolCategory.CSSSnippet,
    path: CONFETTI_TOOL,
    teaser: "Pure CSS confetti effect, because why not 🎊",
    title: "Confetti",
  },
  {
    Screen: ButtonWithSelectScreen,
    category: UsefulToolCategory.Tool,
    path: BUTTON_WITH_SELECT_TOOL,
    teaser: "A split button with a default action and an accessible chooser.",
    title: "Button with Select",
  },
  {
    Screen: ColorConverterScreen,
    category: UsefulToolCategory.Tool,
    path: COLOR_CONVERTER_TOOL,
    teaser: "Convert between hex and RGB with a live swatch.",
    title: "Color Converter",
  },
];
