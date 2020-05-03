/*
    A linked list is a data structure that holds a sequence of linked nodes.
    Each node contains data and a reference, where reference points to its successor node in the Linked List.

    We will try to implement Linked List to see how It's working. We will create three nodes for now.
 */

var firstNode = {
    data: 0, // some data value
    next: null // reference to next node
}

var secondNode = {
    data: 200,
    next: null
}

var thirdNode = {
    data: 300,
    next: null
}

firstNode.next = secondNode;
secondNode.next = thirdNode;

var currentNode = firstNode;

while(currentNode != null) {
    console.log('Node value: ' + currentNode.data);
    currentNode = currentNode.next;
}