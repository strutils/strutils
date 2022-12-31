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
export declare const isString: (value: any) => boolean;
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
export declare const camelCase: (value: string) => string;
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
export declare const pascalCase: (value: string) => string;
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
export declare const snakeCase: (value: string) => string;
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
export declare const kebabCase: (value: string) => string;
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
export declare const space: (value: string) => string;
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
export declare const title: (value: string) => string;
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
export declare const count: (value: string, pattern: string | RegExp) => number;
