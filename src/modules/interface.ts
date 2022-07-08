//实现类
interface classInter {
  name: string;
  showName(): void;
}
//接口之间可以互相继承
interface extendsClassInter extends classInter {
  age: number;
  showAge(): void;
}
class asdef implements classInter {
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  showAge(): void {
    throw new Error("Method not implemented.");
  }
  name: string;
  showName(): void {
    throw new Error("Method not implemented.");
  }
}

//   class abddd implements classDie,fjdsajfdsa 同时实现两个接口中间用逗号隔开

class asddd implements extendsClassInter {
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  showAge(): void {
    throw new Error("Method not implemented.");
  }
  name: string;
  showName(): void {
    throw new Error("Method not implemented.");
  }
}
