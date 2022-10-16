var year = null;
var month = null;
var day = null;
var gender = null;


var yearOfBirth = parseInt(prompt("Enter the year you were born"));
if (yearOfBirth > 2022 || yearOfBirth< 1900) {
    alert ( "Enter a value less than the current calendar year")
} else {
    year = yearOfBirth;
}
console.log(year)
var monthofBirth = parseInt(prompt("Enter the month you were born")); 
if (monthofBirth > 12 || monthofBirth < 1 ){
    alert ( "Enter a value between 1 and 12 representing your month of birth")
} else {
    month = monthofBirth;
}
console.log(month)
var dayOfBirth= parseInt(prompt("Enter the day you were born"));
if (dayOfBirth > 31 || dayOfBirth < 1 ){
    alert ( "Enter a value between 1 and 12 representing your month of birth")
} else {
    day = dayOfBirth;
}
console.log(day)

var yourGender = prompt("Enter your gender");
if ( yourGender.toString() == "m" || yourGender.toString() == "f"){
    var  gender = yourGender.toString();   
}else{
     alert ( "Enter a valid gender") 
}
console.log(gender)

var century= parseInt(year.toString().slice(0,2));
console.log(century)