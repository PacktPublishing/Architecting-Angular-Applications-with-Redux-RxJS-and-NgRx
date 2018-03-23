function* loop() {
  let i = 0;
  while(true) {
    yield i++;
  }
}

let gen = loop();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0


function* getInput(a) {
  yield a;
  yield a + 1;
}

console.log('input');
let genInput = getInput(3);
console.log(genInput.next().value); // 0
console.log(genInput.next().value); // 0

function* sub() {
  setTimeout(function*() {
    yield 11;
  }, 3000);
}

function* main() {
  var nodata = 'no data'
  yield nodata;
  yield* sub();
}

let genData = main();
console.log(genData.next().value); // 0
console.log(genData.next().value); // 0
