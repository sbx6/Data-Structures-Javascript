/*
	Dictionaries are key-value pairs used for easy lookups.
	They are also called associative arrays as each entry into the dictionary is a key with an associated value.

	We will try to implementing to see how It's working.
 */

 function Dictionary() {
 	this._data = {};
 	this._length = 0;
 }

 // Adding element to the dictionary
 Dictionary.prototype.add = function(key, value) {
 	var keyType = typeof(key);

 	if (keyType !== 'string' && keyType !== 'number')
 		throw 'Key type must be only string or number';

 	if(this._data.hasOwnProperty(key))
 		throw 'Duplicate keys are not supported';

 	this._data[key] = value;
 	this._length++;
 };

 // Looking up for a value in the dictionary
 Dictionary.prototype.find = function(key) {
 	if(key === null) return undefined;

 	var keyType = typeof(key);
 	if(keyType !== 'string' && keyType !== 'number')
 		return undefined;

 	if(this._data.hasOwnProperty(key))
 		return this._data[key];

 	return undefined;
 };

Dictionary.prototype.remove = function(key) {
	if(this._data.hasOwnProperty(key)) {
		delete this._data[key];
		this._length--;
	}
};

// Let's try it
var dict = new Dictionary();
dict.add("alice", 123);
dict.add("eve", 456);
dict.add("bob", 789);

console.log('dict.find(\'alice\') = '
            + dict.find('alice'));
console.log('dict.find(\'foo\') = '
            + dict.find('foo'));

