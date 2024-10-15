function makeCounter() {
    let count = 0;
    function inner() {
      return count++;
    }
    inner.set = function(num) {
      count = num;
    }

    inner.decrease = function() {
      count--;
    }
    return inner;
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  alert( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  alert( counter() ); // 10 (вместо 11)