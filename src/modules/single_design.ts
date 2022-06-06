class SelfStorage {
  //单例模式
  static instance: SelfStorage;
  static getInstance() {
    //还有一个懒汉和饿汉模式
    if (!this.instance) {
      this.instance = new SelfStorage();
      return this.instance;
    } else {
      return this.instance;
    }
  }
  private constructor() {
    //加上private操作符，这个类就不可以new出来了 这样才是单例模式
  }
  setItem(key: string, value: string) {
    //
    sessionStorage.setItem(key, value);
  }
  getItem(key: string) {
    return sessionStorage.getItem(key);
  }
}

const aaa = SelfStorage.getInstance();
