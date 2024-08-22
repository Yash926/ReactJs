class Student{
    constructor(name,age){
        this.n=name;
        this.a=age;
    }
        stu(){
            console.log("The name of the student is: ",this.n)
            console.log("The age of the student is: ",this.a)
        }
    }
    var stuObj=new Student('Yash',20);
    stuObj.stu()
