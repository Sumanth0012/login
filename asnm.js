// Question - 01
console.log("Solution.NO - 1");
class school{
    constructor(name){
        this.name = name;
    }
    get schinfo (){
        return `School Name is ${this.name}`;
    }
}
class employee{
    constructor(name,schoolName){
        this.name = name;
        this.schoolName = schoolName;
    }
    get empinfo (){
        return `Name is ${this.name} and SchoolName is ${this.schoolName}`;
    }
}
class teacher{
    constructor(name,schoolName,designation){
        this.name = name;
        this.schoolName = schoolName;
        this.designation = designation;
    }
    get teachinfo (){
        return `Name is ${this.name} and SchoolName is ${this.schoolName} and Designation is ${this.designation}`;
    }
}

mysch = new school("school");
console.log(mysch.schinfo);
myemp = new employee("emp","empschool");
console.log(myemp.empinfo);
myteach = new teacher("mine","myschool","mydesignation");
console.log(myteach.teachinfo);

// Question - 02
console.log("Solution.NO - 2");
class Day{
    constructor(year, month, day){
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

function getDaysinMonth(year,month){
    this.year = year;
    this.month = month;
    Total_days = new Date(this.year,this.month,0).getDate();
    a = [];
    for(let day=1 ; day<=Total_days ; day++){
        a.push({"month":this.month,"day":day,"year":this.year});
    }
    return a;
}

date = new Day(2028,7,24);
console.log(getDaysinMonth(date.year,date.month));