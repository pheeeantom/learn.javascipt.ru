function spy(func) {
    function f() {
        f.calls.push(Array.from(arguments));
        return func.call(this, ...arguments);
    }
    f.calls = [];
    return f;
}