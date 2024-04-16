export const Categories = {
  gettingStarted: "Getting Started",
  router: "Router",
  modules: "Modules",
  context: "Context",
  apis: "APIs",
  bos: "BOS",
};

export type RoutesPathProps = Record<string, { path: string; title: string; category: string }>;

export const RoutesPath = {
  // About
  about: {
    path: "about",
    title: "About",
    category: Categories.gettingStarted,
  },
  // Getting Started
  installation: {
    path: "installation",
    title: "Installation",
    category: Categories.gettingStarted,
  },
  featureOverview: {
    path: "feature-overview",
    title: "Feature Overview",
    category: Categories.gettingStarted,
  },
  configFile: {
    path: "config-file",
    title: "Config File",
    category: Categories.gettingStarted,
  },
  cssFiles: {
    path: "css-files",
    title: "CSS Files",
    category: Categories.gettingStarted,
  },
  cli: {
    path: "cli",
    title: "CLI",
    category: Categories.gettingStarted,
  },
  deployingWithGithubActions: {
    path: "deploying-with-github-actions",
    title: "Deploying with GitHub Actions",
    category: Categories.gettingStarted,
  },

  environment: {
    path: "environment",
    title: "Environment",
    category: Categories.gettingStarted,
  },

  // Modules
  installingModules: {
    path: "installing-modules",
    title: "Installing Modules",
    category: Categories.modules,
  },
  howToUseModules: {
    path: "how-to-use-modules",
    title: "How to Use",
    category: Categories.modules,
  },

  // Router
  routes: {
    path: "routes",
    title: "Routes",
    category: Categories.router,
  },
  routeLink: {
    path: "route-link",
    title: "Route Link",
    category: Categories.router,
  },
  navigate: {
    path: "navigate",
    title: "Navigate",
    category: Categories.router,
  },
  getLocation: {
    path: "get-location",
    title: "Get Location",
    category: Categories.router,
  },
  useParams: {
    path: "use-params",
    title: "Use Params",
    category: Categories.router,
  },
  useRoutes: {
    path: "useRoutes",
    title: "Use Routes",
    category: Categories.router,
  },

  // Context
  createAndUseContext: {
    path: "create-and-use-context",
    title: "Create & Use Context",
    category: Categories.context,
  },

  // APIs - Utils
  loadExternalStyles: {
    path: "load-external-styles",
    title: "Load External Styles",
    category: Categories.apis,
  },
  promisify: {
    path: "promisify",
    title: "Promisify",
    category: Categories.apis,
  },
  isDevelopment: {
    path: "is-development",
    title: "Is Development",
    category: Categories.apis,
  },
  createDebounce: {
    path: "create-debounce",
    title: "Create Debounce",
    category: Categories.apis,
  },

  // BOS API
  bosProps: {
    path: "bos-props",
    title: "APIs and Components",
    category: Categories.bos,
  },
};
