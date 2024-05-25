"use client";
import { useAtom } from "jotai";
import { themeAtom } from "../store";

export default function ThemeSwitcher() {
  const [appTheme, setAppTheme] = useAtom(themeAtom);
  const handleClick = () =>
    setAppTheme(appTheme === "light" ? "dark" : "light");
  return (
    <div className={appTheme}>
      <h1>This is a theme switcher</h1>
      <button onClick={handleClick}>
        {appTheme === "light" ? "DARK" : "LIGHT"}
      </button>
    </div>
  );
}
