import { Router, createRoute, getLocation, useParams } from "alem";
import CssFiles from "@app/md/CssFiles";
import Environment from "@app/md/Environment";
import Tailwind from "@app/md/Tailwind";
import GetAlemEnvironment from "@app/md/api/GetAlemEnvironment";
import LocalModules from "@app/md/local-modules/LocalModules";
import HowToUseModules from "@app/md/modules/HowToUseModules";
import InstallingModules from "@app/md/modules/InstallingModules";
import BosOverview from "@md/BosOverview";
import Cli from "@md/Cli";
import ConfigFile from "@md/ConfigFile";
import DeployingWithGithubActions from "@md/DeployingWithGithubActions";
import FeatureOverview from "@md/FeatureOverview";
import Installation from "@md/Installation";
import CreateDebounce from "@md/api/CreateDebounce";
import IsDevelopment from "@md/api/IsDevelopment";
import LoadExternalStyles from "@md/api/LoadExternalStyles";
import Promisify from "@md/api/Promisify";
import CreateContext from "@md/context/CreateContext";
import GetLocation from "@md/router/GetLocation";
import Navigate from "@md/router/Navigate";
import RouteLinkDocs from "@md/router/RouteLinkDocs";
import RoutesDocs from "@md/router/RoutesDocs";
import UseParams from "@md/router/UseParams";
import UseRoutes from "@md/router/UseRoutes";
import getRouteTitleByPath from "../modules/routes/getRouteTitleByPath";
import nextPrevRoutes from "../modules/routes/nextPrevRoutes";
import { RoutesPath } from "../modules/routes/routeProps";
import { AboutPage } from "../pages/About/About";
import { FooterNavContainer, NextPrevButton } from "./styles";

const Routes = () => {
  const urlParams = useParams();
  const location = getLocation();
  const nextPrev = nextPrevRoutes();
  const next = nextPrev[location.pathname].next;
  const prev = nextPrev[location.pathname].prev;
  const nextTitle = getRouteTitleByPath(next);
  const prevTitle = getRouteTitleByPath(prev);

  const routes = [
    createRoute(RoutesPath.about.path, AboutPage),
    createRoute(RoutesPath.installation.path, Installation),
    {
      path: RoutesPath.featureOverview.path,
      component: FeatureOverview,
    },
    createRoute(RoutesPath.configFile.path, ConfigFile),
    createRoute(RoutesPath.cssFiles.path, CssFiles),
    createRoute(RoutesPath.tailwind.path, Tailwind),
    createRoute(RoutesPath.cli.path, Cli),
    createRoute(RoutesPath.deployingWithGithubActions.path, DeployingWithGithubActions),
    createRoute(RoutesPath.environment.path, Environment),

    // Router
    createRoute(RoutesPath.routes.path, RoutesDocs),
    createRoute(RoutesPath.useRoutes.path, UseRoutes),
    createRoute(RoutesPath.routeLink.path, RouteLinkDocs),
    createRoute(RoutesPath.navigate.path, Navigate),
    createRoute(RoutesPath.getLocation.path, GetLocation),
    createRoute(RoutesPath.useParams.path, UseParams),

    // Context
    createRoute(RoutesPath.createAndUseContext.path, CreateContext),

    // APIs
    createRoute(RoutesPath.loadExternalStyles.path, LoadExternalStyles),
    createRoute(RoutesPath.promisify.path, Promisify),
    createRoute(RoutesPath.isDevelopment.path, IsDevelopment),
    createRoute(RoutesPath.createDebounce.path, CreateDebounce),
    createRoute(RoutesPath.getAlemEnvironment.path, GetAlemEnvironment),

    // BOS API
    createRoute(RoutesPath.bosProps.path, BosOverview),

    // Modules
    createRoute(RoutesPath.installingModules.path, InstallingModules),
    createRoute(RoutesPath.howToUseModules.path, HowToUseModules),

    // Local Modules
    createRoute(RoutesPath.aboutLocalModules.path, LocalModules),
  ];

  return (
    <>
      <Router routes={routes} initialRoute={urlParams.section} />
      <FooterNavContainer hasPrevious={!!prev} hasNext={!!next}>
        {prev && (
          <NextPrevButton href={`?path=${prev}`}>
            <p>Previous</p>
            <span>{prevTitle}</span>
          </NextPrevButton>
        )}

        {next && (
          <NextPrevButton next href={`?path=${next}`}>
            <p>Next</p>
            <span>{nextTitle}</span>
          </NextPrevButton>
        )}
      </FooterNavContainer>
    </>
  );
};

export default Routes;
