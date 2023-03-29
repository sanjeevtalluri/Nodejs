const product = (a,b) => a*b;
console.log(product(2,3));
const student = {
    name : 'testName',
    age : 20,
    display(){
        console.log("name is : "+this.name+" age is : "+this.age);
    }
}

student.display();