# Config File

Create a `alem.config.json` file at the root of the project with the following content:

```json
{
  // This is the root path of the app.
  // if true: alem-lib.near/widget/Index
  // if false: alem-lib.near/widget/alem-docs (it's going to use the slugified "name")
  "isIndex": true,
  // The mainnet account ID under which the app will be deployed.
  "mainnetAccount": "alem-lib.near",
  // The testnet account ID under which the app will be deployed.
  "testnetAccount": "alem-lib.testnet",
  // App name
  "name": "Alem Docs",
  // App Description
  "description": "Create web3 applications for NEAR BOS with a focus on performance while using concepts that are based on ReactJS.",
  // Social links. Check out NEAR Social Bos docs to get to know the options
  // https://docs.near.org/social/contract
  "linktree": {
    "website": "github.com/wpdas/alem"
  },
  "image": {
    "ipfs_cid": "bafkreicjdgat5xsw7vxbosoyygermawhkfi2by3ovg7c6tumrayn4rimty"
  },
  // Tags of this project
  "tags": ["the", "project", "tags", "here"]
}
```

# Path Aliases

You can optionally configure your application's path aliases so that it works together with tsconfig.json, for example. Assuming your project's `tsconfig.json` file has the following configuration for paths:

```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@app/*": ["src/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
```

You will want to configure the same behavior using the `alem.config.json` file as follows:

```json
{
  // ...
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@app/": "src/",
      "@components/": "src/components/"
    }
  }
}
```

Now in all of your source files, you can import components like this:

```tsx
// Without path aliases
import Hero from "../../../components/Hero";
import Footer from "../../../components/Footer";

// With path aliases
import Hero from "@components/Hero";
import Footer from "@components/Footer";
```

# Options

It is possible to configure some compiler behaviors using the options session.

## Creating Separate File For Each Stateful Component

Configuration to separate stateful components. This causes each stateful component to be generated in a separate file. Use the `alem.config.json` file to set the following configuration:

 ```js
options: {
  ejectStatefulComponents: true
}
```

Result: 

![separate-components](https://github.com/wpdas/alem/assets/3761994/bb7068e1-a586-4928-b1fe-dff38ac0f87e)

## Creating Loader Widget

This feature allows you to create an additional Widget that will serve as a Loader for the main Widget. You can optionally define which component will serve as the Loading display while the main Widget content is loaded. If no file is provided, the default Loading component of Além will be used.

The generated file name will be a mix of the name of the main Widget + "Loader". For example: `IndexLoader`. It is up to you which file to use as the primary means of accessing your application.

- **`createLoaderWidget`: boolean** - Should the Widget Loader be created?
- **`loadingComponentFile`: string (optional)** - Path to the component that will serve as loading while the main Widget content is loaded.
- **`loadingComponentName`: string (optional)** - Exact name of the component being loaded via `loadingComponentFile`. For example, if the loading file has this structure:

```tsx
const SuspenseLoading = () => <p>Loading...</p>;
```

So the name must be **SuspenseLoading**.

**Config Example**

```json
"options": {
    "createLoaderWidget": true,
    "loadingComponentFile": "src/components/SuspenseLoading.tsx",
    "loadingComponentName": "SuspenseLoading"
  }
```

## Keep Route

`keepRoute` is only valid during development, and is automatically disabled in production.

This property defines whether the route should remain the same during refreshes. This is only valid if the `Router` type is `"ContentBased"`.

Default value is `false`.

```json
{
  // ...
  "options": {
    "keepRoute": true
  }
}
```

## Hide Além Bar

You can use `options.hideAlemBar` to prevent the Além top bar from being displayed. This setting applies only in the development environment.

```json
{
  // ...
  "options": {
    "hideAlemBar": true
  }
}
```

# Local Modules Options

All files inside the `src/modules` folder will be compiled as local modules. To filter any file that you do not want to be interpreted as a compiler even though it is in the `src/modules` folder, you must make the following configuration:

Inside the `alem.config.json` file add the list of part of file names you want to ignore.

```json
"modules": {
  "ignoreFileIfIncludes": ["styles"]
}
```

In the example above, any file that has "styles" as part of its name will be ignored and will be compiled as a normal file (script file, stateless component or stateful component).

# Tailwind Setup

Go to the [Tailwind Setup](https://alem.dev/?path=tailwind) session to know more.

## Chaging the Main CSS File

You can change the main css file used by tailwind, to do this, add the following session in the `alem.config.json` file:

```json
"plugins": {
    "tailwind": {
      "css": "src/globals.css"
    }
  }
```

Replace `src/globals.css` with the file you want to use.
