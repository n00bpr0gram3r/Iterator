console.log('Tutorial on iterator');

function arrayIterator(array) {
  let nextIndex = 0;
  //We will return an object
  return {
    next: function () {
      if (nextIndex < array.length) {
        //We will return below object
        return {
          value: array[nextIndex++],
          done: false,
        };
      } else {
        return {
          value: 'Array Iteration is Over',
          done: true,
        };
      }
    },
  };
}
const fruit = ['apple', 'oranges', 'Grapes', 'Banana'];
const itr = new arrayIterator(fruit);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
