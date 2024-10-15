function debounce(f, ms) {
    let timerId;
    return function() {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
        f.apply(this, arguments);
        }, ms);
    }
}