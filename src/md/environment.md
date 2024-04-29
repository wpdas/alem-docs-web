# Environment

Create a `.env` file to set up the project's environment and other vars.

**e.g:** if you add `NODE_ENV=development` to your `.env` file. This will set the project env as `development`.

The absence of the `.env` file means that `NODE_ENV=production`.

You can use `getAlemEnvironment()` provided by Além to access the current environment value.

# Available Além Env Vars

```sh
# Além environment (default is production)
NODE_ENV=development
```

```sh
# Should final file be minified? (default is true)
MINIFY=true
```

```sh
# Save file schemas? (default is false). This is useful to evaluate how files are being handled.
SAVE_SCHEMAS=false
```

```sh
# Show how long it's taking to compile files. (default is false). This is util during Além enhancements / new implementations or bug fixes
SHOW_EXECUTION_TIME=false
```
