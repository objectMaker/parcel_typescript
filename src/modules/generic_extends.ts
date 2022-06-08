//泛型约束
function showObj<T extends object>(target: T) {
  console.log(target);
}
showObj(/\s/); //证明object只要是引用数据类型就可以

function showObjPropValue<T extends object, K extends keyof T>(target: T) {}

class OperaObj<T extends object, K extends keyof T> {
  constructor(public target: T) {}
  setValue(key: K, value: T[K]) {
    this.target[key] = value;
  }
  getValue(key: K) {
    return this.target[key];
  }
}

let objInstance = new OperaObj({
  name: "stringName",
  age: 123,
  gender: true,
});
objInstance.setValue("name", true);
