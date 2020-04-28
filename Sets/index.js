/*
    A set is an unordered collection of related members in which no member occurs more than once.
    The most common set operations are given below:
        1) Union - This is wherein a new set is constructed by combining the members of one set with the members of another set.
        2) Intersection - This is wherein a new set is constructed by adding all the members of one set that also exist in a second set.
        3) Difference - This is wherein a new set is constructed by adding all the members of one set except those that also exist in a second set.

    We will try to implement those functionalities to see how It's working.
 */

function Set() {
    this.set = {};
    this.size = 0;
}

Set.prototype.add = function (data) {
    if(!(this.set.hasOwnProperty(data))) {
        this.set[data] = 'true';
        this.size++;
    }
}

Set.prototype.remove = function(data) {
    if(this.set.hasOwnProperty(data)) {
        delete this.set[data];
        this.size--;
    }
}

Set.prototype.sizeOfSet = function () {
    return this.size;
}


// Let's try it
var mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet)
console.log('removing 2');
mySet.remove(2);
console.log(mySet)
console.log('Get size of set');
console.log(mySet.sizeOfSet());