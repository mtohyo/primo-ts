export function merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  let ret: number[] = [];

  let i = 0;
  let j = 0;
  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] < collection_2[j]) {
      ret.push(collection_1[i]);
      i++;
    } else {
      ret.push(collection_2[j]);
      j++;
    }
  }

  if (i < collection_1.length) {
    ret.push(...collection_1.slice(i));
  }
  if (j < collection_2.length) {
    ret.push(...collection_2.slice(j));
  }

  return ret;
}
