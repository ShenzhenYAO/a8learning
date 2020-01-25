"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello World';
console.log(message);
/* active the terminal window (node, powershell, either one works)
    go to the project folder:
    F:\Personal\Dropbox\Project\Typescript learning>
    and type tsc main.ts

    This will compile and create a file main.js under the same folder. The compiled file is in javascript
    (note that let in ts was changed to var in js)
*/
var x = 10; // once assigned cannot assign again
// let x =20;
var sum;
var y = 20;
//const y // not work
var isBeginner = true; // define the type and value
var total = 0;
var name = 'Vishwas';
var sentence = " My name is " + name + " \nI am a beginner in Typescript"; // ${name}, using vars in a string
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3]; // an array of number type
var list2 = [1, 2, 3]; //same
var person1 = ['Chris', 22]; //mixed type in an array. however, each elment should have a var type corresponding to the defined type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //enum = enumerate.  Red=0, Green=1, Blue=2
var c = Color.Green; // Green is 1, so the console.log shows a value of 1
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 6] = "Red";
    Color2[Color2["Green"] = 7] = "Green";
    Color2[Color2["Blue"] = 8] = "Blue";
})(Color2 || (Color2 = {}));
; //enum = enumerate.  Red=6, Green=7, Blue=8
var d = Color2.Blue; // Blue1 is 7, so the console.log shows a value of 8
console.log(d);
var randomValue = 'What the'; // var 'randomValue' can be of any type
randomValue = true;
randomValue = 'Vishwas';
console.log(randomValue);
// randomValue();
randomValue.toUpperCase();
var unknowtypevar = 10;
unknowtypevar = true;
unknowtypevar = 'Vishwas';
//however, the following is wrong;
// unknowtypevar();
// unknowtypevar.toUpperCase()
//instead:
unknowtypevar.toUpperCase();
// a function to check whether the obj : a) is an obj, 2) is of the type 'object', 3) has a field called 'name'
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(unknowtypevar)) {
    console.log(unknowtypevar.name);
}
var multiType; // multiple types has intelligence support, any types does not
multiType = 20;
// a simple function (input are numbers, output is also a number)
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
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
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce", lastName: 'Wayne'
};
fullName(p);
function fullName2(person) {
    if (person.lastName === undefined)
        person.lastName = '';
    console.log(person.firstName + " " + person.lastName);
}
var p2 = {
    firstName: "Bruce"
};
fullName2(p2);
// a class
var Employee = /** @class */ (function () {
    // initiate an object. The following is to save the input value of the var 'name' into the object's property 'employeeName'
    // What is the object here? it is 'Employee'
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Joke');
console.log(emp1.employeeName); // show the name 'Joke'
emp1.greet(); // show the greeting 'Good Morning, Joke!'
/*constructor is basically to create somethine like
    {
        field1: 'value1',
        filed2: 'value2'
    }
*/
var obj1 = { field1: 'value1', field2: 'value2' };
// the above is static
var __obj2 = /** @class */ (function () {
    //create a mechanism to input dynamic values for fields of the protoptye obj __obj2
    function __obj2(input1, input2) {
        this.field1 = input1;
        this.field2 = input2;
        // this.field3 =  this.field1 +  this.field2; // it works here
    }
    //this.field3 =  this.field1 +  this.field2 // does not work here (should be in either 
    // a constructor, or a method )
    //create methods
    __obj2.prototype.method2 = function () {
        this.field3 = this.field1 + ' and ' + this.field2; // it also works here
        console.log("This shows the value of fields: " + this.field3);
    };
    return __obj2;
}());
// with the above, now we can create an instance (instantize)of the prototye __obj2
var obj2 = new __obj2('value1', 'value2');
//show the value of obj2.field1 and .field2
console.log(obj2.field1);
console.log(obj2.field2);
// console.log(obj2.field3) // this does not work, as field3 can only be used within the class
// use the method to display the preset message:
obj2.method2();
// extend class 
var __obj3 = /** @class */ (function (_super) {
    __extends(__obj3, _super);
    function __obj3(input10, input11) {
        return _super.call(this, input10, input11) || this;
    }
    __obj3.prototype.method3 = function () {
        // this __obj3 inherits the fields 1 and 2
        console.log("in obj3 the values are " + this.field1 + " and " + this.field2);
    };
    return __obj3;
}(__obj2));
var obj3 = new __obj3('value11', 'value12');
console.log(obj3.field1);
obj3.method2(); // it also inherits methods in __obj2
obj3.method3();
