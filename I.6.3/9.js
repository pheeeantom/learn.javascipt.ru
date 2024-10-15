function byField(fieldName){
  
    return function (a, b) {
        return a[fieldName] > b[fieldName] ? 1 : -1
    }

}