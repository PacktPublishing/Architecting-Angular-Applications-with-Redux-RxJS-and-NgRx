import dispatcher from './dispatcher';

function selectIndex(index) {
  store["selectedIndex"] = index;
}

dispatcher.register(message => {
  switch (message.type) {
    case "SELECT_INDEX":
      selectIndex(message.data);
      store.emitChange();
      break;
  }
});

class Store {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    if (!this.listeners["change"]) {
      this.listeners["change"] = [];
    }
    this.listeners["change"].push(listener);
  }

  emitChange() {
    if (this.listeners["change"]) {
      this.listeners["change"].forEach(cb => cb());
    }
  }

  getSelectedItem() {
    return store["selectedIndex"];
  }
}

const store = new Store();

export default store;
