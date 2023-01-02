/**
 * Returns whether or not a value is a string.
 *
 * @example
 * isString(4);
 * // returns false.
 *
 * @function
 * @param {any} value - Value to check.
 * @returns {boolean}
 */
export const isString = (value: any): boolean => {
  return typeof value === "string";
};

/**
 * Returns a camelCased version of a string separated by dash/dot/underscore/space.
 *
 * @example
 * camelCase("hello_world")
 * // will result in helloWorld
 *
 * @function
 * @param {string} value - Value to convert.
 * @returns {string}
 */
export const camelCase = (value: string): string => {
  return value.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    },
  ).replace(/\s+/g, "").replace(/[^a-zA-Z0-9]+/g, "");
};

/**
 * Returns a PascalCased version of a string separated by dash/dot/underscore/space.
 *
 * @example
 * pascalCase("hello_world")
 * // will result in HelloWorld
 *
 * @function
 * @param {string} value - Value to convert.
 * @returns {string}
 */
export const pascalCase = (value: string): string => {
  return value.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (word) => word.toUpperCase(),
  ).replace(/\s+/g, "").replace(/[^a-zA-Z0-9]+/g, "");
};

/**
 * Returns a snake_cased version of a string separated by dash/dot/underscore/space.
 *
 * @example
 * snakeCase("hello World")
 * // will result in hello_world
 *
 * @function
 * @param {string} value - Value to convert.
 * @returns {string}
 */
export const snakeCase = (value: string): string => {
  return value.replace(/[^a-zA-Z0-9]+/g, "_").replace(/\s+/g, "").toLowerCase();
};

/**
 * Returns a kebab-cased version of a string separated by dash/dot/underscore/space.
 *
 * @example
 * kebabCase("Hello World")
 * // will result in hello-world
 *
 * @function
 * @param {string} value - Value to convert.
 * @returns {string}
 */
export const kebabCase = (value: string): string => {
  return value.replace(/[^a-zA-Z0-9]+/g, "-").replace(/\s+/g, "").toLowerCase();
};

/**
 * Replaces any non numeric, or non alphabetic character with a space.
 *
 * @example
 * space("Hello_world")
 * // will result in "Hello world"
 *
 * @function
 * @param {string} value - Value to convert.
 * @returns {string}
 */
export const space = (value: string): string => {
  return value.replace(/[^a-zA-Z0-9]+/g, " ");
};

/**
 * Capitalizes every first character of a word.
 *
 * @example
 * title("hello world")
 * // will result in "Hello world"
 *
 * @function
 * @param {string} value - Value to convert.
 * @returns {string}
 */
export const title = (value: string): string => {
  return value.replace(
    /\w\S*/g,
    (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase(),
  );
};

/**
 * Finds the amount of times a Regex Pattern or a string.
 *
 * @example
 * count("hello world", "o")
 * // will result in 2
 *
 * @function
 * @param {string} value - Value to search.
 * @param {string | RegExp} pattern - The regex or string to count the amount of.
 * @returns {number}
 */
export const count = (
  value: string,
  pattern: string | RegExp,
): number => {
  return value.split(pattern).length - 1;
};

/**
 * Converts a string to a certain encoding.
 *
 * @example
 * convert("hello world", "utf-8", "hex")
 * // will result in 68656c6c6f20776f726c64
 *
 * @function
 * @param {string} value - Value to convert.
 * @param {Object} [options=] - Optional options.
 * @param {BufferEncoding} [options.from=] - Buffer encoding to convert **from**.
 * @param {string} [options.to=] - Buffer encoding to convert **to**.
 * @returns {string}
 */
export const convert = (
  value: string,
  options?: { from?: BufferEncoding; to?: BufferEncoding },
): string => {
  return Buffer.from(value, options?.from).toString(options?.to);
};
