// Uyga vazifalar //
// CLASS //

// N1 //
// class Triangle {
//   #leftSide;
//   #rightSide;
//   #width;

//   getLeftSide() {
//     return this.#leftSide;
//   }
//   getRightSide() {
//     return this.#rightSide;
//   }
//   getWidth() {
//     return this.#width;
//   }
//   setSides(a, b, c) {
//     this.#leftSide = a;
//     this.#rightSide = b;
//     this.#width = c;
//   }
// }

// const tr1 = new Triangle();
// tr1.setSides(3, 4, 5);
// console.log(tr1.getLeftSide());
// console.log(tr1.getRightSide());
// console.log(tr1.getWidth());

// N2 //
// class Employee {
//   #id;
//   #firstName;
//   #lastName;
//   #salary;

//   getId() {
//     return this.#id;
//   }
//   getFirstName() {
//     return this.#firstName;
//   }
//   getLastName() {
//     return this.#lastName;
//   }
//   getSalary() {
//     return this.#salary;
//   }
//   setId(id) {
//     this.#id = id;
//   }
//   setFirstName(firstName) {
//     this.#firstName = firstName;
//   }
//   setLastName(lastName) {
//     this.#lastName = lastName;
//   }
//   setSalary(s) {
//     this.#salary = s;
//   }
//   getFullName() {
//     return `${this.#lastName} ${this.#firstName}`;
//   }
//   getAnnualSalary() {
//     return this.#salary * 12;
//   }
//   raiseSalary(percent) {
//     this.#salary += this.#salary * (percent / 100);
//   }
// }

// const emp1 = new Employee();
// emp1.setId(1);
// emp1.setFirstName("Abdusamad");
// emp1.setLastName("Uskinov");
// emp1.setSalary(3500000);
// console.log(emp1.getFullName());
// console.log(emp1.getAnnualSalary());
// emp1.raiseSalary(20);
// console.log(emp1.getSalary());
// N3 //
// class CustomDate {
//   #day;
//   #month;
//   #year;

//   getDay() {
//     return this.#day;
//   }
//   getMonth() {
//     return this.#month;
//   }
//   getYear() {
//     return this.#year;
//   }
//   setDay(d) {
//     this.#day = d;
//   }
//   setMonth(m) {
//     this.#month = m;
//   }
//   setYear(y) {
//     this.#year = y;
//   }
//   getISOdate() {
//     return `${this.#day}-${this.#month}-${this.#year}`;
//   }
// }
// const cDate1 = new CustomDate();
// cDate1.setDay(12);
// cDate1.setMonth("05");
// cDate1.setYear(2023);
// console.log(cDate1.getISOdate());

// N4 //
// class Time {
//   #hour;
//   #minute;
//   #secund;

//   getHour() {
//     return this.#hour;
//   }
//   getMinute() {
//     return this.#minute;
//   }
//   getSecund() {
//     return this.#secund;
//   }
//   setHour(h) {
//     this.#hour = h;
//   }
//   setMinute(m) {
//     this.#minute = m;
//   }
//   setSekund(s) {
//     this.#secund = s;
//   }
//   nextSekund(s1) {
//     if (this.#secund < 59) {
//       this.#secund++;
//     } else if (this.#secund === 59) {
//       this.#secund = 0;
//       if (this.#minute < 59) {
//         this.#minute++;
//       } else if (this.#minute === 59) {
//         this.#minute = 0;
//         if (this.#hour < 23) {
//           this.#hour++;
//         } else if (this.#hour === 23) {
//           this.#hour = 0;
//         }
//       }
//     }
//     console.log(`${this.#hour}:${this.#minute}:${this.#secund}`);
//   }
//   previusSecund(s0) {
//     if (this.#secund !== 0) {
//       this.#secund--;
//     } else {
//       this.#secund = 59;
//       if (this.#minute !== 0) {
//         this.#minute--;
//       } else {
//         this.#minute = 59;
//         if (this.#hour !== 0) {
//           this.#hour--;
//         } else {
//           this.#hour = 23;
//         }
//       }
//     }
//     console.log(`${this.#hour}:${this.#minute}:${this.#secund}`);
//   }
// }
// const time1 = new Time();
// time1.setHour(23);
// time1.setMinute(59);
// time1.setSekund(59);
// time1.nextSekund();
// time1.previusSecund();

// N5 //
// class Shape {
//   constructor(color, filled) {
//     this.color = color;
//     this.filled = filled;
//   }

//   getColor() {
//     return this.color;
//   }

//   setColor(newColor) {
//     this.color = newColor;
//   }

//   isFilled() {
//     return this.filled;
//   }

//   setFilled(newFilled) {
//     this.filled = newFilled;
//   }
// }
// class Circle extends Shape {
//   constructor(color, filled, radius) {
//     super(color, filled);
//     this.radius = radius;
//   }

//   getRadius() {
//     return this.radius;
//   }

//   setRadius(newRadius) {
//     this.radius = newRadius;
//   }

//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }

//   getPerimeter() {
//     return 2 * Math.PI * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   constructor(color, filled, width, height) {
//     super(color, filled);
//     this.width = width;
//     this.height = height;
//   }

//   getWidth() {
//     return this.width;
//   }

//   setWidth(newWidth) {
//     this.width = newWidth;
//   }

//   getHeight() {
//     return this.height;
//   }

//   setHeight(newHeight) {
//     this.height = newHeight;
//   }

//   getArea() {
//     return this.width * this.height;
//   }

//   getPerimeter() {
//     return 2 * (this.width + this.height);
//   }
// }

// const redCircle = new Circle("red", true, 5);
// console.log("Circle radius:", redCircle.getRadius());
// console.log("Circle area:", redCircle.getArea());
// console.log("Circle perimeter:", redCircle.getPerimeter());

// const blueRectangle = new Rectangle("blue", false, 4, 6);
// console.log("Rectangle width:", blueRectangle.getWidth());
// console.log("Rectangle height:", blueRectangle.getHeight());
// console.log("Rectangle area:", blueRectangle.getArea());
// console.log("Rectangle perimeter:", blueRectangle.getPerimeter());

// N6 //
// class Person {
//   constructor(name, address) {
//     this.name = name;
//     this.address = address;
//   }

//   getName() {
//     return this.name;
//   }

//   setName(newName) {
//     this.name = newName;
//   }

//   getAddress() {
//     return this.address;
//   }

//   setAddress(newAddress) {
//     this.address = newAddress;
//   }
// }

// class Student extends Person {
//   constructor(name, address, faculty, year, university) {
//     super(name, address);
//     this.faculty = faculty;
//     this.year = year;
//     this.university = university;
//   }

//   getFaculty() {
//     return this.faculty;
//   }

//   getYear() {
//     return this.year;
//   }

//   getUniversity() {
//     return this.university;
//   }

//   setFaculty(newFaculty) {
//     this.faculty = newFaculty;
//   }

//   setYear(newYear) {
//     this.year = newYear;
//   }

//   setUniversity(newUniversity) {
//     this.university = newUniversity;
//   }
// }

// class Employee extends Person {
//   constructor(name, address, salary, work) {
//     super(name, address);
//     this.salary = salary;
//     this.work = work;
//   }

//   getSalary() {
//     return this.salary;
//   }

//   getWork() {
//     return this.work;
//   }

//   setSalary(newSalary) {
//     this.salary = newSalary;
//   }

//   setWork(newWork) {
//     this.work = newWork;
//   }
// }

// const student1 = new Student(
//   "Jahongir",
//   "Sayyoh street",
//   "Computer Science",
//   2,
//   "INHA University"
// );
// console.log(student1.getName());
// console.log(student1.getFaculty());

// const employee1 = new Employee(
//   "Baxodir",
//   "Nurafshon street",
//   60000,
//   "Software Engineer"
// );
// console.log(employee1.getSalary());
// console.log(employee1.getWork());

// N7 //
// class Animal {
//   constructor(name, speed, weight) {
//     this.name = name;
//     this.speed = speed;
//     this.weight = weight;
//   }
// }

// class Mammal extends Animal {
//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight);
//     this.legs = legs;
//   }

//   getLegs() {
//     return this.legs;
//   }

//   setLegs(newLegs) {
//     this.legs = newLegs;
//   }
// }

// class Cat extends Mammal {
//   getSound() {
//     return "Meow";
//   }
// }

// class Dog extends Mammal {
//   getSound() {
//     return "Woof";
//   }
// }

// class Fish extends Animal {
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight);
//     this.size = size;
//   }

//   getSize() {
//     return this.size;
//   }

//   setSize(newSize) {
//     this.size = newSize;
//   }
// }

// class Whale extends Fish {
//   getSound() {
//     return "Poof";
//   }
// }

// class Shark extends Fish {
//   getSound() {
//     return "Sheef";
//   }
// }

// const cat1 = new Cat("Tom", 10, 5, 4);
// console.log(cat1.getSound());
// console.log(cat1.getLegs());

// const shark1 = new Shark("Black", 30, 500, 5);
// console.log(shark1.getSound());
// console.log(shark1.getSize());

// N8 //
// class Object1 {
//   static customKeys(obj) {
//     return Object.keys(obj);
//   }

//   static customValues(obj) {
//     return Object.values(obj);
//   }

//   static customEntries(obj) {
//     return Object.entries(obj);
//   }
// }

// class Number1 {
//   static customIsInteger(num) {
//     return Number.isInteger(num);
//   }
// }

// class Array1 {
//   static customIsArray(arr) {
//     return Array.isArray(arr);
//   }
// }

// const myObject = { a: 1, b: 2, c: 3 };
// console.log("Keys:", Object1.customKeys(myObject));
// console.log("Values:", Object1.customValues(myObject));
// console.log("Entries:", Object1.customEntries(myObject));

// const myNumber = 42;
// console.log("Is integer:", Number1.customIsInteger(myNumber));

// const myArray = [1, 2, 3];
// console.log("Is array:", Array1.customIsArray(myArray));

// N9 //
// class CustomArray {
//   static isNumberArray(arr) {
//     return arr.every((element) => typeof element === "number");
//   }

//   static sum(arr) {
//     return arr.reduce((total, element) => total + element, 0);
//   }

//   static max(arr) {
//     return Math.max(...arr);
//   }

//   static min(arr) {
//     return Math.min(...arr);
//   }
// }
// const myArray = [10, 5, 8, 3, 12];
// console.log("Is myArray a number array?", CustomArray.isNumberArray(myArray));
// console.log("Sum of myArray:", CustomArray.sum(myArray));
// console.log("Maximum element in myArray:", CustomArray.max(myArray));
// console.log("Minimum element in myArray:", CustomArray.min(myArray));

// N10 //
class Person {
  constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
    this.housePrice = housePrice;
    this.housesNumber = housesNumber;
    this.carPrice = carPrice;
    this.carsNumber = carsNumber;
    this.bankAccount = bankAccount;
  }

  getWealth() {
    return (
      this.housePrice * this.housesNumber +
      this.carPrice * this.carsNumber +
      this.bankAccount
    );
  }
}

class RichPerson extends Person {
  constructor(
    housePrice,
    housesNumber,
    carPrice,
    carsNumber,
    bankAccount,
    companyPrice,
    companiesNumber,
    investigation
  ) {
    super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
    this.companyPrice = companyPrice;
    this.companiesNumber = companiesNumber;
    this.investigation = investigation;
  }

  getWealth() {
    return (
      super.getWealth() +
      this.companyPrice * this.companiesNumber +
      this.investigation
    );
  }
}

const ordinaryPerson = new Person(200000, 1, 30000, 2, 100000);
console.log("Ordinary person's wealth:", ordinaryPerson.getWealth());

const richPerson = new RichPerson(
  200000,
  1,
  30000,
  2,
  100000,
  5000000,
  3,
  2000000
);
console.log("Rich person's wealth:", richPerson.getWealth());
