(async function () {
  const res = await fetch("./data.json");
  const data = await res.json();
  console.log(data, "aaa");

  let employees = data;

  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__names--info");

  const renderEmployees = () => {
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__names--item");

      if (parseInt(selectedEmployeeId, 10) === emp.id) {
        employee.classList.add("selected");
        selectedEmployee = emp;
      }

      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName}  <i class="employeeDelete"  >❌</i>`;

      employeeList.append(employee);
    });
  };

  renderEmployees();
})();
