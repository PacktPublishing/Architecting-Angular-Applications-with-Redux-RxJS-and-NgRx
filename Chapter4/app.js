class NodeClass {
  constructor(left, value) {
    this.left = left;
    this.value = value;
  }
}

const head = new NodeClass(null, 1);
const firstNode = new NodeClass(head, 2);
const secondNode = new NodeClass(firstNode, 3);

console.log('Value', secondNode.left.left.value);

function findHeadRecursive(startNode) {
  if(startNode.left !== null) {
    return findHeadRecursive(startNode.left);
  } else {
    return startNode;
  }
}

function findHeadImperative (startNode) {
  while (startNode.left !== null) {
    startNode = startNode.left;
  }
  return startNode;
}

const found = findHeadRecursive(secondNode);
console.log('found', found);
console.log(found === head);

const foundImp = findHeadImperative(secondNode);
console.log('found', foundImp);
console.log(foundImp === head);

