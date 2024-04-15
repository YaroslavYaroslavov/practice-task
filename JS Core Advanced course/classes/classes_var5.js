class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  removeDepartment(department) {
    this.departments = this.departments.filter((dep) => dep !== department);
  }

  displayDepartments() {
    console.log("Отделы университета " + this.name + ":");
    this.departments.forEach((dep) => {
      console.log(dep);
    });
  }
}
