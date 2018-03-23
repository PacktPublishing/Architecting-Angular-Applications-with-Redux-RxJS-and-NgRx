const Rx = require('rxjs/Rx');

let streamWithNumbers$ = Rx.Observable.of(1, 2, 3, 4).max();

// 4
streamWithNumbers$.subscribe(data => console.log(data));

function comparePeople(firstPerson, secondPerson) {
  if (firstPerson.age > secondPerson.age) {
    return 1;
  } else if (firstPerson.age < secondPerson.age) {
    return -1;
  }
  return 0;
}

let streamOfObjects$ = Rx.Observable.of(
  {
    name: "Yoda",
    age: 999
  },
  {
    name: "Chris",
    age: 38
  }
).max(comparePeople);

// { name: 'Yoda', age : 999 }
streamOfObjects$.subscribe(data => console.log(data));
