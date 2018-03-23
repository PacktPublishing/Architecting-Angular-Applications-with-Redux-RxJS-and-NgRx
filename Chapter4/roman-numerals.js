function roman(no) {
  if (no / 10 >= 1) {
    return "X" + roman(no - 10);
  }
  if (no / 5 >= 1) {
    return "V" + roman(no - 5);
  }
  if (no === 0) {
    return "";
  }
  return "I" + roman(no - 1);
}

console.log("roman 3", roman(3));
console.log("roman 6", roman(6));
console.log("roman 8", roman(8));
console.log("roman 10", roman(10));
console.log("roman 12", roman(12));
