class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){ //class er vhitore joto fucntion thakee segulake method bole
        return this.name+" "+this.fatherName; //I can also declare function here but I don,t need to write the fucntion key word here

    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2);