## Route Link

This component creates a `<a />` element and is used to allow users to navigate between routes. You must inform the destination path using the `to` property. It also support `className`, `style` and `onClick` properties.

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
