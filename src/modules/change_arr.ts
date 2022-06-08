//可变元组
const [first, ...rest]: [number, string, ...any[]] = [123, "123", 123];
console.log(rest);

//可变元组的数据类型是可以随便更换位置的


