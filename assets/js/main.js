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
    description: description.value,
    date: date.value,
    time: time.value,
  };

  //executa a função de criar o item em tela
  addSchedule(item);

  //insere o item ao array dos itens
  items.push(item);

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
  newSchedule.classList.add("show-schedule");

  const lineNewDescription = document.createElement("div")
  lineNewDescription.classList.add("line")
  const iNewDescription = document.createElement("i");
  iNewDescription.classList.add("fa-solid");
  iNewDescription.classList.add("fa-message");
  const newDescription = document.createElement("p");
  newDescription.classList.add("show-description");
  lineNewDescription.appendChild(iNewDescription);
  lineNewDescription.appendChild(newDescription);

  const lineNewDate = document.createElement("div")
  lineNewDate.classList.add("line")
  const iNewDate = document.createElement("i");
  iNewDate.classList.add("fa-solid");
  iNewDate.classList.add("fa-calendar-check");
  const newDate = document.createElement("p");
  newDate.classList.add("show-date");
  lineNewDate.appendChild(iNewDate);
  lineNewDate.appendChild(newDate);

  const lineNewTime = document.createElement("div")
  lineNewTime.classList.add("line")
  const iNewTime = document.createElement("i");
  iNewTime.classList.add("fa-solid");
  iNewTime.classList.add("fa-clock");
  const newTime = document.createElement("p");
  newTime.classList.add("show-time");
  lineNewTime.appendChild(iNewTime);
  lineNewTime.appendChild(newTime);

  newDescription.innerHTML = item.description;
  newDate.innerHTML = item.date;
  newTime.innerHTML = item.time;

  // newSchedule.appendChild(iNewDescription);
  // newSchedule.appendChild(newDescription);
  newSchedule.appendChild(lineNewDescription)
  newSchedule.appendChild(lineNewDate)
  newSchedule.appendChild(lineNewTime)
  // newSchedule.appendChild(iNewDate);
  // newSchedule.appendChild(newDate);
  // newSchedule.appendChild(iNewTime);
  // newSchedule.appendChild(newTime);

  showResults.appendChild(newSchedule);
}
