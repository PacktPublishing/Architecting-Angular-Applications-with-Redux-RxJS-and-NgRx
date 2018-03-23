const root = require("./tree");

function depth(node, val) {
  if (node === null) {
    return val;
  } else {
    let left = depth(node.left, val + 1);
    let right = depth(node.right, val + 1);
    return Math.max(left, right);
  }
}

console.log("depth", depth(root, 0));
