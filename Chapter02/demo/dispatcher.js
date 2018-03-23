class Dispatcher {
  constructor() {
    this.listeners = [];
  }
  dispatch(message) {
    this.listeners.forEach(listener => listener(message));
  }
  register(listener) {
    this.listeners.push(listener);
  }
}

const dispatcher = new Dispatcher();

export default dispatcher;
