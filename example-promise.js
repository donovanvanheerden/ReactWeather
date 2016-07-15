// function getTempCallback(location, callback) {
//   callback(undefined, 18);
//   callback('City not found');
// }
//
// getTempCallback('East London', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(18);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('East London').then(
//   // success
//   function (temp) {
//     console.log('promise success', temp);
//   },
//   // error
//   function (err) {
//     console.log('promise err', err);
// });

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject('please enter valid numbers');
    }
    else {
      resolve(a + b);
    }
  });
}

addPromise(2, '2').then(
  function (value) {
    console.log('success', value);
  },
  function (err) {
    console.log('error', err);
  }
);
