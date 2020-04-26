/*
    A "stack" is Last in First Out(LIFO) which allows three basic operations like:
        1) Insert into the stack, also known as PUSH.
        2) Get the recently added item, also known as POP.
        3) Get the recently added item without removing(popping) it, also known as PEEK.

    We will try to implement those functionalities to see how It's working.
 */

function Stack() {
    this._top = -1;
    this._values = [];
}

Stack.prototype.push = function (data) {
    this._top++;
    this._values[this._top] = data;
}

Stack.prototype.pop = function () {
    if(this._top < 0) return null;

    var topElement = this._values[this._top];
    this._top--;
    this._values.length--;

    return topElement;
}

Stack.prototype.peek = function () {
    if(this._top < 0) return null;

    return this._values[this._top];
}

// Let's try it
var stack = new Stack();

for(let i = 0; i <= 200; i += 20) {
    console.log('Pushing on stack: ' + i);
    stack.push(i);
}

console.log('Peek: ' + stack.peek());
console.log('Pop: '  + stack.pop());
console.log('Pop: '  + stack.pop());
console.log('Pop: '  + stack.pop());
console.log('Peek: ' + stack.peek());