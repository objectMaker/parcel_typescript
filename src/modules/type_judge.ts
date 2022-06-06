//一个类继承于另一个类 两者实例可以互相断言

//还有一种就是一个类和另一个类没有关系 如果可以断言的话 两者的public属性要相同或者子集关系

//类型断言有一种情况是接口
interface stu11 {
  name: string;
  age: number;
}

class Student11 implements stu {
  constructor(public name: string, public age: number) {}
  showInfo() {
    console.log(this.name, this.age);
  }
}

//类型断言还有一种情况是type

type stu = {
  name: string;
  age: number;
};

class Student22 implements stu {
  constructor(public name: string, public age: number) {}
  showInfo() {
    console.log(this.name, this.age);
  }
}

//接口和type 都可以用implements关键字实现