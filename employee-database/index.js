(async function () {
  const data = await fetch("./data.json");
  const res = await data.json();

  let employees = res;
  let selectedEmployeeId = employees[0]?.id || -1;
  let selectedEmployee = employees[0] || null;

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__names--info");

  // Add Employee Modal and Form Elements
  const addEmployeeButton = document.querySelector(".createEmployee");
  const addEmployeeModal = document.createElement("div");
  const addEmployeeForm = document.createElement("form");

  // Add Employee Modal HTML
  addEmployeeModal.classList.add("addEmployee");
  addEmployeeModal.style.display = "none";
  addEmployeeModal.innerHTML = `
      <div class="addEmployee__container">
        <h2>Add Employee</h2>
        <form class="addEmployee_form">
          <label>First Name: <input type="text" name="firstName" required /></label>
          <label>Last Name: <input type="text" name="lastName" required /></label>
          <label>Email: <input type="email" name="email" required /></label>
          <label>Contact Number: <input type="text" name="contactNumber" required /></label>
          <label>Date of Birth: <input type="date" name="dob" required /></label>
          <label>Address: <input type="text" name="address" required /></label>
          <label>Salary: <input type="number" name="salary" required /></label>
          <label>Profile Image URL: <input type="url" name="imageUrl" /></label>
          <button type="submit">Add</button>
          <button type="button" class="closeModal">Cancel</button>
        </form>
      </div>
    `;

  document.body.appendChild(addEmployeeModal);

  // Show Add Employee Modal
  addEmployeeButton.addEventListener("click", () => {
    addEmployeeModal.style.display = "flex";
  });

  // Hide Add Employee Modal
  addEmployeeModal.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("addEmployee") ||
      e.target.classList.contains("closeModal")
    ) {
      addEmployeeModal.style.display = "none";
    }
  });

  // Add Employee Form Submission
  addEmployeeModal.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newEmployee = Object.fromEntries(formData.entries());

    // Calculate age from DOB
    const dob = new Date(newEmployee.dob);
    const age = new Date().getFullYear() - dob.getFullYear();

    newEmployee.id = employees[employees.length - 1]?.id + 1 || 1001;
    newEmployee.age = age;
    newEmployee.imageUrl =
      newEmployee.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";

    employees.push(newEmployee);
    renderEmployees();
    addEmployeeModal.style.display = "none";
    e.target.reset();
  });

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
