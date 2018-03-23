// the old way
let anakin = { name: "anakin" };
console.log("anakin", anakin);

anakin["age"] = "17";
console.log("anakin with age", anakin);

// the Redux way
let anakinImmutable = { name: "anakin" };
let anakinImmutableWithAge = Object.assign({}, anakinImmutable, { age: 17 });

console.log("anakin redux", anakinImmutable);
console.log("anakin redux with age", anakinImmutableWithAge);
