//infer可以用到三个地方。函数参数 函数返回值 泛型具体化

//返回参数类型上面

type inferType<T> = T extends (params: infer P) => any ? P : T;
// type functionType = (name: string, age: number) => any;
type functionType = (...args: string[]) => any;
type res = inferType<functionType>;

//返回值在infer

type inferRes<T> = T extends (params: any) => infer P ? P : T;
type returnStringFun = (params: string) => string;
type res2 = inferRes<returnStringFun>;

//泛型具体化
type inferT<T> = T extends Array<infer P> ? P : never;
// type res3 = inferT<string[]>;
type res3 = inferT<number[]>;


