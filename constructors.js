var person = require("./constructors/index");

var p1 = new person.Person("Dheeraj","Reddy");

//Accessing greet method which is present on Person.Prototype
p1.greet();


console.log(person.Person.prototype);
console.log(p1.__proto__);
console.log(person.Person.prototype === p1.__proto__ );
