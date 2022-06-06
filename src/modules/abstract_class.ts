//抽象类 不能够实例化 专门用来继承
//抽象类和普通的类的区别 抽象类可以有一个到多个抽象方法
abstract class abstractClass {
  abstract showName(): void;
}

//接口里面的方法都是抽象方法
interface abstractInterface {
  showName(): void;
  showAge(): void;
  showFace(): void;
}
//抽象方法必须要实现1
//通过一个类 把一个接口或一个类里面的抽象方法变成可以不用实现的

abstract class tempAbstractClass implements abstractInterface {
  showName(): void {
    throw new Error("Method not implemented.");
  }
  showAge(): void {
    throw new Error("Method not implemented.");
  }
  abstract showFace(): void;
}

class finalAbstractClass extends tempAbstractClass{
    showFace(): void {
        throw new Error("Method not implemented.");
    }
    
}
