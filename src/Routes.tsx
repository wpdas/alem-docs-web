import { Routes, createRoute } from "alem/router";
import {
  BOSPropsPage,
  ConfigFilePage,
  CreateRoutePage,
  FeatureOverviewPage,
  InstallationPage,
  NavigatePage,
  RouteLinkPage,
  RoutesPage,
  StateManagementPage,
  UseLocationPage,
  UseParamsPage,
} from "./pages";

export const Categories = {
  gettingStarted: "Getting Started",
  router: "Router",
};

export type RoutesPathProps = Record<string, { path: string; title: string; category: string }>;

export const RoutesPath = {
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
  bosProps: {
    path: "bos-props",
    title: "BOS Props",
    category: Categories.gettingStarted,
  },
  stateManagement: {
    path: "state-management",
    title: "State Management",
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
};

const AppRoutes = () => {
  const routes = [
    // Getting Started
    createRoute(RoutesPath.featureOverview.path, FeatureOverviewPage),
    createRoute(RoutesPath.installation.path, InstallationPage),
    createRoute(RoutesPath.configFile.path, ConfigFilePage),
    createRoute(RoutesPath.bosProps.path, BOSPropsPage),
    createRoute(RoutesPath.stateManagement.path, StateManagementPage),

    // Router
    createRoute(RoutesPath.routes.path, RoutesPage),
    createRoute(RoutesPath.createRoute.path, CreateRoutePage),
    createRoute(RoutesPath.routeLink.path, RouteLinkPage),
    createRoute(RoutesPath.navigate.path, NavigatePage),
    createRoute(RoutesPath.useLocation.path, UseLocationPage),
    createRoute(RoutesPath.useParams.path, UseParamsPage),
  ];

  return <Routes routes={routes} type="ContentBased" />;
};

export default AppRoutes;
