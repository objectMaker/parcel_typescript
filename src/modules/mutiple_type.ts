class People {
  eat() {
    console.log("人吃饭");
  }
}
class ChinesePeople extends People {
  eat() {
    console.log("筷子1吃饭");
  }
}
class IndianPeople extends People {
  eat() {
    console.log("用手吃饭");
  }
}

// let people : People = new ChinesePeople()
function outputPeopleEat(people: People) {
  people.eat();
}
//使用People 类型可以接收多种类型
outputPeopleEat(new ChinesePeople());
outputPeopleEat(new IndianPeople());
