/**
 * Used to merge multiple classnames together.
 */
export function css(...classNames: (string | false)[]): string {
  return classNames.filter((c) => typeof c === "string").join(" ");
}

/**
 * Add an uppercase to the first letter of the string.
 */
export function withUppercase(input: string): string {
  return input.substring(0, 1).toUpperCase() + input.substring(1);
}
