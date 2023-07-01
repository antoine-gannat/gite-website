/**
 * Add an uppercase to the first letter of the string.
 */
export function withUppercase(input: string): string {
  return input.substring(0, 1).toUpperCase() + input.substring(1);
}
