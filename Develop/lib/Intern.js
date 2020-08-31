function internConstructor(name, id, email, school) {
    this.name = name,
    this.id = id,
    this.email = email,
    this.school = school,
    this.getName = function () {
        console.log(this.name);
    },
    this.getId = function () {
        console.log(this.id);
    },
    this.getEmail = function () {
        console.log(this.email);
    },
    this.getRole = function () {
        console.log("Intern");
    },
    this.school= function () {
        console.log(this.school);
    }
  }

  module.exports = internConstructor;