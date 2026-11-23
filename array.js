let students=["Darus", "Alexa", "Bob", "Eve"];
console.log("Students:", students); 

students[0]="Alice";//Updating the first student name
console.log("Updated Students:", students);   

console.log("First student:", students[0]);
console.log("Second student:", students[1]);
console.log("Third student:", students[2]);
console.log("Fourth student:", students[3]);

students.push("Charlie");//adding a new student to the end of the array
console.log("Updated Students:", students);     

students.pop();//removing the last student from the array
console.log("Updated Students after pop:", students);       

students.shift();//removing the first student from the array
console.log("Updated Students after shift:", students); 


