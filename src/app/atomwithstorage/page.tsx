"use client";
import { useAtom } from "jotai";
import { theme } from "../store"

export default function AtomWithStorage() {
    const [appTheme, setAppTheme] = useAtom(theme);
    const handleClick = () => setAppTheme(!appTheme);
  return (
    <div className={appTheme? 'dark': 'light'}>
      <h1>This is a theme switcher</h1>
      <button onClick={handleClick}>
        {appTheme ? "DARK" : "LIGHT"}
      </button>
    </div>
  )
}
