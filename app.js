'use strict';

const form = document.getElementById('employee-form');
form.addEventListener('submit', addEmployee);



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

        // const ghazi = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', './assets/man.png', 0);
        // ghazi.calculateSalary();
        // employeesArray.push(ghazi);
        
        // const lana = new Employee(1001, 'Lana Ali', 'Finance', 'Senior','./assets/woman.png', 0);
        // lana.calculateSalary();
        // employeesArray.push(lana);
        
        // const tamara = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './assets/woman.png', 0);
        // tamara.calculateSalary();
        // employeesArray.push(tamara);
        
        // const safi = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior','./assets/man.png', 0);
        // safi.calculateSalary();
        // employeesArray.push(safi);
        
        // const omar = new Employee(1004, 'Omar Zaid', 'Development', 'Senior','./assets/man.png', 0);
        // omar.calculateSalary();
        // employeesArray.push(omar);
        
        // const rana = new Employee(1005, 'Rana Saleh', 'Development', 'Junior','./assets/woman.png', 0);
        // rana.calculateSalary();
        // employeesArray.push(rana);
        
        // const hadi = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior','./assets/man.png', 0);
        // hadi.calculateSalary();
        // employeesArray.push(hadi);

      Employee.prototype.render = function(){

        return `<div class="col-12 col-md-6 col-lg-4">
           <div class="card cardStyle" style="width: 15rem;">
            <img src="${this.imageURL}" class="card-img-top" alt="${this.fullName}">
           <div class="card-body">
          <h5 class="card-title">${this.fullName}</h5>
          <p class="card-text">ID: ${this.employeeID}</p>
          <p class="card-text">Department: ${this.department}</p>
          <p class="card-text">Level: ${this.level}</p>
          <p class="card-text">Salary: ${this.salary} $</p>
          </div>
          </div>
          </div>`;
        }

        const employeeCardsContainer = document.getElementById('employee-cards');
        let row;
        
           for(let i = 0; i < employeesArray.length; i++){

           if(i % 3 === 0){
              row = document.createElement('div');
           row.className = 'row g-4';
           employeeCardsContainer.appendChild(row);
           }

           const col = document.createElement('div');
           col.className = 'col-12 col-md-6 col-lg-4';
           col.innerHTML = employeesArray[i].render();
            row.appendChild(col);
         }



    //---------------- event section ------------------\\



  function addEmployee(event) {
    event.preventDefault(); 
  
    const levelSalary = document.getElementById('level').value;
  
    const salary = calculateSalary(levelSalary);
  
    function calculateSalary(levelSalary) {
      let salary;
      switch (levelSalary) {
        case 'Junior':
          salary = randomNum(500, 1000);
          break;
        case 'Mid-Senior':
          salary = randomNum(1000, 1500);
          break;
        case 'Senior':
          salary = randomNum(1500, 2000);
          break;
        default:
          console.log('Invalid employee level');
          salary = 0;
      }
      return salary -= salary * 0.075;
    }
  
    const employeeID = generateID();
  
    function generateID() {
      const employeeID = Math.floor(1000 + Math.random() * 9000);
      return employeeID;
    }
  
   
    const fullName = document.getElementById('full-name').value;
    const department = document.getElementById('department').value;
    const level = document.getElementById('level').value;
    const imageUrl = document.getElementById('image-url').value;
  
   
    const newEmployee = {
      fullName,
      department,
      level,
      imageUrl,
      employeeID,
      salary
    };
    employeesArray.push(newEmployee);
  
   
    renderEmployees();
  
 
    form.reset();
  }
  

  function renderEmployees() {
    const employeeCardsContainer = document.getElementById('employee-cards');
    employeeCardsContainer.innerHTML = ''; // clear the container first
  
    // group employees by department
    const employeesByDepartment = {};
    for (let employee of employeesArray) {
      if (employee.department in employeesByDepartment) {
        employeesByDepartment[employee.department].push(employee);
      } else {
        employeesByDepartment[employee.department] = [employee];
      }
    }
  
    for (let department in employeesByDepartment) {
      const section = document.createElement('section');
      section.classList.add('department-section');
      section.innerHTML = `<h2>${department}</h2>`;
      employeeCardsContainer.appendChild(section);
  
      const employeesInDepartment = employeesByDepartment[department];
      let row;
      for (let i = 0; i < employeesInDepartment.length; i++) {
        if (i % 3 === 0) {
          row = document.createElement('div');
          row.className = 'row g-4';
          section.appendChild(row);
        }
  
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4';
  
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('cardStyle');
        card.style.width = '15rem';
  
        const imageElement = document.createElement('img');
        imageElement.classList.add('card-img-top');
        imageElement.src =  './assets/man.png';
        imageElement.alt = employeesInDepartment[i].fullName;
        imageElement.style.width = '15rem';
  
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
  
        const nameElement = document.createElement('h5');
        nameElement.classList.add('card-title');
        nameElement.textContent = employeesInDepartment[i].fullName;
  
        const IdElement = document.createElement('p');
        IdElement.classList.add('card-text');
        IdElement.textContent = `ID : ${employeesInDepartment[i].employeeID} ` ;
  
        const departmentElement = document.createElement('p');
        departmentElement.classList.add('card-text');
        departmentElement.textContent = `Department: ${employeesInDepartment[i].department}`;
  
        const levelElement = document.createElement('p');
        levelElement.classList.add('card-text');
        levelElement.textContent =  `Level: ${employeesInDepartment[i].level}`;
  
        const salaryElement = document.createElement('p');
        salaryElement.classList.add('card-text');
        salaryElement.textContent = 'Salary: $' + employeesInDepartment[i].salary;
  
        cardBody.appendChild(nameElement);
        cardBody.appendChild(IdElement);
        cardBody.appendChild(departmentElement);
        cardBody.appendChild(levelElement);
        cardBody.appendChild(salaryElement);
  
        card.appendChild(imageElement);
        card.appendChild(cardBody);
  
        col.appendChild(card);
        row.appendChild(col);
      }
    }
  }
  

    //---------------- event section without the department spration ------------------\\

  // function renderEmployees() {
  //   const employeeCardsContainer = document.getElementById('employee-cards');
  //   employeeCardsContainer.innerHTML = '';
  
  //   let row;
  //   for(let i = 0; i < employeesArray.length; i++){
  
  //     if(i % 3 === 0){
  //       row = document.createElement('div');
  //       row.className = 'row g-4';
  //       employeeCardsContainer.appendChild(row);
  //     }
  
  //     const col = document.createElement('div');
  //     col.className = 'col-12 col-md-6 col-lg-4';
  
  //     const card = document.createElement('div');
  //     card.classList.add('card');
  //     card.classList.add('cardStyle');
  //     card.style.width = '15rem';
  
  //     const imageElement = document.createElement('img');
  //     imageElement.classList.add('card-img-top');
  //     imageElement.src =  './assets/man.png';
  //     imageElement.alt = employeesArray[i].fullName;
  //     imageElement.style.width = '15rem';
  
  //     const cardBody = document.createElement('div');
  //     cardBody.classList.add('card-body');
  
  //     const nameElement = document.createElement('h5');
  //     nameElement.classList.add('card-title');
  //     nameElement.textContent = employeesArray[i].fullName;
  
  //     const IdElement = document.createElement('p');
  //     IdElement.classList.add('card-text');
  //     IdElement.textContent = `ID: ${employeesArray[i].employeeID} ` ;
  
  //     const departmentElement = document.createElement('p');
  //     departmentElement.classList.add('card-text');
  //     departmentElement.textContent = `Department:  ${employeesArray[i].department}`;
  
  //     const levelElement = document.createElement('p');
  //     levelElement.classList.add('card-text');
  //     levelElement.textContent = `Level: ${employeesArray[i].level}`;
  
  //     const salaryElement = document.createElement('p');
  //     salaryElement.classList.add('card-text');
  //     salaryElement.textContent = 'Salary: $' + employeesArray[i].salary;
  
  //     cardBody.appendChild(nameElement);
  //     cardBody.appendChild(IdElement);
  //     cardBody.appendChild(departmentElement);
  //     cardBody.appendChild(levelElement);
  //     cardBody.appendChild(salaryElement);
  
  //     card.appendChild(imageElement);
  //     card.appendChild(cardBody);
  
  //     col.appendChild(card);
  //     row.appendChild(col);
  //   }
  // }
  

