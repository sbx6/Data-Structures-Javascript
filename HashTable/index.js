/*
	A Hash Tabel is a data structure that is used to implement an associative array of key and value.
	It is designed around an array where each array cell is called bucket. Each bucket contains a list of key/value pairs.

	When this key/value pair is inserted into hashtable, we first compute it's destination bucket, we deterimne this bucket by applying
	a special function on the key which is known as hash function. So every hash function returns a number based on the key. This number is the bucket id.

	When we have to add a key/value pair to a bucket that already has one or more key value pairs, we say that a collision has occurred.
	There are two basic techniques to handle collisions in hash tables:
		* Separate chaining
		* Open addressing

	We will try to implementing to see how It's working.
*/

function HashTable() {
    // The total number of buckets is usually a prime number
    this._bucketSize = 31;
    this._buckets = [];
    this._buckets.length = this._bucketSize;
}

HashTable.prototype.computeHash = function (key) {
    var total = 0;

    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }

    return total % this._bucketSize;
};


// Simple implementation of put method

// HashTable.prototype.put = function(key, value) {
// 	var hash = this.computeHash(key);

// 	if(this._buckets[hash] != undefined )
// 		throw 'We are not handling collisions yet!'

// 	this._buckets[hash] = value;
// };

/*******************************
 IMPLEMENTING OUR PUT&GET FUNCTIONS USING SEPARATE CHAINING
 ********************************/

// Implementing our put function using separate chaining

// HashTable.prototype.put = function(key, value) {
// 	var keyType = typeof(key);

// 	if(keyType !== 'string' && keyType !== 'number')
// 		throw 'Only string or number keys are allowed/supported';

// 	var hash = this.computeHash(key);

// 	if(this._buckets[hash] === undefined)
// 		this._buckets[hash] = {};

// 	var chain = this._buckets[hash];

// 	if(chain.hasOwnProperty(key))
// 		throw 'Duplicate key is not allowed';

// 	chain[key] = value;
// };

// Implementing our get function using separate chaining

// HashTable.prototype.get = function(key) {
// 	var keyType = typeof(key);

// 	if(keyType !== 'string' && keyType !== 'number') return undefined;

// 	var hash = this.computeHash(key);

// 	if(this._buckets[hash] === undefined) return undefined;

// 	var chain = this._buckets[hash];

// 	if(chain.hasOwnProperty(key)) return chain[key];

// 	return undefined;
// };

/*******************************
 IMPLEMENTING OUR PUT&GET FUNCTIONS USING OPEN ADDRESSING
 ********************************/
HashTable.prototype.put = function (key, value) {
    var keyType = typeof (key);

    if (keyType !== 'string' && keyType !== 'number')
        throw 'Only string or number keys are allowed/supported';

    var hash = this.computeHash(key);

    // Yeap No collision found
    if (this._buckets[hash] === undefined) {
        this._buckets[hash] = {};
        this._buckets[hash][key] = value;
        return;
    } else if (this._buckets[hash].hasOwnProperty(key)) {
        // Duplicate Key
        throw 'Duplicate Key is not allowed';
    }

    // Collision found
    // Let's find next available slot
    var bucketId = hash + 1;

    do {
        // Reached the end.
        // Start from the beginning
        if (bucketId >= this._bucketSize) bucketId = 0;

        if (this._buckets[bucketId] === undefined) {
            // Found empty slot
            this._buckets[bucketId] = {};
            this._buckets[bucketId][key] = value;
            return;
        }
        bucketId++;

    } while (bucketId != hash);

    // Couldn't find any free slots
    throw 'Hash table is full!';
};

HashTable.prototype.get = function (key) {
    var keyType = typeof (key);
    if (keyType !== 'string' && keyType !== 'number') return undefined;

    var hash = this.computeHash(key);

    if (this._buckets[hash] === undefined) {
        return undefined;
    } else if (this._buckets[hash].hasOwnProperty(key)) {
        // Key found. Return value
        return this._buckets[hash][key];
    }

    // Possible Collision.
    var bucketId = hash + 1;

    do {
        // Reached the end.
        // Start from the beginning
        if (bucketId >= this._bucketSize) bucketId = 0;

        if (this._buckets[bucketId] === undefined) {
            // Found an empty slot
            return undefined;
        } else if (this._bucekts[bucketId].hasOwnProperty(key)) {
            // Key found. Return value
            return this._buckets[hash][key];
        }

        bucketId++;
    } while (bucketId != hash);

    // Couldn't find the key.
    return undefined;
};


var contacts = new HashTable();
contacts.put("Anna", 678);
contacts.put("Jordan", 123);
console.log('Anna\'s Phone: ' + contacts.get('Anna'));
console.log('Jordan\'s Phone: ' + contacts.get('Jordan'));
console.log('Frank\'s Phone: ' + contacts.get('Frank'));