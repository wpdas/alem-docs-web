# How to Use

To use the resources of the installed modules you will need to follow the following steps:

## ModulesProvider

Add `ModulesProvider` at the top layer of components that will use the modules.

```tsx
import { ModulesProvider } from "alem";

const SomeComponent = () => {
  return (
    <>
      <ModulesProvider />
      <HomePage>
    </>
  )
}
```

## useModule

In any child component from `<ModulesProvider>`, use `useModule` to make use of the installed modules resource.

**The `useModule` must be used within a `useEffect`!**

```tsx
import { useModule, useEffect } from "alem";

const HomePage = () => {
  useEffect(() => {
    useModule({
      code: `dayjs().format()`,
      onComplete: (data) => console.log(data), // 2024-04-08T14:57:11-03:00
    });
  }, []);

  //...
};
```

**API:**

- **setupCode:** (optional) is used to insert configuration code that must be executed before `code`;
- **code:** code to be executed;
- **onComplete** function that will receive the response from the executed code.
