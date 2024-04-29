// Day 05 Assignment

//1.Write a “person” class to hold all the details.

class Person {
    constructor(name, age,degree,year,grade) {
      this.name = name;
      this.age = age;
      this.degree = degree;
      this.year = year;
      this.grade = grade;
    }
  
    getName() {
      return this.name;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Degree: ${this.degree}`);
      console.log(`Year: ${this.year}`);
      console.log(`Grade: ${this.grade}`);
  
    }
  }
  
  const person = new Person("shammu", 25,"BSc", 2020, 8.5);
  
  const res = person.getName();
  console.log(`${res}`);
  person.displayDetails();

//output:
//shammu
//Name: shammu
//Age: 25
//Degree: BSc
//Year: 2020
//Grade: 8.5

  
  //2.write a class to calculate the Uber price.
  
  class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distance, time) {
      // Calculate the fare based on the formula:
      // fare = base fare + (distance * cost per km) + (time * cost per minute)
      const fare = this.baseFare + (distance * this.costPerKm) + (time * this.costPerMinute);
      return fare;
    }
  }
  
  // Example
  const uberCalculator = new UberPriceCalculator(5, 2, 0.5);
  const distance = 10;
  const time = 20; 
  const fare = uberCalculator.calculatePrice(distance, time);
  console.log(`The Uber fare for a distance of ${distance} km and ${time} minutes is $${fare}`);


  //output: The Uber fare for a distance of 10 km and 20 minutes is $35