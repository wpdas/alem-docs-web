import { RoutesPath } from "./routeProps";

const nextPrevRoutes = () => ({
  // Getting Started
  [RoutesPath.about.path]: {
    next: RoutesPath.installation.path,
  },

  [RoutesPath.installation.path]: {
    prev: RoutesPath.about.path,
    next: RoutesPath.featureOverview.path,
  },

  [RoutesPath.featureOverview.path]: {
    prev: RoutesPath.installation.path,
    next: RoutesPath.configFile.path,
  },

  [RoutesPath.configFile.path]: {
    prev: RoutesPath.installation.path,
    next: RoutesPath.cli.path,
  },
  [RoutesPath.cli.path]: {
    prev: RoutesPath.configFile.path,
    next: RoutesPath.deployingWithGithubActions.path,
  },

  [RoutesPath.deployingWithGithubActions.path]: {
    prev: RoutesPath.cli.path,
    next: RoutesPath.environment.path,
  },

  [RoutesPath.environment.path]: {
    prev: RoutesPath.deployingWithGithubActions.path,
    next: RoutesPath.installingModules.path,
  },

  // Modules
  [RoutesPath.installingModules.path]: {
    prev: RoutesPath.deployingWithGithubActions.path,
    next: RoutesPath.howToUseModules.path,
  },

  [RoutesPath.howToUseModules.path]: {
    prev: RoutesPath.installingModules.path,
    next: RoutesPath.routes.path,
  },

  // Routes
  [RoutesPath.routes.path]: {
    prev: RoutesPath.deployingWithGithubActions.path,
    next: RoutesPath.routeLink.path,
  },
  [RoutesPath.routeLink.path]: {
    prev: RoutesPath.routes.path,
    next: RoutesPath.navigate.path,
  },
  [RoutesPath.navigate.path]: {
    prev: RoutesPath.routeLink.path,
    next: RoutesPath.getLocation.path,
  },
  [RoutesPath.getLocation.path]: {
    prev: RoutesPath.navigate.path,
    next: RoutesPath.useParams.path,
  },
  [RoutesPath.useParams.path]: {
    prev: RoutesPath.getLocation.path,
    next: RoutesPath.useRoutes.path,
  },
  [RoutesPath.useRoutes.path]: {
    prev: RoutesPath.useParams.path,
    next: RoutesPath.createAndUseContext.path,
  },

  // Context
  [RoutesPath.createAndUseContext.path]: {
    prev: RoutesPath.useRoutes.path,
    next: RoutesPath.loadExternalStyles.path,
  },

  // Utils
  [RoutesPath.loadExternalStyles.path]: {
    prev: RoutesPath.createAndUseContext.path,
    next: RoutesPath.promisify.path,
  },
  [RoutesPath.promisify.path]: {
    prev: RoutesPath.loadExternalStyles.path,
    next: RoutesPath.isDevelopment.path,
  },
  [RoutesPath.isDevelopment.path]: {
    prev: RoutesPath.promisify.path,
    next: RoutesPath.createDebounce.path,
  },
  [RoutesPath.createDebounce.path]: {
    prev: RoutesPath.isDevelopment.path,
    next: RoutesPath.getAlemEnvironment.path,
  },
  [RoutesPath.getAlemEnvironment.path]: {
    prev: RoutesPath.createDebounce.path,
    next: RoutesPath.bosProps.path,
  },

  // NEAR VM (BOS)
  [RoutesPath.bosProps.path]: {
    prev: RoutesPath.getAlemEnvironment.path,
  },
});

export default nextPrevRoutes;
