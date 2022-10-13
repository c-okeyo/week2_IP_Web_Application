const DAYS_OF_THE_WEEK = ["Sunday","Monday","Tuesday", "Wednesday","Thurday", "Friday","Saturday"];
const MALE_NAMES = ["Kwasi","Kwadwo"," Kwabena","Kwaku", "Yaw","Kofi","Kwame"];
const  FEMALE_NAMES = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var indexOfTheDay = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7