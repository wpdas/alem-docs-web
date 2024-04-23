# Feature Overview

Alem is a web3 **JavaScript** / **TypeScript** library to create web3 apps for Near BOS. You can create your applications in a similar way to React. All components and other resources will be transformed into a file understandable by Near VM.

Alem makes it painless to create interactive UIs. Design simple views for each state in your application. Declarative views make your code more predictable, simpler to understand, and easier to debug.

Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript, you can easily pass rich data through your app.

**Tip:** Use function as much as possible. Even if it is an object to be shared, use a function to return the object. E.g.:

```ts
export const utils = () => ({
  contractId: "contract-foo.near",
  getItems: () => Storage.get("items"),
  // ...
});
```

## Component

You can create any component file using **JavaScript** or **TypeScript**. The entrypoint must be an App component like so:

```tsx
const App = () => {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};

export default App;
```

## Component Props

Passing properties to a component is very simple. Just use react's defaults:

```tsx
export const ComponentA = ({ name }: { name: string }) => {
  return <p>{name}</p>;
};

export const ComponentB = () => {
  return <ComponentA name="Wendz" />;
};

export const ComponentC = (componentProps: { name: string }) => {
  return <p>{componentProps.name}</p>;
};
```

# Good to Know

## Stateful & Stateless Components

Stateful components are interpreted as Widgets by Além, while Stateless components are seen as auxiliary resources injected into the Widgets that import them.

Using any of these features will cause a component to be considered Stateful:

```ts
const [foo, setFoo] = useState(bar);
useEffect(() => {}, []);
useMemo(() => {}, []);
State.init({});
```

Example of stateless and stateful components:

```tsx
// Stateless component
const Hero = ({ label }: { label: string }) => {
  return <p>Hero Bar - {label}</p>;
};
```

```tsx
// Stateful component
import { useState, useEffect } from "alem";

const Footer = () => {
  const [footerLabel] = useState("This is footer");

  return <p>{footerLabel}</p>;
};
```

Now, let's implement the component that is going to import both components above:

```tsx
// Stateful component
import { State, state } from "alem";
import Hero from "./Hero";
import Footer from "./Footer";

const MyStatefulComponent = () => {
  State.init({ version: 1 }); // Any random information

  return (
    <>
      <p>Version: {state.version}</p>
      <Hero label={state.version} />
      <Footer />
    </>
  );
};
```

## TSX & JSX

A .tsx/.jsx file can have only one stateful component. You can create other internal components within the component's function.

✅ **- Right**

```tsx
import { State, state } from "alem";

const MyStatefulComponent = () => {
  State.init({ name: "Wendz" });

  return <p>oi {state.name}</p>;
};

export default MyStatefulComponent;
```

❌ **- Wrong**

```tsx
import { State, state } from "alem";

const MyStatefulComponent = () => {
  State.init({ name: "Wendz" });

  return <p>oi {state.name}</p>;
};

export default MyStatefulComponent;

// Second stateful component at the same file. This is going to fail!
export const OtherStatefulComponent = () => {
  State.init({ age: 22 });

  return <p>Age: {state.age}</p>;
};
```

Stateless components can have as many components as you want in one file.

✅ **- Right**

```tsx
// Group of stateless components
export const ComponentA = (componentProps) => {
  // ...
  return <p>oi {componentProps.name}</p>;
};

export const ComponentB = (componentProps) => {
  // ...
  return <p>Hola {componentProps.name}</p>;
};

export const ComponentC = (componentProps) => {
  // ...
  return (
    <>
      <p>Hi {componentProps.name}</p>
      <ComponentB />
      <ComponentA />
    </>
  );
};
```

## Preparing the Resources

Prefer to create one file per resource, as importing a resource from a `.ts/.js` file will inject the entire contents of that file into the Widget. The same goes for stateless components.

## Comments

This may be obvious but use the correct form of comments during development for **CSS** and **styled-components**.

```css
/* css file */

.my-class {
  /* Correct */
  display: flex;
  // Incorrect
  position: relative;
}
```

```tsx
// tsx or jsx file using styled components
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  /* Correct */
  flex-direction: row;
  // Incorrect
  font-family: "Wix Madefor Display", sans-serif;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
```

## Async / Await

The use of `async/await` is supported and experimental. It should be used only in the main scope of the component. It will make changes to the state of the main Widget. Do not use in hooks. Below is an example of usage:

```tsx
import { fetch, useEffect } from "alem";

const SomeComponent = () => {
  const fetchItems = async () => {
    const items = await fetch("https://api.com/items");
  };

  useEffect(() => {
    fetchItems();
  }, []);

  console.log(items);

  return <></>;
};
```

# Limitations

## Import \*

The use of the `import * foo from './foo'` signature is not supported. This is intentional, as the idea is to import only the necessary fragments into the Widget.

## Internal Duplicate Items

Além fixes duplicate item names being exported by the application automatically, but you should avoid importing a resource that has the same name as any variable within your component. E.g.:

✅ **- Right**

```ts
// aContract.ts
export const contractId = "contract-id-a.near";
// ...
```

```ts
// HomePage.tsx
import { contractId } from './contractId';

const HomePage = () => {
  const contractId_B = "contract-id-b.near"

  return (
    // ...
  )
}

export default HomePage;
```

❌ **- Wrong**

```ts
// aContract.ts
export const contractId = "contract-id-a.near";
export const contractId_C = "contract-id-c.near";
// ...
```

```ts
// HomePage.tsx
import { contractId_C } from './contractId';

const HomePage = () => {
  // ERROR: this will break the application because the "contractId" from aContract.ts is also going to be
  // injected to the final file after compilation.
  const contractId = "contract-id-b.near";

  return (
    // ...
  )
}

export default HomePage;
```

## Sub-Components & Components

At the moment, if you have a component with sub-components, and you also have another component being imported that uses the same name as the sub-component, a compilation failure may occur as currently the compiler automatically renames duplicate component names.

For example:

❌ **- Avoid it**

```tsx
// Exporting components
export const Content = () => <p>A</p>;
```

```tsx
// Importing components + Using Radix components
import { Content } from "./Foo";

const MyComponent = () => {
  return (
    <>
      {/* Radix Select component */}
      <Select.Content>
        <Content />
      </Select.Content>
    </>
  );
};
```

If by chance, in another file there is another component with the name `Content`, the `Content` being imported will have its name changed automatically and this will also affect `Select.Content`, thus generating an error.

To avoid this problem, if a sub-component is used in the same file, change the component name:

✅ **- Right**

```tsx
// Exporting components
export const ContentFoo = () => <p>A</p>;
```

```tsx
// Importing components + Using Radix components
import { ContentFoo } from "./Foo";

const MyComponent = () => {
  return (
    <>
      {/* Radix Select component */}
      <Select.Content>
        <ContentFoo />
      </Select.Content>
    </>
  );
};
```

This way, if `ContentFoo` has its name changed by the compiler, the sub-component (Select -> **Content**) `Select.Content` will not be changed.
