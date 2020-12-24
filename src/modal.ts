import {action, computed, observable} from 'mobx';
import {Mixin} from 'ts-mixer';

class A {
  @observable count1: number = 0
}

class B {
  @observable count2: number = 0
}

export class Counter extends Mixin(A, B) {

  @action increase() {
    this.count1 += 1;
    this.count2 += 2;
  }

  @computed get doubleCount1() {
    return this.count1 * 2;
  }

  @computed get doubleCount2() {
    return this.count2 * 2;
  }

}
