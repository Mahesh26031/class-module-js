
class Person {

    constructor(firstname, lastname, id) {

        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;

    }
    
    fullname() {

        return `${this.firstname} ${this.lastname}`;
        
    }

}
    
class Student extends Person {

    constructor(firstname, lastname, id, enrolled_courses) {

        super(firstname, lastname, id);
        this.enrolled_courses = enrolled_courses || [];
        this.courses_taken = new Map();

    }
    
    add_course(course) {

        this.enrolled_courses.push(course);

    }
    
    add_taken_course(course_code, course) {

    try {

        if (!this.courses_taken.has(course_code)) {
            this.courses_taken.set(course_code, course);

        } else {

            throw new Error("Course already taken");

        }
        } catch (error) {

            console.error(error.message);

        }
        
        }

}
    

class Course {

    constructor(name, code, instructor) {

        this.name = name;
        this.code = code;
        this.instructor = instructor;

    }
    
    toString() {

        return `${this.code} - ${this.name} (${this.instructor})`;

    }
}
  

module.exports = {
    Person,
    Student,
    Course,
    };
    
 