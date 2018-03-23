class Store {
  getState() {
    return {
      jedis: [
        { name: "Yoda", id: 1 },
        { name: "Palpatine", id: 2 },
        { name: "Darth Vader", id: 3 }
      ],
      selectedJedi: {
        name: "Yoda",
        id: 1
      }
    };
  }
}

const store = new Store();

console.log(store.getState());

/*
{
  jedis: [
    { name: 'Yoda', id: 1 },
    { name: 'Palpatine', id: 2 },
    { name: 'Darth Vader', id: 3 }
  ],
  selectedJedi: {
    name: 'Yoda', id: 1
  }
}
*/
