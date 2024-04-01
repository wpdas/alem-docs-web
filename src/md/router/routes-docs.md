## Routes

There are two types of route managers provided by Além: `Router` and `SimpleRouter`.

## Router

This component is responsible for managing the content to be displayed on the screen according to the active route. You can use the `createRoute` resource to create application routes and pass them to the Router.

```tsx
import { RouterProvider, Router, createRoute } from "alem";

import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";

const AppRoutes = () => {

  // It must be placed above all resources that will use the Router tools.
  RouterProvider();

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

## Types of Behavior

`Router` can handle links in two ways:

- **URLBased:** This is the default behavior. Every link will reload the page by changing the URL structure in the browser;
- **ContentBased:** This behavior does not change the URL in the browser and does not reload the page. Therefore, it is faster to display content on the screen.

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

## SimpleRouter

This router uses the URL to determine which content to display on the screen. It works similarly to the `URLBased` approach of the `Router`.

```tsx
import { SimpleRouter, createRoute } from "alem";

import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";

const AppRoutes = () => {
  // Creating routes
  const HomePageRoute = createRoute("home", HomePage);
  const ProfilePageRoute = createRoute("profile", ProfilePage);
  const routes = [HomePageRoute, ProfilePageRoute];

  // parameterName => Optional: default is "path"
  return <SimpleRouter routes={routes} parameterName="tab" />;
};

export default AppRoutes;
```

Using `SimpleRouter`, you can use any anchor element `<a></a>` to navigate to another page, for example:

```tsx
<a href="tab=profile">Go To Profile</p>
```
