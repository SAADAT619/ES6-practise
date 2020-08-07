class student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.scName = "BCPSC";
    }
}

const student1 = new student(12, "Ssaa");
const student2 = new student(44,"Saadat");
console.log(student1, student2);
console.log(student1.name, student2.name);