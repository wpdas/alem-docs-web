import { Routes, createRoute } from "alem/router";
import {
  BOSPropsPage,
  CLIPage,
  ClearStorePage,
  ConfigFilePage,
  CreateRoutePage,
  CreatingStorePage,
  DeployingWithGithubActionsPage,
  // RoadmapPage,
  FeatureOverviewPage,
  GetStorePage,
  InstallationPage,
  LoadExternalStylesPage,
  NavigatePage,
  PromisifyPage,
  IsDevelopmentPage,
  RouteLinkPage,
  RoutesPage,
  UseLocationPage,
  UseParamsPage,
} from "./pages";
import { AboutPage } from "./pages/About/About";
import { createStore } from "alem";
// import { buildMarkdownPages } from "./pages";

export const Categories = {
  gettingStarted: "Getting Started",
  router: "Router",
  apis: "APIs",
  store: "Store",
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
  // roadmap: {
  //   path: "roadmap",
  //   title: "Roadmap",
  //   category: Categories.gettingStarted,
  // },

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

  // Store
  creatingStore: {
    path: "creating-a-store",
    title: "Creating Store",
    category: Categories.store,
  },
  getStore: {
    path: "get-store",
    title: "Get Store",
    category: Categories.store,
  },
  clearStore: {
    path: "clear-store",
    title: "Clear Store",
    category: Categories.store,
  },

  // BOS API
  bosProps: {
    path: "bos-props",
    title: "APIs and Components",
    category: Categories.bos,
  },
};

const AppRoutes = () => {
  const routes = [
    // About
    createRoute(RoutesPath.about.path, AboutPage),

    // Getting Started
    createRoute(RoutesPath.featureOverview.path, FeatureOverviewPage),
    createRoute(RoutesPath.installation.path, InstallationPage),
    createRoute(RoutesPath.configFile.path, ConfigFilePage),
    createRoute(RoutesPath.cli.path, CLIPage),
    createRoute(RoutesPath.deployingWithGithubActions.path, DeployingWithGithubActionsPage),
    // createRoute(RoutesPath.roadmap.path, RoadmapPage),

    // Router
    createRoute(RoutesPath.routes.path, RoutesPage),
    createRoute(RoutesPath.createRoute.path, CreateRoutePage),
    createRoute(RoutesPath.routeLink.path, RouteLinkPage),
    createRoute(RoutesPath.navigate.path, NavigatePage),
    createRoute(RoutesPath.useLocation.path, UseLocationPage),
    createRoute(RoutesPath.useParams.path, UseParamsPage),

    // APIs
    createRoute(RoutesPath.loadExternalStyles.path, LoadExternalStylesPage),
    createRoute(RoutesPath.promisify.path, PromisifyPage),
    createRoute(RoutesPath.isDevelopment.path, IsDevelopmentPage),

    // Store
    createRoute(RoutesPath.creatingStore.path, CreatingStorePage),
    createRoute(RoutesPath.getStore.path, GetStorePage),
    createRoute(RoutesPath.clearStore.path, ClearStorePage),

    // BOS API
    createRoute(RoutesPath.bosProps.path, BOSPropsPage),
  ];

  return <Routes routes={routes} type="ContentBased" />;
};

export default AppRoutes;
