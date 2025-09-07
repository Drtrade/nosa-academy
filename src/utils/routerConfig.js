// scrollRestorationConfig.js
export const scrollRestorationConfig = {
  disableBrowserScrollRestoration: () => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  },

  routeScrollBehavior: {
    "/": { behavior: "instant", top: 0 },
    "/about": { behavior: "instant", top: 0 },
    "/team": { behavior: "instant", top: 0 },
    "/register": { behavior: "instant", top: 0 },
    "/blog": { behavior: "instant", top: 0 },
    "/contact": { behavior: "instant", top: 0 },
    "/thank-you": { behavior: "smooth", top: 0 },
  },
};

export const initializeScrollConfig = () => {
  scrollRestorationConfig.disableBrowserScrollRestoration();
};
