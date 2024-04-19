# Routes

Feature to manage the application routes.

# Router

This component is responsible for managing the content to be displayed on the screen according to the active route. You can use the `createRoute` resource to create application routes and pass them to the Router.

```tsx
import { RouterContext, Router, createRoute } from "alem";

import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";

const AppRoutes = () => {

  // It must be placed above all resources that will use the Router tools.
  RouterContext();

  // Creating routes
  const HomePageRoute = createRoute("home", HomePage);
  const ProfilePageRoute = createRoute("profile", ProfilePage);

  const routes = [
    HomePageRoute,
    ProfilePageRoute,
  ]

  // Initializing Routes
  return (
    <Router
      parameterName="tab" {/* Optional: default is "path" */}
      type="ContentBased" {/* Optional: default is "URLBased" */}
      routes={routes}
    />
  );
};

export default AppRoutes;
```

**Types of Behavior**

`Router` can handle links in two ways:

- **URLBased:** This is the default behavior. Every link will change the URL structure in the browser;
- **ContentBased:** This behavior does not change the URL in the browser. Therefore, it is faster to display content on the screen.

You can pass the type of behavior using the `type` property of Routes.

```tsx
/* URL Based */
<Router
  routes={[FeatureOverviewRoute, StateManagementRoute]}
  type="URLBased"
/>

/* Content Based */
<Router
  routes={[FeatureOverviewRoute, StateManagementRoute]}
  type="ContentBased"
/>
```
