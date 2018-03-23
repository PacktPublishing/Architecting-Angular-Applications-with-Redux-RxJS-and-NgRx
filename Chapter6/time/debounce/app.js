import Rx from 'rxjs/Rx';

const elem = document.getElementById("input");

let stream$ = Rx.Observable.fromEvent(elem, "keyup")
  .map(ev => ev.key)
  .filter(key => key !== "Backspace")
  .debounceTime(2000)
  .switchMap(x => {
    return new Rx.Observable.ajax(`https://swapi.co/api/people/${elem.value}`);
  })
  .map(r => r.response);

stream$.subscribe(data => console.log(data));
