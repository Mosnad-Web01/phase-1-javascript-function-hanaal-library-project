// myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  // myMap function
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (value, key, collection) => {
      result.push(callback(value, key, collection));
    });
    return result;
  }
  
  // myReduce function
  function myReduce(collection, callback, acc) {
    let start = acc !== undefined ? acc : collection[0];
    
    myEach(collection, (value, key, collection) => {
      if (acc === undefined && key === 0) return;
      start = callback(start, value, collection);
    });
  
    return start;
  }
   // myReduce function
   function myReduce(collection, callback, acc) {
    let keys = Object.keys(collection);
    let start = acc !== undefined ? acc : collection[keys[0]];      
    myEach(keys, (key, index) => {
      if (acc === undefined && index === 0) return;
      start = callback(start, collection[key], collection);
    });
  
    return start;
  }
  
// myFind.js

function myFind(collection, callback) {
  for (let i = 0; i < collection.length; i++) {
    if (callback(collection[i], i, collection)) {
      return collection[i];
    }
  }
  return undefined;
}

// myFilter.js

function myFilter(collection, callback) {
  const result = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && callback(collection[key], key, collection)) {
        result.push(collection[key]);
      }
    }
  }

  return result;
}


// mySize.js

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection === 'object') {
    return Object.keys(collection).length;
  }
  return 0;
}

// myFirst.js

function myFirst(collection, n = 1) {
  if (n === 1) {
    return collection[0];
  } else {
    return collection.slice(0, n);
  }
}
// myLast.js

function myLast(collection, n = 1) {
  if (n === 1) {
    return collection[collection.length - 1];
  } else {
    return collection.slice(-n);
  }
}

// myFunctions.js

// Function to retrieve the keys of an object
function myKeys(obj) {
  const keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

// Function to retrieve the values of an object
function myValues(obj) {
  const values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}

// Helper function to compare arrays
function arraysEqual(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;
  for (let idx = 0; idx < arrA.length; idx++) {
    if (Array.isArray(arrA[idx]) && Array.isArray(arrB[idx])) {
      if (!arraysEqual(arrA[idx], arrB[idx])) return false;
    } else if (arrA[idx] !== arrB[idx]) {
      return false;
    }
  }
  return true;
}

// Helper function to compare objects
function objectsEqual(objA, objB) {
  return JSON.stringify(objA) === JSON.stringify(objB);
}

  // Export functions
  module.exports = { 
    myEach, 
    myMap, 
    myReduce, 
    myFind, 
    myFilter, 
    mySize, 
    myFirst,
    myLast,
    myKeys,
    myValues,
    arraysEqual,
    objectsEqual};
  