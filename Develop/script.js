(function () {
  // Get a reference to the #add-employees-btn element
  const addEmployeesBtn = document.querySelector('#add-employees-btn');

  // Collect employee data
  const collectEmployees = function () {
    // TODO: Get user input to create and return an array of employee objects
    const employees = []
    while (true) {
      const firstName = window.prompt("Enter First Name", "");
      const lastName = window.prompt("Enter Last Name", "");

      let salary = window.prompt("Enter Salary", "");
      if (isNaN(salary)) {
        salary = 0;
      } else {
        salary = Number(salary);
      }
      employees.push({ firstName, lastName, salary })
      if (!window.confirm("Do you want to add another employee?")) {
        break
      }
    }
    return employees
  }

  // Display the average salary
  const displayAverageSalary = function (employeesArray) {
    // TODO: Calculate and display the average salary

    let total = 0;
    const numberOfEmployees = employeesArray.length;

    for (let i = 0; i < numberOfEmployees; i++) {
      const employee = employeesArray[i];

      total += employee.salary;
    }
    const average = total / numberOfEmployees;
    const averageUsd = average.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    console.log(`The average salary between our ${numberOfEmployees} employee(s) is ${averageUsd} `);
  }

  // Select a random employee
  const getRandomEmployee = function (employeesArray) {
    // TODO: Select and display a random employee
    const index = Math.floor(Math.random() * employeesArray.length)
    const employee = employeesArray[index]
    console.log(`Congratulations to ${employee.firstName} ${employee.lastName}, our random drawing winner!`)
  };

  // Display employee data in an HTML table
  const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];

      const newTableRow = document.createElement("tr");

      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);

      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);

      const salaryCell = document.createElement("td");
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });

      newTableRow.append(salaryCell);

      employeeTable.append(newTableRow);
    }
  }

  const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });

    displayEmployees(employees);
  }

  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener('click', trackEmployeeData);
})();
