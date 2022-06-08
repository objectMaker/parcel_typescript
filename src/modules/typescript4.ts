//const新特性
const arr = [123, "123"] as const;
//使用as const之后 arr就不可以修改

//函数里面和const等价的

function showArr(arr: readonly any[]) {
  console.log(arr);
  //如果加了readonly 这个数组就不可以修改 和 const 差不多
//   arr[1] = 22;
}
showArr(arr);
export {};
