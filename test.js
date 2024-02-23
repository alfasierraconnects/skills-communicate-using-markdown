someObject = {
  someproperty1: 1,
  someproperty2: 2,
  someproperty3: 3,
  someproperty4: 4,
  someproperty5: "five",
  someMethod(a, b) {
    return a + b;
  },
};

for (const item in someObject) {
  console.log(item);
}

// for (const item of Object.entries(someObject)) {
//   console.log(item);
// }
// for (const item of Object.keys(someObject)) {
//   console.log(item);
// }
// for (const item of Object.values(someObject)) {
//   console.log(item);
// }

// const entries = Object.entries(someObject);
// console.log(entries);
// const keys = Object.keys(someObject);
// console.log(keys);
// const props = Object.values(someObject);
// console.log(props);

// const restaurant = {
//   timings: {
//     mon: [700, 2100],
//     tues: [700, 2100],
//     wednes: [700, 2100],
//     thurs: [700, 2100],
//     fri: [700, 2100],
//     sat: [900, 2100],
//     sun: [1100, 2300],
//   },
// };
// console.log(Object.entries(restaurant));

// let day = Object.keys(restaurant.timings)[0];
// let [openingTimings, closingTimings] = restaurant.timings[day];
// console.log(
//   `Restaurant opens at ${openingTimings} hrs and closes at ${closingTimings} on ${day}day.`
// );

// checkRepeat = (arr, value) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       count++;
//     }
//   }
//   return count;
// };

// const arr = [1, 2];
// const uniqueSet = new Set(arr);

// const mapSample = new Map();

// for (const value of uniqueSet) {
//   let repetition = checkRepeat(arr, value);
//   mapSample.set(value, repetition);
// }

// console.log(mapSample);

// const repeatSet = new Set(mapSample.values());
// console.log(uniqueSet);
// console.log(uniqueSet.size);
// console.log(repeatSet);
// console.log(repeatSet.size);

// if (uniqueSet.size === repeatSet.size) {
//   return true;
// } else return false;
