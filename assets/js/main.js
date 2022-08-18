const inputDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const inputTime = document.getElementById("time");
const btn = document.getElementById("btn");
const showDescription = document.getElementById("show-description");
const showDate = document.getElementById("show-date");
const showTime = document.getElementById("show-time");

// console.log(inputDescription);
// console.log(inputDate);
// console.log(inputTime);

var description;
var date;
var time;

btn.addEventListener("click", () => inputs());

const inputs = () =>  {
    description = inputDescription.value;
    date = inputDate.value;
    time = inputTime.value;

    console.log(description);
    console.log(date);
    console.log(time);
}