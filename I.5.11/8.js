function formatDate(date) {
    let res;
    let now = new Date();
    if (now - date <= 1000) {
        res = 'прямо сейчас';
    }
    else if (now - date <= 60 * 1000) {
        res = Math.round((now - date) / 1000) + ' сек. назад';
    }
    else if (now - date <= 60 * 60 * 1000) {
        res = Math.round((now - date) / (60 * 1000)) + ' мин. назад';
    }
    else {
        res = (date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate()) + '.' +
            ((date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' +
            date.getFullYear().toString().slice(2) + ' ' +
            date.getHours() + ':' + date.getMinutes();
    }
    return res;
}