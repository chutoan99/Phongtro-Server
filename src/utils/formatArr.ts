export function formatArr<T extends { code: string; value: string }>(
  response: T[],
): T[] {
  const duplicateArr: string[] = [];
  const finalArray: T[] = [];

  response.forEach((item) => {
    const combinedStr = item.code + ',' + item.value;
    if (duplicateArr.indexOf(combinedStr) < 0) {
      duplicateArr.push(combinedStr);
      finalArray.push(item);
    }
  });

  return finalArray;
}
