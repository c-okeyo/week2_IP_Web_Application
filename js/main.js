const DAYS_OF_THE_WEEK = ["Sunday","Monday","Tuesday", "Wednesday","Thurday", "Friday","Saturday"];
const MALE_NAMES = ["Kwasi","Kwadwo"," Kwabena","Kwaku", "Yaw","Kofi","Kwame"];
const  FEMALE_NAMES = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function calculateNameAndDay(century,year,month,day,gender){

    var indexOfTheDay = Math.trunc( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
    var dayTheUserWasBorn = DAYS_OF_THE_WEEK[indexOfTheDay];    
    var nameOfTheUser = null; 

    if (gender == "m"){        
        nameOfTheUser = MALE_NAMES[indexOfTheDay];        
        }else{        
            nameOfTheUser=FEMALE_NAMES[indexOfTheDay];
    }     
    var userInfo = [dayTheUserWasBorn,nameOfTheUser];
    return userInfo; 
       
} 

function main() {

    var year = null;
    var month = null;
    var day = null;
    var gender = null;

    var yearOfBirth = parseInt(prompt("Enter the year you were born"));
    if (yearOfBirth > 2022) {
        alert ( "Enter a value less than the current calendar year")
    } else {
        year = yearOfBirth;
    }
    var monthofBirth = parseInt(prompt("Enter the month you were born")); 
    if (monthofBirth > 12 || monthofBirth < 1 ){
        alert ( "Enter a value between 1 and 12 representing your month of birth")
    } else {
        month = monthofBirth;
    }
    var dayOfBirth= parseInt(prompt("Enter the day you were born"));
    if (dayOfBirth > 31 || dayOfBirth < 1 ){
        alert ( "Enter a value between 1 and 12 representing your month of birth")
    } else {
        day = dayOfBirth;
    }
    var yourGender = prompt("Enter your gender");
    if ( yourGender.toString() == "m" || yourGender.toString() == "f"){
        var  gender = yourGender.toString();   
    }else{
        alert ( "Enter a valid gender") 
    }
 
    var century= parseInt(year.toString().slice(0,2));
    var century= parseInt(year.toString().slice(0,2));
    var output = calculateNameAndDay(century,year,month,day,gender);
    var outputElement = document.getElementById("output");
    console.log(outputElement);
    outputElement.innerHTML = "You were born on " + output[0] + ", and your Akan name is "+ output[1] + "! Bring a friend next time &#128521.";
}