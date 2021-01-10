import { formatDuration } from '../format-utils';

describe('Format ISO8601 Duration', () => {
  test('4 seconds ', () => {
    expect(formatDuration('PT4S')).toBe('0:04');
  });

  test('13 seconds', () => {
    expect(formatDuration('PT13S')).toBe('0:13');
  });

  test('1 minute', () => {
    expect(formatDuration('PT1M')).toBe('1:00');
  });

  test('1:36.454 minutes', () => {
    expect(formatDuration('PT1M36.454S')).toBe('1:36');
  });

  test('1:31 minutes', () => {
    expect(formatDuration('PT1M31S')).toBe('1:31');
  });

  test('10:10 minutes', () => {
    expect(formatDuration('PT10M10S')).toBe('10:10');
  });

  test('03:06:15 hours', () => {
    expect(formatDuration('PT3H6M15S')).toBe('3:06:15');
  });

  test('13:30:47', () => {
    expect(formatDuration('PT13H30M47S')).toBe('13:30:47');
  });

  test('2 days and 25:05 minutes', () => {
    expect(formatDuration('P2DT25M5S')).toBe('48:25:05');
  });
});
