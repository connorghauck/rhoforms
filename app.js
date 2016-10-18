var app = angular.module('basicApp', []);

app.controller('BasicController', function(){
    console.log('BasicController is loaded');

    var self = this;
    self.employees = [];
    self.totalSalary = 0;

    self.createEmployee = function(){
        console.log('Submitted employee ', self.employee);
        self.employees.push(angular.copy(self.employee));
        self.getSalary();
    };

    self.getSalary = function(){
        self.totalSalary = 0;
        self.employees.forEach(function (currentIndex){
            self.totalSalary += currentIndex.salary;
        }); //you're calling foreach on the employees array

        self.totalSalary /= 12;
        self.totalSalary = self.totalSalary.toFixed(2);
    }

    self.deleteEmployee = function($index){
        self.employees.splice($index, 1);
        self.getSalary();
    }
});







//
//
// $(document).ready(function () {
//   $('#employee-info').on('submit', function (event) {
//     event.preventDefault();
//
// //you create the empty employee object here with properties you're going to fill inside of the curly brackets
//     var employee = {};
// //this is setting it so that fields is your employee info in a serialized form.
//     var fields = $('#employee-info').serializeArray();
//
//
//     console.log('fields', fields);
//
// //fields.forEach states a function that takes in the element and index, so when the user submits their information, it prints to the console the element name and value.
// //the name being things like "first name" and the value being "connor"
// //you take the variable fields, which is the serialized verison of the form.
// //forEach then iterates through each field where we build the employee object.
// //it's taking the name you gave the form box as it's name element and then taking the value of the form box, which is what the user submitted into the text. "employee-first-name" and "connor"
//     fields.forEach(function (element, index) {
//       employee[element.name] = element.value;
//       //console.log(element);
//     });
//
//     console.log('employee object', employee);
//
//
// function clearForm(){
//     $('#employee-info').find('input[type=text],[type=number]').val('');
// };
//
//     clearForm();
//     tableTime(employee);
//     salaryTime();
//   });
//
// var numEmployees = 1;
//
// function tableTime(employee){
//     var tableName = document.getElementById('employee-results');
// //we pass employee into a new function where we create a tableName variable where the document grabs the element with the ID 'employee-results' and stores it into the variable tableName
//
// //var row creates a new row for the user to submit data into when you press submit
//     var row = tableName.insertRow(numEmployees);
//     numEmployees++;
//     // console.log(numEmployees);
//
//     // for(i = 0; i < 5; i++){
//     //     var cell = row.insertCell(i);
//     // }
//
//
//     //doing the layout of the columns of the table
//     var firstName = row.insertCell(0);
//     var lastName = row.insertCell(1);
//     var employeeId = row.insertCell(2);
//     var jobTitle = row.insertCell(3);
//     var salary = row.insertCell(4);
//     var removal = row.insertCell(5);
//
// //you're going to call the firstName var and set the content of it with ".innerHTML"
//
//     firstName.innerHTML = employee['employee-first-name'];
//     lastName.innerHTML = employee['employee-last-name'];
//     employeeId.innerHTML = employee['employee-id'];
//     jobTitle.innerHTML = employee['employee-job'];
//     salary.innerHTML = employee['employee-salary'];
// }
//
// //salary = cell 4 of table / 12
// function salaryTime(){
//     var table = document.getElementById('employee-results');
//     var salTime = 0;
//         for(i=1; i < numEmployees; i++){
//             salTime += parseInt(table.rows[i].cells[4].innerHTML);
//     }
//     // console.log(salTime);
//     var averij = salTime/12;
//     console.log(averij);
//
//     document.getElementById('monthlyCost').innerHTML = '<h3>Monthly Salary Expenditure</h3>' + ' ' + parseInt(averij);
// }
//
// //the dollar signs for variable names are typically used to remind you that a specific object is used in jquery only.
//
// //you're creating the appendDom function, which, to create in the first place, must have a variable being passed in
// //you can't use appendDom on a object unless it has all 5 of those names inside of it to utilize
// //
// //   function appendDom(emp) {
// //     var $emp = $('<div class="employee"></div>');
// //
// // //this is a test line
// // // $emp.append('<p>');
// // // emp.forEach(function(element){
// // //     $emp.append(element.value + ' ');
// // // });
// //
// //
// //     $emp.append('<p>' + emp['employee-first-name'] + ' ' + emp['employee-last-name'] + ' ' + emp['employee-id'] + ' ' + emp['employee-job'] + ' ' + emp['employee-salary'] + '</p>');
// //
// //
// //*
// //  $emp.append('<td>' + emp['employee-first-name'] + '</td>');
// //* This is how you take table data and do the same thing you originally did with the individual strings
// //
// //
// //     $('#employee-results').append($emp);
// //   }
// });



//SORRY ABOUT ALL OF THE COMMENTS IN MY CODE.
//I was explaining it to myself.
