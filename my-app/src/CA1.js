// suppose you have 2 arrays of objects representing employees with their names, departments, salaries ,and yeras of expereinces. you want to: increase the salary of each employee by 10%. Calculate the total slary expenditure forthe remainning employees.find the first employee havinf salary greater than 70000 after the increase. sort the employeee by therir year of expereince in descending order. grop the employees by their departments


const employees1 = [
    { name: "Yash", department: "IT", salary: 60000, yearsOfExperience: 5 },
    { name: "Ankit", department: "HR", salary: 55000, yearsOfExperience: 3 },
    { name: "Awant", department: "Finance", salary: 65000, yearsOfExperience: 7 },
  ];
  
  const employees2 = [
    { name: "Nikhil", department: "Marketing", salary: 58000, yearsOfExperience: 4 },
    { name: "Abhinav", department: "IT", salary: 62000, yearsOfExperience: 6 },
    { name: "Arpit", department: "Finance", salary: 70000, yearsOfExperience: 8 },
  ];
  

  const allEmployees = [...employees1, ...employees2];

  const employeesWithIncreasedSalary = allEmployees.map(employee => ({
    ...employee,
    salary: employee.salary * 1.1
  }));
  
 
  const totalSalaryExpenditure = employeesWithIncreasedSalary.reduce((total, employee) => total + employee.salary, 0);
  
 
  const firstHighEarner = employeesWithIncreasedSalary.find(employee => employee.salary > 70000);
  
  
  const sortedEmployees = [...employeesWithIncreasedSalary].sort((a, b) => b.yearsOfExperience - a.yearsOfExperience);
  

  const groupedEmployees = employeesWithIncreasedSalary.reduce((groups, employee) => {
    const { department } = employee;
    if (!groups[department]) {
      groups[department] = [];
    }
    groups[department].push(employee);
    return groups;
  }, {});
  

  console.log("Employees with increased salary:", employeesWithIncreasedSalary);
  console.log("Total salary expenditure:", totalSalaryExpenditure.toFixed(2));
  console.log("First employee with salary > 70000:", firstHighEarner);
  console.log("Employees sorted by experience:", sortedEmployees);
  console.log("Employees grouped by department:", groupedEmployees);