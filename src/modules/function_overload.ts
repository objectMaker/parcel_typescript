//函数重载，主要包含
interface person {
  name: string;
  age: number;
}
function getInfoByParams(isArray: true, testA: string): person; //重载签名
function getInfoByParams(isArray: false, testB: string): person[]; //重载签名
//重载签名要写在实现签名之前，重载签名可以使得结果可以根据传参类型推导出结果
// function getInfoByParams(isArray: Boolean): person | person[] {
function getInfoByParams(isArray: any = true, testC: string): any {
  //可以给默认值
  //推荐使用any，提升兼容性和可扩展性
  //实现签名
  //根据不同的参数，返回不同的数据类型
  console.log(testC, "testC");

  const person1: person = { name: "ybf", age: 15 };
  if (isArray) {
    return person1;
  } else {
    return [person1];
  }
}

// const res = <person>getInfoByParams(true); //这是一种类型断言
// const res = getInfoByParams(true) as person; //这是一种类型断言

//res是person或者person[]类型 没办法调用方法

//函数签名 重载签名 和实现签名
const ee = getInfoByParams(true, "123");
