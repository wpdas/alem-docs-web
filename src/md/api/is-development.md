# isDevelopment

Useful feature to know if the environment is development or production. Use `.env` to set the environment.

```sh
# set the project's environment
NODE_ENV=development
```

```tsx
import { isDevelopment } from "alem";

const answer = isDevelopment ? "Yep" : "Nope";
```

You may want to use `getAlemEnvironment()` as it returns the value for the current environment.
