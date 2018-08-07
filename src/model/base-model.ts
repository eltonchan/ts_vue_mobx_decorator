export default class BaseModel {
    /**
    * 将后端数据直接映射到当前的示例上
    */
    __map (data: {}): void {
        const alias = (this.constructor as any).__alias__ || {};
        Object.entries(data).forEach(([key, value]) => {
            if (alias[key]) {
                this[alias[key].key] = alias[key].fn(value, data);
            } else {
                this[key] = value;
            }
        });
    }
}
