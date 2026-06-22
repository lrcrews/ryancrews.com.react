import { ComponentType } from "react";

import {
  COLOR_CONVERT_POST,
  HELLO_ISSUES_POST,
  HELLO_WORLD_POST,
  MY_FIRST_REAL_VIBE_POST,
  MY_FIRST_VIBE_REFACTOR_POST,
} from "../../../routes/paths";

import ColorConvertScreen from "./content/ColorConvert";
import HelloIssuesScreen from "./content/HelloIssues";
import HelloWorldScreen from "./content/HelloWorld";
import MyFirstRealVibeScreen from "./content/MyFirstRealVibe";
import MyFirstVibeRefactorScreen from "./content/MyFirstVibeRefactor";
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
