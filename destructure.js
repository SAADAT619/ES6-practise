// destructure function in terms of object 
const person = {name:"Saadat", age: 21, job:"web-developer", gfName:"None"};

const {address, name, job} = person;

console.log(address, name, job);


// destructue fucnion in terms of array
const friends = ['saadat','samin','yasar','kabir','sheikh'];
const [firstFriend,...restFriend] = friends;
console.log(firstFriend,restFriend); 

//Another example of destructure array
const complecxObject = {
    name:'Samin',
    info: {
        address = 'Sobujbg',
        phone = 154
    }
}
const {phone} = complecxObject.phone;
console.log(phone);
