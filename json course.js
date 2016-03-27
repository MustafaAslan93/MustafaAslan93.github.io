//first way of creating an object
var Student = {
    'ID' : '',
    'fName' : '',
    'lname' : '',
    'courses': [],
    calcGPA : function() {
        var gpa = 0;
        for(var i=0; i<this.courses.length; i++) {
            gpa += this.courses[i].grade;
        }
        gpa /= this.courses.length;
        return gpa;
    }
};
//alternative way to create an object
function Course(dep, code, credits, grade, year, semester) {
    this.dep = dep;
    this.code = code;
    this.credits = credits;
    this.grade = grade;
    this.year = year;
    this.semester = semester;
    this.getCourseCode = function() {
        return this.dep + this.code;
    };
};
var c1 = new Course("MBG","404",3,3.47,2015,"Fall");
var c2 = new Course("CS","102",3,3.62,2016,"Spring");
var s1 = Student;
s1.ID = "218326855";
s1.fname = "Deniz";
s1.lname = "KAYA";
s1.courses = [c1,c2];
var s1GPA = s1.calcGPA();
s1GPA;