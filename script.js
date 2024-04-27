const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const todaysDate = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = (todaysDate.getDate()<10)? "0"+todaysDate.getDate() :todaysDate.getDate();
day.innerHTML = weekDays[todaysDate.getDay()];
month.innerHTML = months[todaysDate.getMonth()];
year.innerHTML = todaysDate.getFullYear();