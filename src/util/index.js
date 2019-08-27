export const changCount = num => {
  let len = num.toString().length;
  return num > 10000 ? num.toString().slice(0, len - 4) + "万" : num;
};

export const chunk = (arr, num) => {
  if (!arr) return [];
  let length = arr.length;
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / num));
  while (index < length) {
    result[resIndex++] = arr.slice(index, (index += num));
  }
  return result;
};
