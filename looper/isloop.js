'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  const checkedNodes = new Set();

  let currNode = linkedlist.head;

  while (currNode !== linkedlist.tail) {
    if (checkedNodes.has(currNode)) return true;
    
    checkedNodes.add(currNode);
    currNode = currNode.next;
  }
  return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop