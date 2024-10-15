function topSalary(salaries) {
    if (!Object.keys(salaries).length) {
        return null;
    }
    let maxSalary = 0;
    let maxWorker;
    for (let [key, value] of Object.entries(salaries)) {
        if (value > maxSalary) {
        maxSalary = value;
        maxWorker = key;
        }
    }
    return maxWorker;
}