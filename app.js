const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
// const Employee = require("./Develop/lib/Employee");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");
const employeeConstructor = require("./Develop/lib/Employee");

const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const createHTML = (pathHTML, render) => {
  fs.writeFile( pathHTML, render ,"utf-8", function (err){
    if(err){
      throw err;
    }
    console.log("Team HTML file successfully created");
  })
}

const managerInfo = () => {

  var managerObj1 = inquirer.prompt([
        {
        type: "input",
        message: "Name:",
        name: "name",
        },
        {
        type: "input",
        message: "Employee ID:",
        name: "id",
        },
        {
        type: "input",
        message: "Enter e-mail:",
        name: "email",
        },
        {
        type: "input",
        message: "Office Number:",
        name: "number",
        }
    ]).then(response => {
        var managerObj = new Manager (response.name, response.id, response.email, response.number);
        team.push(managerObj);
        console.log(team);
        getInfo();

    }).catch(function(error){
      console.log ("There was an error when generating the manager info. The error was: " + error)
    });
};


const engineerInfo = () => {
  inquirer.prompt([
    {
    type: "input",
    message: "Name:",
    name: "name",
    },
    {
    type: "input",
    message: "Employee ID:",
    name: "id",
    },
    {
    type: "input",
    message: "Enter e-mail:",
    name: "email",
    },
    {
    type: "input",
    message: "GitHub Username:",
    name: "gitHub",
    }
]).then(response => {
    var engineerObj = new Engineer (response.name, response.id, response.email, response.gitHub);
    console.log(engineerObj);

}).catch(function(error){
  console.log ("There was an error when generating the engineer info. The error was: " + error)
});
};


const internInfo = () => {
  inquirer.prompt([
    {
    type: "input",
    message: "Name:",
    name: "name",
    },
    {
    type: "input",
    message: "Employee ID:",
    name: "id",
    },
    {
    type: "input",
    message: "Enter e-mail:",
    name: "email",
    },
    {
    type: "input",
    message: "School Name:",
    name: "school",
    }
]).then(response => {
    var InternObj = new Intern (response.name, response.id, response.email, response.school);
    console.log(InternObj);

}).catch(function(error){
  console.log ("There was an error when generating the intern info. The error was: " + error)
});
};

const getInfo = () => {
  inquirer
  .prompt([
      {
      type: "list",
      message: "What type of employee would you like to add?",
      name: "type",
      choices: ["Manager", "Engineer", "Intern", "Employee", "Exit"]
      }
  ])
  .then(function(response){
      switch(response.type) {
          case "Manager":
            managerInfo(); 

          //  render(object1);
              break;
          case "Engineer":
            // code block
            engineerInfo();
              break;
          case "Intern":
          // code block
          console.log ("Intern runs");
          internInfo();
              break; 
          case "Exit":
              console.log("Have a nice day!"); 
              createHTML(outputPath, render(team));
              break;
          default:
            // code block
            console.log ("Time out");
        }


      
  }).catch(function(error){
    console.log ("There was an error when generating this file. The error was: " + error)


    
  });
}

//  ==== Calls ==== //

getInfo();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
