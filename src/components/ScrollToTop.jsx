import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const handle = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Wait 100ms for new page to render

    return () => clearTimeout(handle); // Cleanup timeout if component unmounts quickly
  }, [pathname]);

  return null;
}
