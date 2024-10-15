function getDateAgo(date, days) {
    let newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() - days);
    return newDate.getDate();
}