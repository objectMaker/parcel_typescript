type obj1 = {
  name: string;
  age: number;
};
type obj2 = {
  name: string;
  info: object;
  age: number;
  other: object;
};
type obj3 = obj1 & obj2;
type obj4 = obj1 | obj2;

let obj: obj4 = {
  name: "234",
  age: 123,
};

//联合类型交叉 和 对象交叉 反起来的
type baseType = string | number;
type baseType2 = string | number | boolean | undefined;

type baseType3 = baseType & baseType2;
type baseType4 = baseType | baseType2;
