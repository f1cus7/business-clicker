const businessBtn = document.getElementById("business-btn");
const tapBtn = document.getElementById("tap-btn");
const itemsBtn = document.getElementById("items-btn");
const btnSwap1 = document.getElementById("btn-swap-1");
const btnSwap2 = document.getElementById("btn-swap-2");
const btnSwap3 = document.getElementById("btn-swap-3");
const itemsText = document.getElementById('items-text');
const businessText = document.getElementById('business-text');
const tapText = document.getElementById('tap-text');
const clickSecton = document.getElementById('section-click');

const zarabotok = document.querySelector(".zarabotok");
const businessContainer = document.querySelector(".business-container");
const itemsContainer = document.querySelector('.items-container');
const balanceNode = document.querySelector('.balance');
const opnBusiness = document.querySelector('.opn-business');
const updBusiness = document.querySelector('.upd-business');
const opnBusinessOpened = document.querySelector('.opn-business-opened');

businessBtn.addEventListener("click", () => {
  businessContainer.classList.remove("d-none");
  zarabotok.classList.add("d-none");
  itemsContainer.classList.add('d-none');
  btnSwap1.classList.add("swap-active");
  btnSwap2.classList.remove("swap-active");
  btnSwap3.classList.remove("swap-active");
  document.getElementById('svg-1').style.fill = "white";
  document.getElementById('svg-2').style.fill = "gray";
  document.getElementById('svg-3').style.fill = "gray";
  businessText.style.color = 'white';
  tapText.style.color = 'gray';
  itemsText.style.color = 'gray';
  opnBusinessOpened.classList.add('d-none');
});

tapBtn.addEventListener("click", () => {
  businessContainer.classList.add("d-none");
  zarabotok.classList.remove("d-none");
  itemsContainer.classList.add('d-none');
  btnSwap1.classList.remove("swap-active");
  btnSwap2.classList.add("swap-active");
  btnSwap3.classList.remove("swap-active");
  document.getElementById('svg-1').style.fill = "gray";
  document.getElementById('svg-2').style.fill = "white";
  document.getElementById('svg-3').style.fill = "gray";
  businessText.style.color = 'gray';
  tapText.style.color = 'white';
  itemsText.style.color = 'gray';
  opnBusinessOpened.classList.add('d-none');
});

itemsBtn.addEventListener("click", () => {
  businessContainer.classList.add("d-none");
  zarabotok.classList.add("d-none");
  itemsContainer.classList.add('d-none');
  btnSwap1.classList.remove("swap-active");
  btnSwap2.classList.remove("swap-active");
  btnSwap3.classList.add("swap-active");
  document.getElementById('svg-1').style.fill = "gray";
  document.getElementById('svg-2').style.fill = "gray";
  document.getElementById('svg-3').style.fill = "white";
  businessText.style.color = 'gray';
  tapText.style.color = 'gray';
  itemsText.style.color = 'white';
  opnBusinessOpened.classList.add('d-none');
});

let balance = 0;
let balancePlus = 1.00;

// плюс доллар
clickSecton.addEventListener('click', () => {
  balance += balancePlus;
  balanceNode.textContent = `$ ${balance.toFixed(2)}`;
  const clickAudio = new Audio('audio/click.mp3');
  clickAudio.play();
});

//открытие бизнеса
opnBusiness.addEventListener('click', () => {
  businessContainer.classList.add("d-none");
  opnBusinessOpened.classList.remove('d-none');
})