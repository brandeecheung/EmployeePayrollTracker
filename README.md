# Employee Payroll Tracker 💸 🏪  
## Module 3 Challenge  

The goal of this project was to modify starter code to create an application that enables a payroll manager to view and manage employee payroll data. This app runs in the browser and will features dynamically updated HTML and CSS powered by JavaScript code that I have written. It features a responsive user interface that adapts to multiple screen sizes.

## Criteria Included

```md
GIVEN an employee payroll tracker
WHEN I click the "Add employee" button
THEN I am presented with a series of prompts asking for first name, last name, and salary
WHEN I finish adding an employee
THEN I am prompted to continue or cancel
WHEN I choose to continue
THEN I am prompted to add a new employee
WHEN I choose to cancel
THEN my employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data
```

## User Story

```md
AS A payroll manager
I WANT AN employee payroll tracker
SO THAT I can see my employees' payroll data and properly budget for the company
```

The images below demonstrate how the web application appears and functions:

![Animation shows input of employees to an employee payroll tracker.](./Assets/03-javascript-homework-demo.gif)

![Shows employee information in the console of an employee payroll tracker.](./Assets/03-javascript-homework-console-demo.png)

## Functions Utilized 

* `collectEmployees`: This function allows a user to add multiple employees to display on the page.  The user will need to enter the first name, last name, and salary of each employee, then have the option to keep adding employees until they choose to stop. A `while` loop is utilized here. ([MDN Web Docs on `while` loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)) The salary must be entered as a number, otherwise it defaults to $0.  The `isNaN` function is used for this. ([MDN Web Docs on isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)) This function returns an array of objects, like the following example.  Reference the [MDN Web Docs on return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return):

