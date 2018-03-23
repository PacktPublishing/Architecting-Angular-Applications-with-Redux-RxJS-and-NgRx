function getData() {
  return new Promise(resolve => {
    console.log("this will be printed straight away");
    setTimeout(() => resolve("some data"), 3000);
  });
}

// emits 'some data' after 3 seconds
getData().then(data => console.log("3 seconds later:", data));
