
export {} // change the following from script (vars are global) to a module (vars are local)
let message = 'Hello World';
console.log(message);

/* active the terminal window (node, powershell, either one works)
    go to the project folder:
    F:\Personal\Dropbox\Project\Typescript learning>
    and type tsc main.ts

    This will compile and create a file main.js under the same folder. The compiled file is in javascript
    (note that let in ts was changed to var in js)
*/

let x = 10; // once assigned cannot assign again
// let x =20;
let sum;
const y=20;
//const y // not work

let isBeginner: boolean = true; // define the type and value
let total: number = 0;
let name : string = 'Vishwas';
let sentence: string = ` My name is ${name} 
I am a beginner in Typescript`; // ${name}, using vars in a string
console.log(sentence)

let n: null = null;
let u:undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3] ;// an array of number type
let list2: Array<number> = [1,2,3];  //same

let person1: [string, number] = ['Chris', 22]; //mixed type in an array. however, each elment should have a var type corresponding to the defined type

enum Color {Red, Green, Blue}; //enum = enumerate.  Red=0, Green=1, Blue=2
let c: Color = Color.Green; // Green is 1, so the console.log shows a value of 1
console.log(c);

enum Color2 {Red = 6, Green, Blue}; //enum = enumerate.  Red=6, Green=7, Blue=8
let d: Color2 = Color2.Blue; // Blue1 is 7, so the console.log shows a value of 8
console.log(d);

let randomValue: any ='What the'; // var 'randomValue' can be of any type
randomValue = true;
randomValue = 'Vishwas';
console.log(randomValue)
// randomValue();
randomValue.toUpperCase();

let unknowtypevar: unknown = 10;
unknowtypevar = true;
unknowtypevar = 'Vishwas';
//however, the following is wrong;
// unknowtypevar();
// unknowtypevar.toUpperCase()
//instead:
(unknowtypevar as string).toUpperCase();


// a function to check whether the obj : a) is an obj, 2) is of the type 'object', 3) has a field called 'name'
function hasName(obj: any): obj is { name: string} {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(unknowtypevar)) {
    console.log(unknowtypevar.name);
}

let multiType: number | boolean; // multiple types has intelligence support, any types does not
multiType = 20;

// a simple function (input are numbers, output is also a number)
function add (num1:number, num2:number = 10) :number{
    if (num2)
       return num1 + num2; 
    else 
        return num1;
}
add(5, 10);
add(5);
// cannot be the following
// add(5, '10')

//interface

// the function canbe:
function fullName(person:{firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`)
}
let p ={
    firstName: "Bruce", lastName: 'Wayne'
}
fullName(p)

// or, using interface (i.e., a customized collection of var types)
interface Person {
    firstName: string;
    lastName?: string; // ? for optional
}
function fullName2(person:Person) {
    if (person.lastName === undefined )
        person.lastName='';
    console.log(`${person.firstName} ${person.lastName}`);
}
let p2 ={
    firstName: "Bruce"
}
fullName2(p2)

// a class
class Employee {
    employeeName: string;

    // initiate an object. The following is to save the input value of the var 'name' into the object's property 'employeeName'
    // What is the object here? it is 'Employee'
    constructor (name:string){
        this.employeeName = name;
    }
    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Joke');
console.log(emp1.employeeName); // show the name 'Joke'
emp1.greet(); // show the greeting 'Good Morning, Joke!'

/*constructor is basically to create somethine like 
    {
        field1: 'value1', 
        filed2: 'value2'
    }
*/
let obj1 = {field1:'value1', field2:'value2'};
// the above is static
class __obj2 {
    //define the fields of the prototype __obj2
    field1: string; 
    field2: string;
    private field3: string; // field3 is only available within the class, won't be used out of the class

    //create a mechanism to input dynamic values for fields of the protoptye obj __obj2
    constructor (input1:string, input2:string) {
        this.field1 = input1;
        this.field2 = input2;
        // this.field3 =  this.field1 +  this.field2; // it works here
    }

    //this.field3 =  this.field1 +  this.field2 // does not work here (should be in either 
    // a constructor, or a method )

    //create methods
    method2(){
        this.field3 =  this.field1 + ' and ' + this.field2 // it also works here
        console.log( `This shows the value of fields: ${this.field3}`)
    }
}

// with the above, now we can create an instance (instantize)of the prototye __obj2

let obj2 = new __obj2('value1', 'value2');
//show the value of obj2.field1 and .field2
console.log(obj2.field1)
console.log(obj2.field2)
// console.log(obj2.field3) // this does not work, as field3 can only be used within the class
// use the method to display the preset message:
obj2.method2()

// extend class 

class __obj3 extends __obj2 {
    constructor (input10: string, input11:string){
        super(input10, input11);
    }
    method3(){
        // this __obj3 inherits the fields 1 and 2
        console.log(`in obj3 the values are ${this.field1} and ${this.field2}`)
    }
}
let obj3 = new __obj3('value11', 'value12');
console.log(obj3.field1)
obj3.method2(); // it also inherits methods in __obj2
obj3.method3();


