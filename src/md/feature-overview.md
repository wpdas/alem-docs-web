# Feature Overview

Alem is a web3 **JavaScript** / **TypeScript** library to create web3 apps for Near BOS.

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
