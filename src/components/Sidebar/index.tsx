import { useEffect, getLocation, useState, useRoutes, Storage } from "alem";
import { SidebarAboutLogo, Container } from "./styles";
import getLinksByCategory from "../../utils/getLinksByCategory";
import CollapseList from "../CollapseList";
import { Categories, RoutesPath } from "@app/modules/routes/routeProps";

const Sidebar = () => {
  const { pathname } = getLocation();
  const entries = Object.entries(RoutesPath);
  const routePropsEntry = entries.find((entry) => entry[1].path === pathname);
  const routeProps = routePropsEntry ? routePropsEntry[1] : null;

  const { routeParameterName } = useRoutes();

  const [gettingStartedItems, setGettingStartedItems] = useState<(JSX.Element | undefined)[]>([]);
  const [routerItems, setRouterItems] = useState<(JSX.Element | undefined)[]>([]);
  const [modulesItems, setModulesItems] = useState<(JSX.Element | undefined)[]>([]);
  const [localModulesItems, setLocalModulesItems] = useState<(JSX.Element | undefined)[]>([]);
  const [contextItems, setContextItems] = useState<(JSX.Element | undefined)[]>([]);
  const [apisItems, setApisItems] = useState<(JSX.Element | undefined)[]>([]);
  const [bosItems, setBosItems] = useState<(JSX.Element | undefined)[]>([]);

  useEffect(() => {
    const _gettingStartedItems = getLinksByCategory("Getting Started");
    const _routerItems = getLinksByCategory("Router");
    const _modulesItems = getLinksByCategory("Modules");
    const _localModulesItems = getLinksByCategory("Local Modules");
    const _contextItems = getLinksByCategory("Context");
    const _apisItems = getLinksByCategory("APIs");
    const _bosItems = getLinksByCategory("BOS");

    setGettingStartedItems(_gettingStartedItems);
    setRouterItems(_routerItems);
    setModulesItems(_modulesItems);
    setLocalModulesItems(_localModulesItems);
    setContextItems(_contextItems);
    setApisItems(_apisItems);
    setBosItems(_bosItems);
  }, [pathname, routeParameterName]);

  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const handleOpenRegister = (isOpen: boolean, category: string) => {
    if (!isOpen) {
      const updatedOpenCategories = openCategories.filter((item) => item !== category);
      setOpenCategories(updatedOpenCategories);
    } else {
      if (!openCategories.includes(category)) {
        const updatedOpenCategories = [...openCategories, category];
        setOpenCategories(updatedOpenCategories);
      }
    }
  };

  // Read previous openCategories
  useEffect(() => {
    const previousOpenCategories = Storage.get("openCategories");
    if (previousOpenCategories) {
      setOpenCategories(previousOpenCategories);
    }
  }, []);

  // On change openCategories: store on storage
  useEffect(() => {
    Storage.set("openCategories", openCategories);
  }, [openCategories]);

  // Handle the routeProps
  useEffect(() => {
    if (routeProps) {
      handleOpenRegister(true, routeProps.category);
    }
  }, [routeProps]);

  return (
    <Container>
      <SidebarAboutLogo
        src="https://cdn.jsdelivr.net/gh/wpdas/alem/docs/assets/near-script-logo.png"
        width={60}
        alt="logo"
      />

      <div>
        <CollapseList title="Getting Started" initialState="open">
          <>{gettingStartedItems}</>
        </CollapseList>
      </div>

      <div>
        <CollapseList
          title="Local Modules"
          initialState={openCategories.includes(Categories.localModules) ? "open" : "closed"}
          onClick={(isOpen) => handleOpenRegister(isOpen, Categories.localModules)}
        >
          <>{localModulesItems}</>
        </CollapseList>
      </div>

      <div>
        <CollapseList
          title="NPM Modules"
          initialState={openCategories.includes(Categories.modules) ? "open" : "closed"}
          onClick={(isOpen) => handleOpenRegister(isOpen, Categories.modules)}
        >
          <>{modulesItems}</>
        </CollapseList>
      </div>

      <div>
        <CollapseList
          title="Routes"
          initialState={openCategories.includes(Categories.router) ? "open" : "closed"}
          onClick={(isOpen) => handleOpenRegister(isOpen, Categories.router)}
        >
          <>{routerItems}</>
        </CollapseList>
      </div>

      <div>
        <CollapseList
          title="Context"
          initialState={openCategories.includes(Categories.context) ? "open" : "closed"}
          onClick={(isOpen) => handleOpenRegister(isOpen, Categories.context)}
        >
          <>{contextItems}</>
        </CollapseList>
      </div>

      <div>
        <CollapseList
          title="Utils"
          initialState={openCategories.includes(Categories.apis) ? "open" : "closed"}
          onClick={(isOpen) => handleOpenRegister(isOpen, Categories.apis)}
        >
          <>{apisItems}</>
        </CollapseList>
      </div>

      <div>
        <CollapseList
          title="NEAR VM (BOS)"
          initialState={openCategories.includes(Categories.bos) ? "open" : "closed"}
          onClick={(isOpen) => handleOpenRegister(isOpen, Categories.bos)}
        >
          <>{bosItems}</>
        </CollapseList>
      </div>
    </Container>
  );
};

export default Sidebar;
