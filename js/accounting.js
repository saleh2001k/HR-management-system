'use strict';

const employeesArray = JSON.parse(localStorage.getItem('employees'));


const departments = {};

employeesArray.forEach(employee => {
  const department = employee.department;
  const salary = employee.salary;
  if (departments[department]) {
    departments[department].numEmployees += 1;
    departments[department].totalSalary += salary;
  } else {
    departments[department] = { numEmployees: 1, totalSalary: salary };
  }
});

let totalNumEmployees = 0;
let totalSalary = 0;
Object.values(departments).forEach(department => {
  totalNumEmployees += department.numEmployees;
  totalSalary += department.totalSalary;
});

const averageSalary = totalSalary / totalNumEmployees;

const table = document.createElement('table');
table.classList.add('table', 'table-striped');
const headerRow = table.insertRow();
headerRow.innerHTML = '<th>Department</th><th>Number of employees</th><th>Total Salary</th><th>Average</th>';



Object.entries(departments).forEach(([department, info]) => {
  const row = table.insertRow();
  row.innerHTML = `<td>${department}</td>
  <td>${info.numEmployees}</td>
  <td>${info.totalSalary.toFixed(2)}</td>
  <td>${(info.totalSalary / info.numEmployees).toFixed(2)}</td>`;
});

const footerRow = table.insertRow();
footerRow.innerHTML = `
<td class="total totalFull" > <b> Total</b></td>
<td class="total" >${totalNumEmployees}</td>
<td class="total">${totalSalary.toFixed(2)}</td>
<td class="total">${averageSalary.toFixed(2)}</td>`;

const accountingContainer = document.getElementById('accounting');
accountingContainer.appendChild(table);
