const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const Employee = require("./Develop/lib/Employee");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");
const employeeConstructor = require("./Develop/lib/Employee");

const team = [];

const createHTML = (pathHTML, render) => {
  fs.writeFile( pathHTML, render ,"utf-8", function (err){
    if(err){
      throw err;
    }
    console.log("Team HTML file successfully created");
  })
}

const managerInfo = () => {

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
    team.push(engineerObj);
    console.log(engineerObj);
    getInfo();


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
    var internObj = new Intern (response.name, response.id, response.email, response.school);
    team.push(internObj);
    console.log(internObj);
    getInfo();

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
      choices: ["Manager", "Engineer", "Intern", "Clear all", "Exit"]
      }
  ])
  .then(function(response){
      switch(response.type) {

          case "Manager":
            managerInfo(); 
            break;

          case "Engineer":
            engineerInfo();
            break;

          case "Intern":
            internInfo();
            break; 

          case "Clear all":
            let clearObj = [];
            console.log("Clearing template..."); 
            createHTML(outputPath, render(clearObj));
            break;

          case "Exit":
            console.log("Generating template..."); 
            createHTML(outputPath, render(team));
            break;

          default:
            // code block
            console.log ("Timed out");
        }


      
  }).catch(function(error){
    console.log ("There was an error when generating this file. The error was: " + error)


    
  });
}

//  ==== Calls ==== //

getInfo();

 
