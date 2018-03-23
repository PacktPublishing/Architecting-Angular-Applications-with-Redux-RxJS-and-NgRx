// we imagine we have an element in our DOM looking like this <input id="id" />
const elem = document.getElementById("input");
const eventStream$ = Rx.Observable.fromEvent(elem, "click").map(ev => ev.key);

// outputs the typed key
eventStream$.subscribe(data => console.log(data));
