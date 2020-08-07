const firstName = "Samin";
const lastName = "Yasar";
// according to ES6 rule to declare string 
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// before ES6 how we have to write multiline 
const multiLine = "Who I'm\n"
    +"why I'm\n"
    +"how I'm"

    console.log(multiLine);

// After ES6 how we write miltiline
const multiline2 = `Who I'm ES6
Why I'm ES6
how I'm ES6`
console.log(multiline2);