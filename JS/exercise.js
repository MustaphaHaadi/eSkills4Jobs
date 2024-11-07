function Student(name, age, grades) {
    return {
        name: name,
        age: age,
        grades: grades
    };
}
// empty array to store student objects
let students = [];

// Create and add multiple students
let student1 = new Student("Hardy", 21, [85, 89, 97, 90]);
let student2 = new Student("Kofi", 20, [95, 88, 92, 87]);
let student3 = new Student("Ama", 19, [75, 82, 88, 90]);

// OR

// let student1 = {
//     name: "Hardy",
//     age: 21,
//     grades: [85, 89, 97, 90]
// };
// let student2 = {
//     name: "Kofi", 
//     age: 20,
//     grades: [95, 88, 92, 87]
// };
// let student3 = {
//     name: "Ama",
//     age: 19, 
//     grades: [75, 82, 88, 90]
// };

students.push(student1, student2, student3);

// Iterate through students array and display information
students.forEach(student => {
    console.log(`\nName: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Grades: ${student.grades.join(', ')}`);
    
}); 