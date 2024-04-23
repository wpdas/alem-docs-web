# Get Alem Environment

Useful feature to get the current environment value. Use `.env` to set the environment.

```sh
# set the project's environment
NODE_ENV=staging
```

```tsx
import { getAlemEnvironment } from "alem";

console.log(getAlemEnvironment()); // staging
```
