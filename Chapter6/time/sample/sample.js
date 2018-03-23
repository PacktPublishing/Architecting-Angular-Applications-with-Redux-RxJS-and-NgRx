let elem = document.getElementById('btn');
let stream$ = Rx.Observable
.fromEvent(elem, 'click')
.sampleTime(8000);

stream$.subscribe(data => console.log('mouse clicks',data));
