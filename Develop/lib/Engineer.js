function engineerConstructor(name, id, email, gitHub) {
    this.name = name,
    this.id = id,
    this.email = email,
    this.gitHub = gitHub,
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
        console.log("Engineer");
    },
    this.getGitHub = function () {
        console.log(this.gitHub);
    }
  }

  module.exports = engineerConstructor;