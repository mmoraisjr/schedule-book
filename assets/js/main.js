const inputDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const inputTime = document.getElementById("time");
const btn = document.getElementById("btn");
const showDescription = document.querySelector(".show-description");
const showDate = document.querySelector(".show-date");
const showTime = document.querySelector(".show-time");

var description;
var date;
var time;

btn.addEventListener("click", () => inputs());

const inputs = () => {
  description = inputDescription.value;
  date = inputDate.value;
  time = inputTime.value;

  console.log(description);
  
  showDescription.innerHTML = description;
  showDate.innerHTML = date;
  showTime.innerHTML = time;
};
