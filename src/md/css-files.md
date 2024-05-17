# CSS Files

During compilation, css files are merged and become just one, so be careful not to overwrite certain resources such as classes. Prefer to use `styled-components` as this type of problem is automatically corrected by the compiler.

**css modules** feature is being developed and will be available in the next versions. When this is done, the css files will no longer be merged in one.

Além currently supports Tailwind, you might want to use it instead of pure css.

If you want to create a new project using Tailwind, go to the [Installation](https://alem.dev/?path=installation) section. If you already have a project in progress and want to configure Tailwind on it, update Além in your application to use version 1.2.0 or higher, then go to the [Tailwind Setup](https://alem.dev/?path=tailwind) session.
