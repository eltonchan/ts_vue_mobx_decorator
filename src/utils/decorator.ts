
/* eslint-disable */

const emptyFunc = v => v;

export function alias(key: string | typeof emptyFunc, fn = emptyFunc) :any {
    return function descriptorFunc(target, name: string, descriptor) {
        if (typeof key === 'function') {
            fn = key;
            key = name;
        }
        if (!target.constructor.__alias__) {
            // 将这个隐藏属性定义成 not enumerable，遍历的时候是取不到的。
            Object.defineProperty(target.constructor, '__alias__', {
                value: {},
                enumerable: false,
                writable: true,
                configurable: true
            });
        }
        target.constructor.__alias__[key] = {
            key: name,
            fn
        };
        return descriptor;
    };
}

