export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

export function generateStyles(controlMap: any) {
    return {
        top: controlMap.position.top + '%',
        bottom: controlMap.position.bottom + '%',
        left: controlMap.position.left + '%',
        right: controlMap.position.right + '%',
        width: controlMap.size.diameter + 'vw',
        height: controlMap.size.diameter + 'vw',
        lineHeight: controlMap.size.diameter + 'vw',
    }
}

export function debounce(time: number) {
    return function (target: any, key: any, desc: any) {
        var fn = desc.value, lastStart = 0;
        desc.value = function () {
            var now = Date.now();
            if (now - lastStart >= time) {
                lastStart = now;
                return fn.apply(this, arguments);
            }
        };
    };
}