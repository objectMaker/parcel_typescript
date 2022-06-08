//一个函数的类型
type funA = (...args: any) => any;

const funA: funA = function (...args: any) {
  return 123;
};

//也可以使用接口定义
interface funB {
  (...args: any): any;
}
const funB: funB = function (...args: any) {
  return "123";
};

//一个类的类型
class testTypeClass {
  constructor(public name: string, public age: number) {}
}
type classType<T = any> = new (...args: any) => T; //通用类的类型

let tempClass: classType = testTypeClass; //这里类的类型就是前面的classType类型

//泛型工厂函数
//工厂函数就是调用一个函数获取到一个生成对象实例的函数
//如果这样传入class 就不可以使用Instance里面的属性和方法
// function getTestTypeInstance(targetClass:classType){
//     return new targetClass('name',123)
// }
// getTestTypeInstance(testTypeClass)

//解决方法 使用泛型。自己传入
function getTestTypeInstance<T>(targetClass: classType<T>) {
  return new targetClass("name", 123);
}
getTestTypeInstance(testTypeClass);
//这样就有了语法提示了
