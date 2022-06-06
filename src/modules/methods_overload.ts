interface person {
    name: string,
    age:number,
}
class Student {
  constructor(public name: string) {}
  static age = 1;
  eat(isHand: true): person;
  eat(isHand: Boolean) {
      const name = 'fdasfdsa'
    if (isHand) {
      console.log("你是用手吃得");
     const res:person = { name:'dfsa',age:213}
      return res;
    } else {
      return;
    }
  }
}
class realStu extends Student {

}
console.log(realStu.age,'age');

