# Route Link

This component creates a `<a />` element and is used to allow users to navigate between routes. You must inform the destination path using the `to` property. It also support `className`, `style` and `onClick` properties.

`RouteLink` acts differently depending on the `Router` configuration. If the Router type is `"URLBased"`, it will simply use the native anchor function to go to the new URL. If the type is `"ContentBased"` it will call the Router's `navigate` function and will display the new page without causing a refresh, however, the URL is not changed.

It should be used with `Router`.

```tsx
import { RouteLink } from "alem";

export const SomeComponent = () => {
  return (
    <RouteLink to="profile">
      <p>Go to Profile</p>
    </RouteLink>
  );
};
```

You can also send params to the route:

```tsx
import { RouteLink } from "alem";

export const SomeComponent = () => {
  return (
    <RouteLink
      to="profile"
      params={{ name: "Wendz", age: 33, profilePicture: "https://url.com/to/image.jpg" }}
    >
      <p>Go to Profile</p>
    </RouteLink>
  );
};
```

Then, if you're using `"ContentBased"` Router, you can use `useRoutes().routeParams` to get the route params inside the page or use `useParams()` if you're using `"URLBased"` Router:

```tsx
import { useRoutes, useParams } from "alem";

export const ProfilePage = () => {
  // If using "ContentBased" Router
  console.log(useRoutes().routeParams);
  // { name: "Wendz", age: 33, profilePicture: "https://url.com/to/image.jpg" }

  // If using "URLBased" Router
  console.log(useParams());
  // { name: "Wendz", age: "33", profilePicture: "https://url.com/to/image.jpg" }

  //...
};
```
