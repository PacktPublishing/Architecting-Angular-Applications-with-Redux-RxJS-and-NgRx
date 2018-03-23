const root = require("./tree");

var selectorLeft = node => node.left;
var selectorRight = node => node.right;

function calcWithSelector(node, selector) {
  if (node === null) {
    return 0;
  } else {
    return 1 + calcWithSelector(selector(node));
  }
}

function calcWidth(node) {
  // as far left and as far right as possible
  // return calc(node.left, 'left') + calc(node.right, 'right');
  return (
    calcWithSelector(node.left, selectorLeft) +
    calcWithSelector(node.right, selectorRight)
  );
}

console.log("width", calcWidth(root));
