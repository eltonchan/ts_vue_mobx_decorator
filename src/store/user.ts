import { action, computed, observable } from 'mobx';

export default class UserModel {
    @observable age: number = 10;
    @observable users: Array<string> = [];
    @computed get computedAge(): number {
      return this.age + 1;
    }
    @action.bound setAge() {
      this.age += 1;
    }
}
