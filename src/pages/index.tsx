import useAlemStore from "../stores/useAlemStore";
import getMarkdownPage from "./getMarkdownPage";

const { currentVersion } = useAlemStore();

// Getting Started
export const FeatureOverviewPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/feature-overview.md`,
);

export const InstallationPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/installation.md`,
);

export const ConfigFilePage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/config-file.md`,
);

export const BOSPropsPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/bos-overview.md`,
);

export const CLIPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/cli.md`,
);

export const DeployingWithGithubActionsPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/deploying-with-github-actions.md`,
);

// export const RoadmapPage = getMarkdownPage(
//   `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/roadmap.md`,
// );

// Router
export const RoutesPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/router/routes.md`,
);

export const CreateRoutePage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/router/create-route.md`,
);

export const RouteLinkPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/router/route-link.md`,
);

export const NavigatePage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/router/navigate.md`,
);

export const UseLocationPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/router/use-location.md`,
);

export const UseParamsPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/router/use-params.md`,
);

// APIs

export const LoadExternalStylesPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/api/load-external-styles.md`,
);

export const PromisifyPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/api/promisify.md`,
);

export const IsDevelopmentPage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/api/is-development.md`,
);

// Store

export const CreatingStorePage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/store/creating-a-store.md`,
);

export const GetStorePage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/store/get-store.md`,
);

export const ClearStorePage = getMarkdownPage(
  `https://cdn.jsdelivr.net/gh/wpdas/alem@${currentVersion}/docs/store/clear-store.md`,
);
