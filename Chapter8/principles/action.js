// the action
let action = {
  // expresses intent, loading jedis
  type: "LOAD_JEDIS",
  payload: [
    { name: "Yoda", id: 1 },
    { name: "Palpatine", id: 2 },
    { name: "Darth Vader", id: 3 }
  ]
};
