
/** 
 * Shorten an integer value to a string with at most three digits and appending K, M, B to indicate
 * thousands, millions, or billions, respectively.
 * @param value number to shorten
 * @param locale locale for determining string format. Default locale is used if undefined.
 * @returns shortened string representation of the value
 */
export function shortenNumber(value: number, locale?: string): string {
  if (value === 0) {
    return '0';
  }

  const suffixScale = ['', 'K', 'M', 'B'];

  const digits = Math.trunc(Math.log10(value)) + 1;

  const suffixIdx = Math.trunc((digits - 1) / 3);
  const orderOfMangitude = 3 * suffixIdx;

  let significand = value / (10 ** orderOfMangitude);
  if (significand < 10) {
    // Keep up to one decimal place
    significand = Math.trunc(10 * significand) / 10;
  } else {
    // Truncate all decimal places
    significand = Math.trunc(significand);
  }

  return significand.toLocaleString(locale) + suffixScale[suffixIdx];
}
