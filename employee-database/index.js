(async function () {
  const data = await fetch("./data.json");
  const res = await data.json();

  let employees = res;
  let selectedEmployeeId = employees[0]?.id || -1;
  let selectedEmployee = employees[0] || null;

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__names--info");

  employeeList.addEventListener("click", (e) => {
    if (
      e.target.tagName === "SPAN" &&
      String(selectedEmployeeId) !== e.target.id
    ) {
      selectedEmployeeId = parseInt(e.target.id, 10);
      renderEmployees();
      renderSingleEmployee();
    }

    if (e.target.tagName === "I") {
      employees = employees.filter(
        (emp) => String(emp.id) !== e.target.parentNode.id
      );
      selectedEmployeeId = employees[0]?.id || -1;
      selectedEmployee = employees[0] || null;
      renderEmployees();
      renderSingleEmployee();
    }
  });

  const renderEmployees = () => {
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__names--item");
      if (String(selectedEmployeeId) === String(emp.id)) {
        employee.classList.add("selected");
        selectedEmployee = emp;
      }
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`;
      employeeList.append(employee);
    });
  };

  const renderSingleEmployee = () => {
    if (selectedEmployeeId === -1 || !selectedEmployee) {
      employeeInfo.innerHTML = "<p>No employee selected</p>";
      return;
    }
    employeeInfo.innerHTML = `
        <img src="${selectedEmployee.imageUrl}" alt="${selectedEmployee.firstName}" />
        <span class="employees__single--heading">
          ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})
        </span>
        <span>${selectedEmployee.address}</span>
        <span>${selectedEmployee.email}</span>
        <span>Mobile - ${selectedEmployee.contactNumber}</span>
        <span>DOB - ${selectedEmployee.dob}</span>
      `;
  };

  renderEmployees();
  renderSingleEmployee();
})();
