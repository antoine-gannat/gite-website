/**
 * Used to merge multiple classnames together.
 */
export function css(...classNames: (string | false)[]): string {
  return classNames.filter((c) => typeof c === "string").join(" ");
}
