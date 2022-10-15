const DAYS_OF_THE_WEEK = ["Sunday","Monday","Tuesday", "Wednesday","Thurday", "Friday","Saturday"];
const MALE_NAMES = ["Kwasi","Kwadwo"," Kwabena","Kwaku", "Yaw","Kofi","Kwame"];
const  FEMALE_NAMES = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function calculateNameAndDay(century,year,month,day,gender){

    var indexOfTheDay = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
    indexOfTheDay = Math.round(indexOfTheDay);    
    var dayTheUserWasBorn = DAYS_OF_THE_WEEK[indexOfTheDay];    
    var nameOfTheUser = null; 

    if (gender == "m"){        
        nameOfTheUser = MALE_NAMES[indexOfTheDay]        
    } else{
        nameOfTheUser = FEMALE_NAMES[indexOfTheDay]   
    }      
    var userInfo = [dayTheUserWasBorn,nameOfTheUser];
    return userInfo; 
       
} 

function main() {

    var year= userInputValidator(parseInt(prompt("Enter the year you were born")),"Y");
    var month = userInputValidator(parseInt(prompt("Enter the month you were born")),"M"); 
    var day = userInputValidator(parseInt(prompt("Enter the day you were born")),"D");
    var gender= userInputValidator(prompt("Enter your gender"),"G");
    var century= parseInt(year.toString().slice(0,2));
    var output = calculateNameAndDay(century,year,month,day,gender)
    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "You were born on: " + output[0] + ". Your Akan name is: "+ output[1];
}

function userInputValidator (value, type){

    switch(type){
        case "Y":
            if (value > 2022|| value < 1900 ){
                alert ( "Enter a value less than the current calendar year")
            };
            break;
        case "M":
            if (value > 12|| value < 1 ){
                alert ( "Enter a value between 1 and 12 representing your month of birth")
            };
            break;
        case "D":
            if (value > 31|| value < 1 ){
                alert ( "Enter a valid day of the month")
            };
            break;
        case "G":
            if (value.toString().toLowerCase() !=="m"|| value.toString().toLowerCase() !=="f"){
                alert ( "Enter a valid gender")
            };
            break;
       default:
            console.log()
    }
 }

