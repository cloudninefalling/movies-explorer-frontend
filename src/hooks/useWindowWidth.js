import { useState, useEffect } from "react";
import debounce from "../utils/debounce";

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0);
  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };
  const debouncedResizeWindow = debounce(resizeWindow, 80);

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", debouncedResizeWindow);
    return () => window.removeEventListener("resize", debouncedResizeWindow);
  }, []);

  return windowWidth;
}
