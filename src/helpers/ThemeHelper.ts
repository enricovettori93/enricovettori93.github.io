import {Theme} from "../context/ThemeContext";

export default class ThemeHelper {
  static textColorBasedOnTheme = (theme: Theme) => (theme === Theme.WHITE ? "text-black" : "text-white");
  static bgColorBasedOnTheme = (theme: Theme) => (theme === Theme.WHITE ? "bg-white" : "bg-black");
  static cardColorBasedOnTheme = (theme: Theme) => (theme === Theme.WHITE ? "bg-white" : "bg-zinc-900");
}