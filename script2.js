// //let list = document.getElementById("studentList");

// //create a new student
// let newStudent = document.createElement("li");
// newStudent.textContent = "Joyce lemuna";

// //append the new student to the list
// list.appendChild(newStudent);

let students = ["Joyce lemuna", "John Doe", "Jane Smith", "Michael Johnson", "Emily Davis"];
let list = document.getElementById("studentList");

for (let name of students) {
    let studentItem = document.createElement("li");
    studentItem.textContent = name;
    list.appendChild(studentItem);
}