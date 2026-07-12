import { ComponentType } from "react";

import {
  COLOR_CONVERT_POST,
  HELLO_ISSUES_POST,
  HELLO_WORLD_POST,
  MY_FIRST_REAL_VIBE_POST,
  MY_FIRST_VIBE_REFACTOR_POST,
  RECURSION_POST,
  VALID_PARENTHESES_POST,
  VIBE_TUNE_TOO_POST,
} from "../../../routes/paths";

import ColorConvertScreen from "./content/ColorConvert";
import HelloIssuesScreen from "./content/HelloIssues";
import HelloWorldScreen from "./content/HelloWorld";
import MyFirstRealVibeScreen from "./content/MyFirstRealVibe";
import MyFirstVibeRefactorScreen from "./content/MyFirstVibeRefactor";
import RecursionScreen from "./content/Recursion";
import ValidParenthesesScreen from "./content/ValidParentheses";
import VibeTuneTooScreen from "./content/VibeTuneToo";
import { PostCategory } from "./postCategories";

export interface PostSummary {
  Screen: ComponentType;
  category: PostCategory;
  path: string;
  teaser: string;
  title: string;
}

export const posts: PostSummary[] = [
  // NEW_POST: Posts section of preview data
  {
    Screen: ValidParenthesesScreen,
    category: PostCategory.TheJob,
    path: VALID_PARENTHESES_POST,
    teaser:
      "A stack-based way to check whether brackets close in the order they opened.",
    title: "Valid Parentheses",
  },
  {
    Screen: RecursionScreen,
    category: PostCategory.TheArt,
    path: RECURSION_POST,
    teaser:
      "A clean way to solve nested problems by repeating the same smaller step.",
    title: "Recursion",
  },
  {
    Screen: VibeTuneTooScreen,
    category: PostCategory.VibeCoding,
    path: VIBE_TUNE_TOO_POST,
    teaser:
      "If we already use a script to generate recipes from JSON, why not just use JSON?",
    title: "Vibe Tune Too",
  },
  {
    Screen: MyFirstVibeRefactorScreen,
    category: PostCategory.VibeCoding,
    path: MY_FIRST_VIBE_REFACTOR_POST,
    teaser:
      "I always knew I would refactor things, I didn't know it'd be this quick and easy",
    title: "My first (vibe) refactor",
  },
  {
    Screen: ColorConvertScreen,
    category: PostCategory.VibeCoding,
    path: COLOR_CONVERT_POST,
    teaser:
      "A color converter session that moved from first pass to mockup polish to tiny UX corrections.",
    title: "Color Convert",
  },
  {
    Screen: MyFirstRealVibeScreen,
    category: PostCategory.VibeCoding,
    path: MY_FIRST_REAL_VIBE_POST,
    teaser:
      "A look at the first session that felt less like prompting and more like collaborating.",
    title: "My first real vibe",
  },
  {
    Screen: HelloIssuesScreen,
    category: PostCategory.HowTo,
    path: HELLO_ISSUES_POST,
    teaser:
      "A lightweight workflow from issue label to local branch to verified change.",
    title: "Hello issues!",
  },
  {
    Screen: HelloWorldScreen,
    category: PostCategory.CoolThing,
    path: HELLO_WORLD_POST,
    teaser: "In a world, where teasers have a voice, we have some writing.",
    title: "Hello World",
  },
];
