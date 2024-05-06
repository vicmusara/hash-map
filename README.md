Start by creating a HashMap class or factory function. It’s up to you which you want to use. Then proceed to create the following methods:
set(key, value) takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value (e.g. Carlos is our key but it is called twice: once with value I am the old value., and once with value I am the new value.

get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.

has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.

length() returns the number of stored keys in the hash map.

clear() removes all entries in the hash map.

keys() returns an array containing all the keys inside the hash map.

values() returns an array containing all the values.

entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]

Remember that a hash map does not preserve insertion order when you are retrieving your hash map’s data. It is normal and expected for keys and values to appear out of the order you inserted them in.

Extra Credit
Create a class HashSet that behaves the same as a HashMap but only contains keys with no values.