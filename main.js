class HashMap {
    constructor() {
        this.map = {};
    }

    set(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key] || null;
    }

    has(key) {
        return key in this.map;
    }

    remove(key) {
        if (this.has(key)) {
            delete this.map[key];
            return true;
        }
        return false;
    }

    length() {
        return Object.keys(this.map).length;
    }

    clear() {
        this.map = {};
    }

    keys() {
        return Object.keys(this.map);
    }

    values() {
        return Object.values(this.map);
    }

    entries() {
        return Object.entries(this.map);
    }
}

// Test the HashMap class
const myMap = new HashMap();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

console.log(myMap.get('key2')); // Output: value2
console.log(myMap.has('key3')); // Output: true

myMap.remove('key1');
console.log(myMap.length()); // Output: 2

console.log(myMap.keys()); // Output: ['key2', 'key3']
console.log(myMap.values()); // Output: ['value2', 'value3']
console.log(myMap.entries()); // Output: [['key2', 'value2'], ['key3', 'value3']]
