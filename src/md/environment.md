# Environment

Create a `.env` file to set up the project's environment and other vars.

**e.g:** if you add `NODE_ENV=development` to your `.env` file. This will set the project env as `development`.

The absence of the `.env` file means that `NODE_ENV=production`.

You can use `getAlemEnvironment()` provided by Além to access the current environment value.
