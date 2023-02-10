const classes = require("./classes");
const { Person, Student, Course } = classes;

try {
    
    const studentid = 1;
    if (!isNaN(studentid)) {

        const student = new Student("mahesh", "bommisetty", studentid);
        
        const course = new Course("javascript", "04", "nikhil");
        const course2 = new Course("ruby on rails", "06", "rajdeep");

        student.add_course("javascript");
        student.add_course("ruby on rails")

        console.log(student.enrolled_courses);
        
        student.add_taken_course("04", course);
        console.log(student.courses_taken);

    } else {

        throw new Error("Invalid student ID");

    }

} catch (error) {

    console.error(error.message);

}