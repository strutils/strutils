# strutils

A small package to aid with manipulating strings with functions such as:

- `camelCase()`
- `snakeCase()`
- `pascalCase()`
- `title()`
- `isString()`
- and more!

## Usage

```js
import {camelCase, snakeCase, /* and any other utilities you want */ } from "@flzyy/strutils";

camelCase("Hello world"); // helloWorld
snakeCase("Hello World"); // hello_world

// CJS

(async () => {
  const { camelCase, snakeCase } = await import("@flzyy/strutils");

  camelCase("Hello world"); // helloWorld
  snakeCase("Hello World"); // hello_world
})();

// or

import("@flzyy/strutils").then((module) => {
  const { camelCase, snakeCase } = module;

  camelCase("Hello world"); // helloWorld
  snakeCase("Hello World"); // hello_world
});
```
