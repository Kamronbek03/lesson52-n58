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
