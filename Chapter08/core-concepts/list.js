// old way
let list = [1, 2, 3];
list.push(4);

// redux way
let immutablelist = [1, 2, 3];
let newList = [...immutablelist, 4];

console.log("new list", newList);
