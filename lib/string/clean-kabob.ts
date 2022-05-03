import {titlecase} from './titlecase';

/**
 * It takes a string:
 *  trims it,
 *  splits it on dashes,
 *  titlecases each word,
 *  and joins it back together with spaces
 * @param {string} kabobbed - string
 * @param {boolean} lowerRemainder - boolean
 * @return {string} clean title string
 */
export function cleanKabob(
    kabobbed: string,
    lowerRemainder: boolean = false,
): string {
  return kabobbed
      .trim()
      .split(/\-/g)
      .map((v: string) => titlecase(v, lowerRemainder))
      .join(' ');
}
