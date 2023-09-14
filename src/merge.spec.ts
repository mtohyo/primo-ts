import { merge } from './merge';

describe('testing merge()', () => {
  test('array size are equal', () => {
    const collection_1 = [1, 2, 3, 4];
    const collection_2 = [2, 2, 3, 9];
    const expected = [1, 2, 2, 2, 3, 3, 4, 9];
    expect(merge(collection_1, collection_2)).toStrictEqual(expected);
  });

  test('array size are not equal', () => {
    const collection_1 = [1, 2, 3, 4, 10, 11];
    const collection_2 = [2, 2, 3, 9];
    const expected = [1, 2, 2, 2, 3, 3, 4, 9, 10, 11];
    expect(merge(collection_1, collection_2)).toStrictEqual(expected);
  });

  test('1st array is empty', () => {
    const collection_1 = [];
    const collection_2 = [2, 2, 3];
    const expected = collection_2;
    expect(merge(collection_1, collection_2)).toStrictEqual(expected);
  });

  test('2nd array is empty', () => {
    const collection_1 = [1, 2, 3, 4];
    const collection_2 = [];
    const expected = collection_1;
    expect(merge(collection_1, collection_2)).toStrictEqual(expected);
  });

  test('both arrays are empty', () => {
    const collection_1 = [];
    const collection_2 = [];
    const expected = [];
    expect(merge(collection_1, collection_2)).toStrictEqual(expected);
  });
});
