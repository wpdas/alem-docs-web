## Use Routes

Hook usado para retornar os dados atuais usados pelo componente `Router`.

```ts
import { useRoutes } from "alem";

export const SomeComponent = () => {
  const routesProps = useRoutes();
  console.log(routesProps);
  // { routesInitialized: true, activeRoute: 'home', routeParameterName: 'path', routes: ['home', 'profile'], routeType: 'ContentBased' }

  return "";
};
```
