export const Categories = {
  gettingStarted: "Getting Started",
  router: "Router",
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
  featureOverview: {
    path: "feature-overview",
    title: "Feature Overview",
    category: Categories.gettingStarted,
  },
  installation: {
    path: "installation",
    title: "Installation",
    category: Categories.gettingStarted,
  },
  configFile: {
    path: "config-file",
    title: "Config File",
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

  // Router
  routes: {
    path: "routes",
    title: "Routes",
    category: Categories.router,
  },
  createRoute: {
    path: "create-route",
    title: "Create Route",
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
  routerProvider: {
    path: "router-provider",
    title: "Router Provider",
    category: Categories.router,
  },
  useLocation: {
    path: "use-location",
    title: "Use Location",
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
  createContext: {
    path: "create-context",
    title: "Create Context",
    category: Categories.context,
  },
  useContext: {
    path: "use-context",
    title: "Use Context",
    category: Categories.context,
  },

  // APIs
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

  // BOS API
  bosProps: {
    path: "bos-props",
    title: "APIs and Components",
    category: Categories.bos,
  },
};
