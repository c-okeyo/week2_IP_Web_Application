const DAYS_OF_THE_WEEK = ["Sunday","Monday","Tuesday", "Wednesday","Thurday", "Friday","Saturday"];
const MALE_NAMES = ["Kwasi","Kwadwo"," Kwabena","Kwaku", "Yaw","Kofi","Kwame"];
const  FEMALE_NAMES = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var century= 19;
var year=;
var month =; 
var day = ;
var gender= ;

var indexOfTheDay = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
indexOfTheDay = Math.round(indexOfTheDay);
var dayTheUserWasBorn = DAYS_OF_THE_WEEK[indexOfTheDay];

var nameOfTheUser = null; 

if (gender == "m"){
    nameOfTheUser = MALE_NAMES[indexOfTheDay]
} else if (gender == "f"){
    nameOfTheUser =FEMALE_NAMES
}else{
    alert ( "Please enter a valid gender")
}

console.log (nameOfTheUser)
