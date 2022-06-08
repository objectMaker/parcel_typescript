function testGenericType<T>(params: T) {
  return params;
}
let a :Object ='dfaas'
let c:object = {};
//类型object和Object的区别 object表示是一个普通对象 
//Object表示是Object实例类型 ，所以Object类型上面有很多种方法
let b:string = '12321';
let e:String = '123';

testGenericType("213");
