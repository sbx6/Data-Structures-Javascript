/*
    A "queue" is First in First Out(FIFO) which allows three basic operations like:
        1) Insert into the queue, also known as Enqueue.
        2) Get item from queue, also known as Dequeue.
        3) Get the top item, also known as PEEK.

    We will try to implement those functionalities to see how It's working.
 */

function Queue() {
    this._top = 0;
    this._data = [];
}

// Enqueue can be implemented by using Array.push
Queue.prototype.enqueue = function (data) {
    this._data.push(data);
}

/*
 Dequeue can be implemented by using Array.shift WHICH removes the first element from the array.
 However, you can see that calling Shift at each dequeue is slow as it mutates the array.
 So dequeue operation should do periodic cleanup to save memory.
 */
Queue.prototype.dequeue = function () {
    if(this._top < 0 || this._top >= this._data.length) return null;

    var dequeuedItem = this._data[this._top];
    this._top++;

    // cleanup the array when the garbage is 50 times .... may be another number.
    if(this._top === 50) {
        this._data.splice(0, 50);
        this._top = 0;
    }

    return dequeuedItem;
}

Queue.prototype.peek = function () {
    if(this._top < 0 || this._top >= this._data.length) return null;

    return this._data[this._top];
}

// Let's try it
var queue = new Queue();
console.log("Enqueue 100");
queue.enqueue(100);

console.log("Enqueue 200");
queue.enqueue(200);

console.log("Enqueue 300");
queue.enqueue(300);

console.log(queue.peek());

console.log('Dequeue: ' + queue.dequeue());
console.log('Dequeue: ' + queue.dequeue());
console.log('Dequeue: ' + queue.dequeue());
console.log('Dequeue: ' + queue.dequeue());

console.log(queue.peek());