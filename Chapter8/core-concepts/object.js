// the old way
let anakin = { name: "anakin" };
anakin.name = "darth";

console.log(anakin);

// the Redux way
let anakinRedux = { name: "anakin" };
let darth = Object.assign({}, anakinRedux, { name: "darth" });

console.log(anakinRedux);
console.log(darth);
