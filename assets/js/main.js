const form = document.getElementById("add-item");
const items = JSON.parse(localStorage.getItem("items")) || [];
const showResults = document.querySelector(".results");

//Percorre a lista de objetos já criados e executa a função de criação de item na tela
items.forEach((i) => {
  addSchedule(i);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //dentro do target do form, seleciona os elementos de cada id do form
  const description = e.target.elements["description"];
  const date = e.target.elements["date"];
  const time = e.target.elements["time"];

  //a partir do valor inserido nos inputs do form, cria um objeto com os atributos correspondentes
  const item = {
    id: String(items.length),
    description: description.value,
    date: date.value,
    time: time.value,
    isCompleted: false,
  };
  //insere o item ao array dos itens
  items.push(item);

  //executa a função de criar o item em tela
  addSchedule(item);

  //como o LocalStorage so aceita conteúdo em String,
  //o conteúdo do array é transformado em uma String para ser armazenado
  localStorage.setItem("items", JSON.stringify(items));

  //define o valor dos inputs para vazio, ao executar a inserção
  description.value = "";
  date.value = "";
  time.value = "";
});

function addSchedule(item) {
  const newSchedule = document.createElement("div");
  if (item.isCompleted == false) {
    newSchedule.classList.add("show-schedule");
  } else {
    newSchedule.classList.add("schedule-completed");
  }

  const contentSchedule = document.createElement("div");
  contentSchedule.classList.add("content-schedule");

  const lineNewDescription = document.createElement("div");
  lineNewDescription.classList.add("line");
  const iNewDescription = document.createElement("i");
  iNewDescription.classList.add("fa-solid");
  iNewDescription.classList.add("fa-message");
  const newDescription = document.createElement("p");
  newDescription.classList.add("show-description");
  lineNewDescription.appendChild(iNewDescription);
  lineNewDescription.appendChild(newDescription);

  const lineNewDate = document.createElement("div");
  lineNewDate.classList.add("line");
  const iNewDate = document.createElement("i");
  iNewDate.classList.add("fa-solid");
  iNewDate.classList.add("fa-calendar-check");
  const newDate = document.createElement("p");
  newDate.classList.add("show-date");
  lineNewDate.appendChild(iNewDate);
  lineNewDate.appendChild(newDate);

  const lineNewTime = document.createElement("div");
  lineNewTime.classList.add("line");
  const iNewTime = document.createElement("i");
  iNewTime.classList.add("fa-solid");
  iNewTime.classList.add("fa-clock");
  const newTime = document.createElement("p");
  newTime.classList.add("show-time");
  lineNewTime.appendChild(iNewTime);
  lineNewTime.appendChild(newTime);

  contentSchedule.appendChild(lineNewDescription);
  contentSchedule.appendChild(lineNewDate);
  contentSchedule.appendChild(lineNewTime);

  const buttonsSchedule = document.createElement("div");
  buttonsSchedule.classList.add("buttons-schedule");

  const completedScheduleBtn = document.createElement("i");
  completedScheduleBtn.classList.add("fa-check");
  completedScheduleBtn.classList.add("fa-solid");
  completedScheduleBtn.addEventListener("click", () => {
    // const isCompleted = JSON.parse(localStorage.getItem("items"));
    if (item.isCompleted === false) {
      item.isCompleted = true;
      localStorage.setItem("items", JSON.stringify(items));
      newSchedule.classList.toggle("schedule-completed");
      newSchedule.classList.toggle("show-schedule");
    } else {
      item.isCompleted = false;
      localStorage.setItem("items", JSON.stringify(items));
      newSchedule.classList.toggle("schedule-completed");
      newSchedule.classList.toggle("show-schedule");
    }
  });

  const deleteScheduleBtn = document.createElement("i");
  deleteScheduleBtn.classList.add("fa-solid");
  deleteScheduleBtn.classList.add("fa-trash-can");
  deleteScheduleBtn.addEventListener("click", () =>
    deleteSchedule(newSchedule)
  );

  buttonsSchedule.appendChild(completedScheduleBtn);
  buttonsSchedule.appendChild(deleteScheduleBtn);

  newDescription.innerHTML = item.description;
  newDate.innerHTML = item.date;
  newTime.innerHTML = item.time;

  newSchedule.appendChild(contentSchedule);
  newSchedule.appendChild(buttonsSchedule);

  showResults.appendChild(newSchedule);
}

const deleteSchedule = (schedule) => {
  const schedules = showResults.childNodes;

  for (const s of schedules) {
    if (s.isSameNode(schedule)) {
      schedule.remove();
    }
  }
};
