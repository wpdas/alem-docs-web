# Installing NPM Modules

The Além Compiler supports the use of external NPM modules through the use of CDN services. To load any external module, create a file `alem.modules.json` in the project root. Example:

```json
{
  "javascript-time-ago": "https://unpkg.com/javascript-time-ago@2.5.9/bundle/javascript-time-ago.js",
  "dayjs": "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.10/dayjs.min.js"
}
```

The `key` of each module directly receives its URL to its javascript file.

As there are thousands of modules available, it is not possible to guarantee that all of them will work properly. If you want to give positive or negative feedback regarding the operation of a module, use our Telegram channel, you can help other people.

# NPM Module Sources

Here are some sites that serve module sources:

- **CDN Js:** https://cdnjs.com/libraries
- **UNPKG:** https://www.unpkg.com/
