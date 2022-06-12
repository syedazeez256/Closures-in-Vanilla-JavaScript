"use strict";

// const securebooking = function () {
//   let passengercount = 0;

//   return function () {
//     passengercount++;
//     console.log(passengercount);
//   };
// };

// const book = securebooking();
// book();
// book();
// book();

// console.dir(book);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 44;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//// this f function is reassigned ////

h();
f();

console.dir(f);

////// Example 2 /////
const boardingPaasengers = function (n, wait) {
  const pergroup = n / 3;
  setTimeout(() => {
    console.log(`The total passengers is ${n}`);
    console.log(`The total group is ${pergroup}`);
  }, wait * 1000);
  console.log(`This boarding will pass after ${wait} seconds`);
};

boardingPaasengers(180, 3);
