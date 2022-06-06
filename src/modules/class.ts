class Parent {
  public info: { name: string; age: number } = { name: "byf", age: 123 };
  constructor(public name: string) {} //属性初始化简写
  static showName() {
    return 234;
  }
  public getAll() {
    return 123;
  }
}
//属性默认public 都可以修改
//private protect
console.log(new Parent("parent1"));
