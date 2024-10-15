function throttle(f, ms) {
    let timerId;
    let last;
    return function() {
        if (!last) {
            f.apply(this, arguments);
            timerId = setTimeout(function foo() {
                timerId = setTimeout(foo, ms);
                if (last) f.apply(last[0], last[1]);
            }, ms);
        }
        last = [this, arguments];
    }
}