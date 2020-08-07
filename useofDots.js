// How we have to add two arrays before ES6
const ages = [12,15,98,65];
const ages2 = [5,6,7,];
const ages3 = [9,87,7];
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);

// How arrays are addes after the ES6
const allsges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allsges2);