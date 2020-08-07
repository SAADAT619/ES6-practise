// how to we have to calcualte maximum before ES6
const business = 890;
const minister = 960;
const sochib  = 970;
const maximum = Math.max(business,minister,sochib);
console.log(maximum);


// How we calculate maximum before ES6 in an array
const takaPoisa = [660,450,250,850];
const maximum2 = Math.max(takaPoisa);
console.log(maximum2); //This will show NaN

// How we calculate maximum after ES6 in an array
const maximum3 = Math.max(...takaPoisa);
console.log(maximum3);