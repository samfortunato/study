const { LinkedList } = require('./linked-list');

/** @param {LinkedList} linkedList */
function mergeSortLinkedList(linkedList) {
  if (linkedList.size() <= 1) return linkedList;

  const [leftHalf, rightHalf] = split(linkedList);
  const leftSorted = mergeSortLinkedList(leftHalf);
  const rightSorted = mergeSortLinkedList(rightHalf);

  return merge(leftSorted, rightSorted);

  function split(linkedList) {
    let splitList = [];

    if (!linkedList || !linkedList.head) {
      splitList = [linkedList, null];
    } else {
      const midpoint = Math.floor(linkedList.size() / 2) - 1;
      const middleNode = linkedList.getNodeAtIndex(midpoint);

      const leftHalf = linkedList;
      const rightHalf = new LinkedList();
      rightHalf.head = middleNode.next;
      middleNode.next = null;

      splitList = [leftHalf, rightHalf];
    }

    return splitList;
  }

  function merge(leftSorted, rightSorted) {
    const merged = [];
    let i = 0;
    let j = 0;

    if (leftSorted.getNodeAtIndex(i).data < rightSorted.getNodeAtIndex(j).data) {
      merged.push(leftSorted.getNodeAtIndex(i));
      i++;
    } else {
      merged.push(rightSorted.getNodeAtIndex(j));
      j++;
    }

    while (i < leftSorted.size()) {
      merged.push(leftSorted.getNodeAtIndex(i));
      i++;
    }

    while (j < rightSorted.size()) {
      merged.push(rightSorted.getNodeAtIndex(j));
      j++;
    }

    return merged;
  }
}
