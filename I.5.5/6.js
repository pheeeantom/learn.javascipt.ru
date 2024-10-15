function Calculator() {
    this.ops = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function(str) {
        let items = str.split(" ");
        return this.ops[items[1]](+items[0], +items[2]);
    }

    this.addMethod = function(op, func) {
        this.ops[op] = func;
    }
}