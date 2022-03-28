(function (global, factory) {
    typeof exports === 'object' &&
    typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' &&
    define.amd ? define(['exports'], factory) : (global = global || self, factory(global.CS = {}));
}(this, (function (exports) {
        'use strict';
        const version = '1.0.0'
        const init = () => {
            console.log('initializing CS Pack')
        }
        exports.init = init;
        exports.version = version;

    })
));
