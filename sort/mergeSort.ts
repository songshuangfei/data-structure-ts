function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr
  }
  let m = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, m)), mergeSort(arr.slice(m)))
}

function merge(left: number[], right: number[]): number[] {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift())
    }
  }
  while (left.length)
    res.push(left.shift())
  while (right.length)
    res.push(right.shift())
  return res;
}

let res = mergeSort([1, 2, 3, 4, 2, 1, 2, 3, 1, 1, 2, 3, 3, 2, 1, 11, 8, 55, 43, 53, 6, 5, 4, 9, 8, 7, 0])
console.log(res.join(" "))