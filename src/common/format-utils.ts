import { parse as parseIso8601, toSeconds } from 'iso8601-duration';

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

/**
 * Format an ISO8601 duration into a string of the format HH:MM:SS.
 * Note: Year and months in the ISO8601 duration are not supported
 * @param iso8061Duration the ISO8601 duration to format
 * @return a simple human readable duration
 */
export function formatDuration(iso8061Duration: string): string {
  const parsed = parseIso8601(iso8061Duration);
  if (parsed.years || parsed.months) {
    // Ambigious video duration. Months and years have varying durations
    console.error(`Ambigious video duration: ${iso8061Duration}`);
    return '-:--';
  }

  let totalSeconds = toSeconds(parsed);

  const secondsPerMinute = 60;
  const secondsPerHour = 3600;

  const hours = Math.trunc(totalSeconds / secondsPerHour);
  totalSeconds -= hours * secondsPerHour;
  const minutes = Math.trunc(totalSeconds / secondsPerMinute);
  totalSeconds -= minutes * secondsPerMinute;
  const seconds = Math.round(totalSeconds);

  const hoursString = hours ? `${hours}` : '';
  const minutesString = hours ? minutes.toString().padStart(2, '0') : minutes.toString();
  const secondsString = `${seconds.toString().padStart(2, '0')}`;

  return [hoursString, minutesString, secondsString].filter(Boolean).join(':');
}
