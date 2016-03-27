//first way of creating an object
var Student = {
    'ID' : '',
    'fName' : '',
    'lname' : '',
    'tel' : '',
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
var s1 = Student;
s1['ID'] = "168354899"; //Does not work... will add a new variable to our model.
s1['fname'] = "Ali"; //Works as expected.
s1['lname'] = "Deniz"; //Works as expected.
for(var i=0; i<5; i++) {
    s1['course'][i] = {'courseID':'c' +i, 'grade':Math.random()*100+1};
}
s1['tel']="5559876543";
var gpa = s1.calcGPA();
function person(first, last, age, eye , yearstolive ) {
    this.fname = first;
    this.lname = last;
    this.age = age;
    this.eyeColor = eye;
    this.yearstolive = function(){
        return this.age ;
    };
};
var p1 = new person('first','last',54,'blue');
var p2 = new person('first','last',32,'green');