let text1 =" typescript"
let text2="Javascript"

let firstname : string ="ijaz";

console.log(firstname)

function sum(a: number, b: number) {
    console.log(`The result is: ${a + b}`);
    return a + b;
  }
  
  console.log(sum(20, 30))

  class Student {
    fullName: string;
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }
   
  interface Person {
    firstName: string;
    lastName: string;
  }
   
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
   
  let user = new Student("Jane", "M.", "User");
   
  document.body.textContent = greeter(user);



const spiderman = (person:string) => {
    return 'Hello, ' + person;
}

let a = 'Peter Parker';
console.log(spiderman(a));


interface OS {
    name: String;
    language: String;
}
const desert = (type: OS): void => {
  console.log('Android ' + type.name + ' has ' + type.language + ' language');
};

const nougat = {
  name: 'N', 
  language: 'Java'
}

desert(nougat);


class Car {
    model: String;
    doors: Number;
    isElectric: Boolean;
    
    constructor(model: String, doors: Number, isElectric: Boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }

    make(): void {
        console.log(`This car is ${this.model} which has ${this.doors} doors` );
    }
}
let newCar = new Car('Innova', 4,true);
newCar.make();