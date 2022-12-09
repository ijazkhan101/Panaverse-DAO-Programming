var text1 = " typescript";
var text2 = "Javascript";
var firstname = "ijaz";
console.log(firstname);
function sum(a, b) {
    console.log("The result is: ".concat(a + b));
    return a + b;
}
console.log(sum(20, 30));
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
var spiderman = function (person) {
    return 'Hello, ' + person;
};
var a = 'Peter Parker';
console.log(spiderman(a));
var desert = function (type) {
    console.log('Android ' + type.name + ' has ' + type.language + ' language');
};
var nougat = {
    name: 'N',
    language: 'Java'
};
desert(nougat);
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.make = function () {
        console.log("This car is ".concat(this.model, " which has ").concat(this.doors, " doors"));
    };
    return Car;
}());
var newCar = new Car('Innova', 4, true);
newCar.make();
