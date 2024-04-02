# Use Routes

Hook used to return the current data utilized by the `Router` component.

```ts
import { useRoutes } from "alem";

export const SomeComponent = () => {
  const routesProps = useRoutes();
  console.log(routesProps);
  // { routesInitialized: true, activeRoute: 'home', routeParameterName: 'path', routes: ['home', 'profile'], routeType: 'ContentBased' }

  return "";
};
```
