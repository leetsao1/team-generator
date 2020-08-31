// TODO: Write code to define and export the Employee class

// * name
// * id
// * email
// * getName()
// * getId()
// * getEmail()
// * getRole() // Returns 'Employee'

function employeeConstructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = function () {
        console.log(this.name);
    },
    this.getEmail = function () {
        console.log(this.email);
    },
    this.getRole = function () {
        console.log("Employee role XX");
    }
  }

  module.exports = employeeConstructor;