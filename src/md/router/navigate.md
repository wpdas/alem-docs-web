# Navigate

This feature makes it possible to programmatically navigate to available routes. The URL will not be affected!

It should be used with `Router`.

## Navigate To

Use `navigate.to` to navigate through the routes.

```tsx
import { navigate } from "alem";

export const SomeComponent = () => {
  const onClickHandler = () => {
    navigate.to("profile");
  };

  return <button onClick={onClickHandler}>Go to Profile</button>;
};
```

You can also send params to the route:

```tsx
import { navigate } from "alem";

export const SomeComponent = () => {
  const onClickHandler = () => {
    navigate.to("profile", {
      name: "Wendz",
      age: 33,
      profilePicture: "https://url.com/to/image.jpg",
    });
  };

  return <button onClick={onClickHandler}>Go to Profile</button>;
};
```

Then you can use `useRoutes().routeParams` to get the route params inside the page:

```tsx
import { useRoutes } from "alem";

export const ProfilePage = () => {
  console.log(useRoutes().routeParams);
  // { name: "Wendz", age: 33, profilePicture: "https://url.com/to/image.jpg" }

  //...
};
```

## Navigate Back

Use `navigate.back` to go to the previous route.

```tsx
import { navigate } from "alem";

export const SomeComponent = () => {
  const onClickHandler = () => {
    navigate.back();
  };

  return <button onClick={onClickHandler}>Go Back</button>;
};
```
