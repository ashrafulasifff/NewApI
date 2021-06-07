Class  Parent {
    constructor () {
        this.fatherName ="Schwerznegger";

    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
}
 const baby=new Child("Android");
 const baby2=new Child("iPhone");
 console.log(baby2);
console.log(baby);