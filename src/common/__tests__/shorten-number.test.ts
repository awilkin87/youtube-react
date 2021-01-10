import { shortenNumber } from '../format-utils';

describe('Shorten Number', () => {
    test('Zero', () => {
      expect(shortenNumber(0)).toBe('0');
    });

    test('Hundreds - One integer digit', () => {
      expect(shortenNumber(9)).toBe('9');
    });

    test('Hundreds - Two integer digits', () => {
      expect(shortenNumber(52)).toBe('52');
    });

    test('Hundreds - Three integer digits', () => {
      expect(shortenNumber(450)).toBe('450');
    });

    test('Exactly 1,000', () => {
      expect(shortenNumber(1000)).toBe('1K');
    });

    test('Thousands - One integer and no fractional digits', () => {
      expect(shortenNumber(2087)).toBe('2K');
    });

    test('Thousands - One integer and one fractional digit', () => {
      expect(shortenNumber(1981)).toBe('1.9K');
    });

    test('Exactly 10,000', () => {
      expect(shortenNumber(10000)).toBe('10K');
    });

    test('Thousand - Two integer digits and no fractional digits', () => {
      expect(shortenNumber(82543)).toBe('82K');
    });

    test('Exactly 100,000', () => {
      expect(shortenNumber(100000)).toBe('100K');
    });

    test('Thousand - Three integer digits and no fractional digits', () => {
      expect(shortenNumber(825631)).toBe('825K');
    });


    test('Exactly 1,000,000', () => {
      expect(shortenNumber(1000000)).toBe('1M');
    });

    test('Millions - One integer and no fractional digits', () => {
      expect(shortenNumber(2087000)).toBe('2M');
    });

    test('Millions - One integer and one fractional digit', () => {
      expect(shortenNumber(1981000)).toBe('1.9M');
    });

    test('Exactly 10,000,000', () => {
      expect(shortenNumber(10000000)).toBe('10M');
    });

    test('Millions - Two integer digits and no fractional digits', () => {
      expect(shortenNumber(82543123)).toBe('82M');
    });

    test('Exactly 100,000,000', () => {
      expect(shortenNumber(100000000)).toBe('100M');
    });

    test('Millions - Three integer digits and no fractional digits', () => {
      expect(shortenNumber(825631456)).toBe('825M');
    });


    test('Exactly 1,000,000,000', () => {
      expect(shortenNumber(1000000000)).toBe('1B');
    });

    test('Billions - One integer and no fractional digits', () => {
      expect(shortenNumber(2087068500)).toBe('2B');
    });

    test('Billions - One integer and one fractional digit', () => {
      expect(shortenNumber(1981876000)).toBe('1.9B');
    });

    test('Exactly 10,000,000,000', () => {
      expect(shortenNumber(10000000000)).toBe('10B');
    });

    test('Billions - Two integer digits and no fractional digits', () => {
      expect(shortenNumber(82543123756)).toBe('82B');
    });

    test('Exactly 100,000,000,000', () => {
      expect(shortenNumber(100000000000)).toBe('100B');
    });

    test('Billions - Three integer digits and no fractional digits', () => {
      expect(shortenNumber(825631456467)).toBe('825B');
    });
});
