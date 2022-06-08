//keyof操作符
class testGeneType {
  constructor(public name: string) {}
  showName() {}
  static age: number = 18;
}
type eee = keyof testGeneType;

// keyof可以对类本生生效  也可以对类的实例生效 keyof会把原型对象上面的key也包含进去 也可以对 interface生效

let ccccc: eee = "showName";
