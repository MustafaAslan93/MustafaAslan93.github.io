var student = {
    'ID' : '',
    'fname' : '',
    'lname' : '',
    'course' : [],

calcGPA : function() {
    var gpa =0;
    for(var i=0; i<this.course.lenght; i++) {
        gpa += this.course[i].grade;
    }
    gpa /=this.course.lenght;
    return gpa;
}
};
var s1 = student;
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
        return 54 =this.age ;
    };
};
var p1 = new person('first','last',54,'blue');
var p2 = new person('first','last',32,'green');

function Course(dep,code, credits, grade, year, semester) {
    this.dep=dep;
     this.code=code;
      this.credits=credits;
       this.grade=grade;
        this.year=year;
         this.semester=semester;
         this.getcoursecode = function (){
             return this.dep + this.code;
         };
};
var c1= new course ()