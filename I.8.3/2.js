Function.prototype.defer = function(ms) {
    return (...args) => {
      setTimeout(this.bind(this, ...args), ms);
    }
};

// check it
function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.