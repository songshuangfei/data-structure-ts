function quickSort(data: number[]): number[] {
  let arr = [...data]
  function _qs(arr: number[], l: number, r: number) {
    if (l < r) {
      let i = l, j = r;
      let temp = arr[l];
      while (i < j) {
        while (i < j && arr[j] >= temp)
          j--;
        if (i < j)
          arr[i++] = arr[j];
        while (i < j && arr[i] < temp)
          i++;
        if (i < j)
          arr[j--] = arr[i];
      }
      arr[i] = temp;
      _qs(arr, l, i - 1);
      _qs(arr, i + 1, r);
    }
  }

  _qs(arr, 0, arr.length - 1);
  return arr
}
let ar = [0, 2, 2, 1, 3, 4, 3, 2, 1, 4];
let r = quickSort(ar)
console.log(r)