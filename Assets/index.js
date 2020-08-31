const Manager = require("../Develop/lib/Manager");
const Engineer = require("../Develop/lib/Engineer.js");
const Intern = require("../Develop/lib/Intern.js");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

inquirer
.prompt([
    {
    type: "input",
    message: "Employee Name:",
    name: "name"
    },
  {
  type: "list",
  message: "License:",
  name: "license",
  choices: ["APACHE", "GPL", "MIT", "Do What The F*ck You Want To Public License (WTFPL)"]
  },
  {
  type: "input",
  message: "Test Instructions:",
  name: "test"
  }
])
.then(function(response){
  let queryURL = `https://api.github.com/users/${response.username}/repos?per_page=100`;
  axios.get(queryURL).then(function(res) {
    console.log(res.data[0].owner.html_url);
    let githubURL = res.data[0].owner.html_url;
    // writeToFile('README-test.md', response, licenseDesc, githubURL );
  });
  console.log ("README successfully created!")
}).catch(function(error){
  console.log ("There was an error when generating this file. The error was: " + error)
});