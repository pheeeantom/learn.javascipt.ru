function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, -1).getDate() + 1; 
}