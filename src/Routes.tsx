import { Router, createRoute, useParams } from "alem";
import { AboutPage } from "./pages/About/About";
import { RoutesPath } from "./routeProps";
import MarkdownPage from "./pages/MarkdownPage/MarkdownPage";

type Props = {
  libVersion: string;
};

const Routes = ({ libVersion }: Props) => {
  const AboutPageRoute = createRoute(RoutesPath.about.path, AboutPage);

  const routes = [
    AboutPageRoute,

    {
      path: RoutesPath.featureOverview.path,
      component: () => (
        <MarkdownPage
          mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/feature-overview.md`}
        />
      ),
    },

    createRoute(RoutesPath.installation.path, () => (
      <MarkdownPage mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/installation.md`} />
    )),

    createRoute(RoutesPath.configFile.path, () => (
      <MarkdownPage mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/config-file.md`} />
    )),
    createRoute(RoutesPath.cli.path, () => (
      <MarkdownPage mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/cli.md`} />
    )),
    createRoute(RoutesPath.deployingWithGithubActions.path, () => (
      <MarkdownPage
        mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/deploying-with-github-actions.md`}
      />
    )),

    // Router
    createRoute(RoutesPath.routes.path, () => (
      <MarkdownPage mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/router/routes.md`} />
    )),
    createRoute(RoutesPath.createRoute.path, () => (
      <MarkdownPage
        mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/router/create-route.md`}
      />
    )),
    createRoute(RoutesPath.routeLink.path, () => (
      <MarkdownPage
        mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/router/route-link.md`}
      />
    )),
    createRoute(RoutesPath.navigate.path, () => (
      <MarkdownPage mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/router/navigate.md`} />
    )),
    createRoute(RoutesPath.routerProvider.path, () => (
      <MarkdownPage
        mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/router/router-provider.md`}
      />
    )),
    createRoute(RoutesPath.useLocation.path, () => (
      <MarkdownPage
        mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/router/use-location.md`}
      />
    )),
    createRoute(RoutesPath.useParams.path, () => (
      <MarkdownPage
        mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/router/use-params.md`}
      />
    )),
    createRoute(RoutesPath.useRoutes.path, () => (
      <MarkdownPage
        mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/router/use-routes.md`}
      />
    )),

    // Context
    createRoute(RoutesPath.createContext.path, () => (
      <MarkdownPage
        mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/context/create-context.md`}
      />
    )),
    createRoute(RoutesPath.useContext.path, () => (
      <MarkdownPage
        mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/context/use-context.md`}
      />
    )),

    // APIs
    createRoute(RoutesPath.loadExternalStyles.path, () => (
      <MarkdownPage
        mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/api/load-external-styles.md`}
      />
    )),
    createRoute(RoutesPath.promisify.path, () => (
      <MarkdownPage mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/api/promisify.md`} />
    )),
    createRoute(RoutesPath.isDevelopment.path, () => (
      <MarkdownPage
        mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/api/is-development.md`}
      />
    )),

    // BOS API
    createRoute(RoutesPath.bosProps.path, () => (
      <MarkdownPage mdFileURL={`https://cdn.jsdelivr.net/gh/wpdas/alem/docs/bos-overview.md`} />
    )),
  ];

  const urlParams = useParams();

  return (
    <>
      {/* <Router routes={routes} parameterName="tab" /> */}
      <Router
        routes={routes}
        type="ContentBased"
        parameterName="tab"
        initialRoute={urlParams.section}
      />
    </>
  );
};

export default Routes;
