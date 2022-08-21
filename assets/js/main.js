const inputDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const inputTime = document.getElementById("time");
const btn = document.getElementById("btn");
const showDescription = document.querySelector(".show-description");
const showDate = document.querySelector(".show-date");
const showTime = document.querySelector(".show-time");

const form = document.getElementById("add-item");
const items = localStorage.getItem("items") || [];

console.log(items);

// btn.addEventListener("click", () => inputs());

// const inputs = () => {
//   description = inputDescription.value;
//   date = inputDate.value;
//   time = inputTime.value;

//   showDescription.innerHTML = description;
//   showDate.innerHTML = date;
//   showTime.innerHTML = time;
// };

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = e.target.elements["description"];
  const date = e.target.elements["date"];
  const time = e.target.elements["time"];

  addSchedule(description, date, time);

  description.value = "";
  date.value = "";
  time.value = "";

  console.log(items);
});

function addSchedule(description, date, time) {
  const item = {
    "description": description,
    "date": date,
    "time": time
  }

  items.push(item);

  localStorage.setItem("items", JSON.stringify(items));
}
