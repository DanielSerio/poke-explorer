/**
 * titlecases a string.
 * @param {string} value - string - The string to be titlecased.
 * @param {boolean} [lowerRemainder=false] - boolean = false
 * @return {string} titlecased string.
 */
export function titlecase(
    value: string,
    lowerRemainder: boolean = false,
): string {
  value = value.trim();
  const first: string = value[0].toUpperCase();
  const rest: string = value.slice(1);
  return `${first}${lowerRemainder ?rest.toLowerCase() : rest}`;
}
