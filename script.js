let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  // Console log all developers using the map function
  arr.map((employee) => {
      if (employee.profession === "developer") {
          console.log(employee);
      }
  });
}

function PrintDeveloperbyForEach() {
  // Console log all developers using the forEach function
  arr.forEach((employee) => {
      if (employee.profession === "developer") {
          console.log(employee);
      }
  });
}

function addData() {
  // Add a new employee and console log the updated array
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  // Remove employees with the profession 'admin' and console log the updated array
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  // Create a new array, concatenate it with the original array, and console log the result
  const newArr = [
      { id: 5, name: "emma", age: "22", profession: "designer" },
      { id: 6, name: "ryan", age: "24", profession: "developer" },
      { id: 7, name: "chloe", age: "21", profession: "manager" },
  ];
  const concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray);
}