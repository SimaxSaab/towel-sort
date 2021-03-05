
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let arr = [];
  pushArr(matrix);
  function pushArr(a) {
    for(let i = 0, len = a.length; i < len; i++) {
      if(i % 2 == 0) {
        arr = arr.concat(a[i])
      } else {
        arr = arr.concat(a[i].reverse())
      }
      // if(Array.isArray(a[i])) return pushArr(a[i]);
      // arr.push(a[i]);
    }
  }
  return arr;
}
