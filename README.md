# asynchronous-map
A simple key/value map, where the values are loaded asynchronously.

Backed by JS native [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and like [Map](http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects), any value (both objects and primitive values) may be used as either a key or a value.

## Installation

Install via npm

```sh
$ npm install asynchronous-map --save
```

## Usage

```
var AsyncMap = require('asynchronous-map');

var userMap = new AsyncMap(function(key, callback) {
  // Fetch data for key asynchronously (From a database, remote API etc.)
  ...
  callback(null, value);
});


var userId1 = 'U1234';

userMap.get(userId1, function(err, value) {
  console.log(value);
});

```

## Methods

* [`Constructor`](#constructor)
* [`clear`](#clear)
* [`delete`](#delete)
* [`get`](#get)
* [`has`](#has)
* [`keys`](#keys)
* [`set`](#set)
* [`size`](#size)


### Constructor

`AsyncMap(sourcer)`

#### Parameters
* `sourcer(key, callback)` - Function that returns the value for the `key` via callback. The sourcer function is passed a `key` and a `callback(err, value)`.

#### Return value
Returns a newly created AsyncMap object.


### clear
Removes all elements in the Map object.

#### Parameters
None.


### delete
removes the specified element in the Map object.

#### Parameters
* `key` - Required. The key of the element to remove from the Map object.

#### Return value
Returns `true` if an element in the Map object existed and has been removed, or `false` if the element does not exist.


### get
Returns a specified element from a Map object. If the value not exists in the Map, it is fetched via the `sourcer`.

#### Parameters
* `key` - Required. The key of the element to remove from the Map object.
* `callback(err, value)` - Required. A callback which is called with the value for the key.

#### Return value
Returns `this` to support fluent interface.


### has
Checks if the key exists in the map. This does not automatically fetch the value. 

#### Parameters
* `key` - Required. The key of the element to remove from the Map object.

#### Return value
Returns `true` if an element with the specified key exists in the Map object; otherwise `false`.


### keys
Same as [`Map.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys). 

#### Parameters
* none.

#### Return value
Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.


### set
Forces to fetch/refresh data via `sourcer`.

#### Parameters
* `key` - Required. The key of the element to remove from the Map object.
* `callback(err, value)` - Optional. A callback which is called with the value for the key.

#### Return value
Returns `this` to support fluent interface.


### size
Calculates the number of elements in a Map object.

#### Parameters
None.

#### Return value
Returns the number of elements in a Map object.


## License

  [MIT](LICENSE)