'use strict';

let employeesArray = [];

function Employee(employeeID , fullName, department, level, imageURL, salary) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = 0;
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Employee.prototype.calculateSalary = function() {
  switch (this.level) {
    case 'Junior':
      this.salary = randomNum(500, 1000);
      break;
    case 'Mid-Senior':
      this.salary = randomNum(1000, 1500);
      break;
    case 'Senior':
      this.salary = randomNum(1500, 2000);
      break;
    default:
      console.log('Invalid employee level');
  }
  this.salary -= this.salary * 0.075; 
}

const ghazi = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', './assets/man.png', 0);
ghazi.calculateSalary();
employeesArray.push(ghazi);

const lana = new Employee(1001, 'Lana Ali', 'Finance', 'Senior','./assets/woman.png', 0);
lana.calculateSalary();
employeesArray.push(lana);

const tamara = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './assets/woman.png', 0);
tamara.calculateSalary();
employeesArray.push(tamara);

const safi = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior','./assets/man.png', 0);
safi.calculateSalary();
employeesArray.push(safi);

const omar = new Employee(1004, 'Omar Zaid', 'Development', 'Senior','./assets/man.png', 0);
omar.calculateSalary();
employeesArray.push(omar);

const rana = new Employee(1005, 'Rana Saleh', 'Development', 'Junior','./assets/woman.png', 0);
rana.calculateSalary();
employeesArray.push(rana);

const hadi = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior','./assets/man.png', 0);
hadi.calculateSalary();
employeesArray.push(hadi);



Employee.prototype.render = function(){
    document.write(`<div class="employee-info-container">
      <h2>${this.fullName}</h2>
      <p>ID: ${this.employeeID}</p>
      <p>Department: ${this.department}</p>
      <p>Level: ${this.level}</p>
      <p>Salary: ${this.salary} $</p>
      <img src="${this.imageURL}" alt="${this.fullName}">
    </div>`);
  }

  for(let i = 0; i < employeesArray.length; i++){
    employeesArray[i].render();
  }




  