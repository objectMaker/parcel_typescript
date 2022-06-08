//类型守卫  in typeof instanceof
//自定义守卫
// 字面量相等判断 ==, !=, ===, !==
type Foo = 'foo' | 'bar' | 'unknown';

function test(input: Foo) {
  if (input != 'unknown') {
    // 这里 input 的类型「收紧」为 'foo' | 'bar'
  } else {
    // 这里 input 的类型「收紧」为 'unknown'
  }
}
// 上述的「收紧」作用所带来的便利性，你很可能已经在开发中受惠过很多次了，只是不知道该怎么称呼它。值得注意的是，一旦上述条件不是直接通过字面量书写，而是通过一个条件函数来替代时，类型守卫便失效了，如下面的 isString 函数：

function isString (input: any) {
  return typeof input === 'string';
}

function foo (input: string | number) {
  if (isString(input)) {
    // 这里 input 的类型没有「收紧」，仍为 string | number
  } else {
    // 这里也一样
  }
}
// 这是因为 TS 只能推断出 isString 是一个返回布尔值的函数，而并不知道这个布尔值的具体含义。然而在日常的开发中，出于优化代码结构等目的，上述的「替换」情形是非常常见的，这时为了继续获得类型守卫的推断能力，就要用到自定义守卫。

// 自定义守卫
// 自定义守卫通过 {形参} is {类型} 的语法结构，来给上述返回布尔值的条件函数赋予类型守卫的能力。例如上面的 isString 函数可以被重写为：

function betterIsString (input: any): input is string { // 返回类型改为了 `input is string`
  return typeof input === 'string';
}