import { Router, createRoute, useParams } from "alem";
import { AboutPage } from "./pages/About/About";
import { RoutesPath } from "./routeProps";
import FeatureOverview from "./md/FeatureOverview";
import Installation from "./md/Installation";
import ConfigFile from "./md/ConfigFile";
import Cli from "./md/Cli";
import DeployingWithGithubActions from "./md/DeployingWithGithubActions";
import UseRoutes from "./md/router/UseRoutes";
import CreateRoute from "./md/router/CreateRoute";
import RouteLinkDocs from "./md/router/RouteLinkDocs";
import Navigate from "./md/router/Navigate";
import RouterProviderDocs from "./md/router/RouterProviderDocs";
import GetLocation from "./md/router/GetLocation";
import UseParams from "./md/router/UseParams";
import CreateContext from "./md/context/CreateContext";
import UseContext from "./md/context/UseContext";
import LoadExternalStyles from "./md/api/LoadExternalStyles";
import Promisify from "./md/api/Promisify";
import IsDevelopment from "./md/api/IsDevelopment";
import BosOverview from "./md/BosOverview";

const Routes = () => {
  const AboutPageRoute = createRoute(RoutesPath.about.path, AboutPage);

  const routes = [
    AboutPageRoute,
    {
      path: RoutesPath.featureOverview.path,
      component: FeatureOverview,
    },
    createRoute(RoutesPath.installation.path, Installation),
    createRoute(RoutesPath.configFile.path, ConfigFile),
    createRoute(RoutesPath.cli.path, Cli),
    createRoute(RoutesPath.deployingWithGithubActions.path, DeployingWithGithubActions),

    // Router
    createRoute(RoutesPath.routes.path, UseRoutes),
    createRoute(RoutesPath.createRoute.path, CreateRoute),
    createRoute(RoutesPath.routeLink.path, RouteLinkDocs),
    createRoute(RoutesPath.navigate.path, Navigate),
    createRoute(RoutesPath.routerProvider.path, RouterProviderDocs),
    createRoute(RoutesPath.useLocation.path, GetLocation),
    createRoute(RoutesPath.useParams.path, UseParams),
    createRoute(RoutesPath.useRoutes.path, () => <p>Use Routes</p>),

    // Context
    createRoute(RoutesPath.createContext.path, CreateContext),
    createRoute(RoutesPath.useContext.path, UseContext),

    // APIs
    createRoute(RoutesPath.loadExternalStyles.path, LoadExternalStyles),
    createRoute(RoutesPath.promisify.path, Promisify),
    createRoute(RoutesPath.isDevelopment.path, IsDevelopment),

    // BOS API
    createRoute(RoutesPath.bosProps.path, BosOverview),
  ];

  const urlParams = useParams();

  return (
    <Router
      routes={routes}
      type="ContentBased"
      parameterName="tab"
      initialRoute={urlParams.section}
    />
  );
};

export default Routes;
