# Navigate

This feature makes it possible to programmatically navigate to available routes. The URL will not be affected!

It should be used with `Router`.

```tsx
import { navigate } from "alem";

export const SomeComponent = () => {
  const onClickHandler = () => {
    navigate("profile");
  };

  return <button onClick={onClickHandler}>Go to Profile</button>;
};
```
