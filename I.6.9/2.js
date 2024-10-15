function delay(f, ms) {
    return function() {
        setTimeout(() => f.call(this, ...Array.from(arguments)), ms);
    }
}