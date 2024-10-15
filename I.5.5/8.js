function unique(arr) {
    let hash = {};
    for (let item of arr) {
        hash[item] = true;
    }
    return Object.keys(hash);
}