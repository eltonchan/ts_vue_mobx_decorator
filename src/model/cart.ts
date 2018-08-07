import { observable } from 'mobx';
import { alias } from '@/utils/decorator';
import BaseModel from './base-model';

function toNumber(v: string):number {
    return +v;
}


export default class CartModel extends BaseModel {
    constructor(data: {}) {
        super();
        this.__map(data);
    }

    @alias('user_name')
    @observable
    name:string = '';

    @alias(toNumber)
    @observable
    price:number = 0;
}
