function managerConstructor(name, id, email, number) {
    this.name = name,
    this.id = id,
    this.email = email,
    this.number = number,
    this.role = "Manager",
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
        console.log("Manager");
    }
  }

  module.exports = managerConstructor;