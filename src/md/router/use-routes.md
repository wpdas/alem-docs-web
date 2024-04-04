# Use Routes

Hook used to return the current data utilized by the `Router` component.

```ts
import { useRoutes } from "alem";

export const SomeComponent = () => {
  const routesProps = useRoutes();
  console.log(routesProps);
  // { routeParams: {}, routesInitialized: true, activeRoute: 'home', routeParameterName: 'path', routes: ['home', 'profile'], routeType: 'ContentBased' }

  return "";
};
```

If you're using `"ContentBased"` Router, you can use `useRoutes().routeParams` to get the route params.

```ts
import { useRoutes } from "alem";

export const SomeComponent = () => {
  const routesProps = useRoutes();
  console.log(routesProps.routeParams);
  // Params provided by `navigate` or `RouteLink`, e.g.: {age: 22, name: "wendz"}

  return "";
};
```
