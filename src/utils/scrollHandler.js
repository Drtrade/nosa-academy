// ScrollHandler.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollRestorationConfig } from "./routerConfig";

const ScrollHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // const behaviorConfig = scrollRestorationConfig.routeScrollBehavior[pathname];

    // if (behaviorConfig) {
    //   window.scrollTo({
    //     top: behaviorConfig.top,
    //     behavior: behaviorConfig.behavior === "instant" ? "auto" : behaviorConfig.behavior,
    //   });
    // } else {
    //   // Default scroll behavior
    //   window.scrollTo({ top: 0, behavior: "auto" });
    // }

    window.scrollTo(0, 0); // Always scroll to top on route change
  }, [pathname]);

  return null;
};

export default ScrollHandler;
