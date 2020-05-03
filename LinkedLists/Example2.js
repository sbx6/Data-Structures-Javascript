/*
    A linked list is a data structure that holds a sequence of linked nodes.
    Each node contains data and a reference, where reference points to its successor node in the Linked List.

    It's obvious from the Example1.js code that if we wanted to create multiple nodes,
    we will have to write the same lines of code over and over again (to iterate over the linked list, find the last element and extend the linked list by adding a new node).
    Instead, we will create a LinkedList class that provides such functions over the linked list.
 */

function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this._length = 0;
    this._head = null;
}

LinkedList.prototype.push = function(data) {
    // Create a new node with Data
    var node = new Node(data);

    // We are inserting the first node in the list
    if(this._head === null) {
        this._head = node;
    } else {
        // Find the last node
        var current = this._head;

        while(current.next) {
            current = current.next;
        }

        current.next = node;
    }

    // Increment the length
    this._length++;
}

LinkedList.prototype.itemAt = function(index) {
    if(index < 0 || index >= this._length) return null;

    var current = this._head;
    var counter = 0;

    while(counter < index) {
        current = current.next;
        counter++;
    }

    return current.data;
}

LinkedList.prototype.remove = function(index) {
    if(index < 0 || index >= this._length) return null;

    var current = this._head;

    if(index === 0) {
        this._head = current.next;
    } else {
        var previous = null;
        var counter = 0;

        while(counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }

        previous.next = current.next;
    }

    this._length--;
    return current.data;
}

LinkedList.prototype.size = function() {
    return this._length;
}

var list = new LinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);

console.log("Length before removal: " + list.size());

// Remove the 3rd element
var removed = list.remove(2);
console.log("removed: " + removed);

// Remove the head node
var removed = list.remove(0);
console.log("removed: " + removed);

console.log("Length after removal: " + list.size());