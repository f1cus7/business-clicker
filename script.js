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
const carsNode = document.getElementById('cars');
const planesNode = document.getElementById('planes');
const housesNode = document.getElementById('houses');
const picturesNode = document.getElementById('pictures');
const carsBtn = document.getElementById('cars-btn');
const planesBtn = document.getElementById('planes-btn');
const housesBtn = document.getElementById('houses-btn');
const picturesBtn = document.getElementById('pictures-btn');
const lvlOfUpdate = document.getElementById('lvlOfUpdate');
const bonusForClick = document.getElementById('bonusForClick');
const costOfUpdate = document.getElementById('costOfUpdate');
const businessBonusNode = document.getElementById('businessBonusNode');
const businessBuyedNode = document.getElementById('businessBuyed');
const updBusinessFromJs = document.getElementById('upd-business-from-js');

const zarabotok = document.querySelector(".zarabotok");
const businessContainer = document.querySelector(".business-container");
const itemsContainer = document.querySelector('.items-container');
const balanceNode = document.querySelector('.balance');
const opnBusiness = document.querySelector('.opn-business');
const updBusiness = document.querySelector('.upd-business');
const opnBusinessOpened = document.querySelector('.opn-business-opened');
const updBusinessOpened = document.querySelector('.upd-business-opened');
const btnBuyUpdClick = document.querySelector('.btn-buy-upd-click');

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
  updBusinessOpened.classList.add('d-none');
  carsNode.classList.add('d-none');
  planesNode.classList.add('d-none');
  housesNode.classList.add('d-none');
  picturesNode.classList.add('d-none');
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
  updBusinessOpened.classList.add('d-none');
  carsNode.classList.add('d-none');
  planesNode.classList.add('d-none');
  housesNode.classList.add('d-none');
  picturesNode.classList.add('d-none');
});

itemsBtn.addEventListener("click", () => {
  businessContainer.classList.add("d-none");
  zarabotok.classList.add("d-none");
  itemsContainer.classList.remove('d-none');
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
  updBusinessOpened.classList.add('d-none');
  carsNode.classList.add('d-none');
  planesNode.classList.add('d-none');
  housesNode.classList.add('d-none');
  picturesNode.classList.add('d-none');
});

let balance = 100000000;
let balancePlus = 1.00;
let businessquantity = 0;
const costUpdate = [ 50, 500, 5000, 50000];
const costUpdateBonus = [ 2.00, 5.00, 7.50, 10.00];
let buyedBusinesses = []
let lvlupdate = 0;
let businessBonus = 0;
let buyedItems =        0;
let updatedBusinesses = 0;
let hours = 0;
let minutes = 0;

const businesses = [
  {
    image: 'mem',
    name: 'Создание мемов',
    undername: 'смех продлевает жизнь!',
    btn: 'mem-btn',
    cost: 500,
    bonus: 10,
    onclick: 'memFunc()'
  },
  {
    image: 'shaurma',
    name: 'Шаурмечная',
    undername: 'шаурма появилась в <br>Османской империи.',
    btn: 'shaurma-btn',
    cost: 5000,
    bonus: 100,
    onclick: 'shaurmaFunc()'
  },
  {
    image: 'startup',
    name: 'Открыть стартап',
    undername: 'Стартапы зародились<br> в Кремниевой долине.',
    btn: 'startup-btn',
    cost: 50000,
    bonus: 1000,
    onclick: 'startupFunc()'
  },
  {
    image: 'bank',
    name: 'Создание банка',
    undername: 'Первый банк открылся<br> в 1472 году.',
    btn: 'bank-btn',
    cost: 500000,
    bonus: 10000,
    onclick: 'bankFunc()'
  },
  {
    image: 'country',
    name: 'Основание страны',
    undername: 'Самая маленькая страна<br> — Ватикан.',
    btn: 'country-btn',
    cost: 5000000,
    bonus: 100000,
    onclick: 'countryFunc()'
  },
]

let memBonus = 10;
let shaurmaBonus = 100;
let startUpBonus = 1000;
let BankBonus = 10000;
let CountryBonus = 100000;


function UpdateBalance() {
  balanceNode.textContent = `$ ${balance.toFixed(2)}`;
}

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

updBusiness.addEventListener('click', () => {
  businessContainer.classList.add("d-none");
  updBusinessOpened.classList.remove('d-none');
  if (!buyedBusinesses.length) {

  } else {
  document.querySelector('.ubrat-cherez-d-none').innerHTML = '';
  if (buyedBusinesses.includes('mem')) {
    document.querySelector('.ubrat-m').classList.remove('d-none');
  } if (buyedBusinesses.includes('shaurma')) {
    document.querySelector('.ubrat-s').classList.remove('d-none');
  } if (buyedBusinesses.includes('startup')) {
    document.querySelector('.ubrat-u').classList.remove('d-none');
  } if (buyedBusinesses.includes('bank')) {
    document.querySelector('.ubrat-b').classList.remove('d-none');
  } if (buyedBusinesses.includes('country')) {
    document.querySelector('.ubrat-c').classList.remove('d-none');
  }
  }
})




document.addEventListener('DOMContentLoaded', () => {
  for (let business of businesses) {
    document.getElementById('from-js-for').innerHTML += `
    <!-- ${business.name} -->
      <div class="business-buy" id="${business.image}">
                      <img src="images/${business.image}.png" alt="" class="w-4vw">
                      <p class="fs-2vh">
                          <b style="font-size: 2vh; font-weight: bolder;">${business.name}</b><br>
                          <i class="fs-1-5vh">${business.undername}</i>
                      </p>
                      <button class="btn-buy-business" id="${business.btn}" onClick="${business.onclick}">Купить бизнес</button>
                      <p class="cost-in-dollars">${business.cost} $ <br>
                          <span style="color: #14ad00;">${business.bonus} $ в сек</span>
                      </p>
                  </div>
    `
  }

  });

// function updBusiness() {
//  if (businessquantity === 0) {} 
// }

carsBtn.addEventListener('click', () => {
  itemsContainer.classList.add("d-none");
  carsNode.classList.remove('d-none');
})

planesBtn.addEventListener('click', () => {
  itemsContainer.classList.add("d-none");
  planesNode.classList.remove('d-none');
})

housesBtn.addEventListener('click', () => {
  itemsContainer.classList.add("d-none");
  housesNode.classList.remove('d-none');
})

picturesBtn.addEventListener('click', () => {
  itemsContainer.classList.add("d-none");
  picturesNode.classList.remove('d-none');
})

function UpdateClick() {
  if (lvlupdate === 0) {
    if (balance < costUpdate[0]) {
      const nomoneyAudio = new Audio('audio/no-money.mp3');
      nomoneyAudio.play();
    } else {
      balance -= costUpdate[0];
      balancePlus = costUpdateBonus[0];
      lvlOfUpdate.textContent = '2';
      balanceNode.textContent = `$ ${balance.toFixed(2)}`;
      bonusForClick.textContent = ` ${costUpdateBonus[0].toFixed(2)}`;
      costOfUpdate.textContent = costUpdate[1];
      lvlupdate = 1;
      new Audio('audio/success.mp3').play();
    }
  } else if (lvlupdate === 1) {
    if (balance < costUpdate[1]) {
      const nomoneyAudio = new Audio('audio/no-money.mp3');
      nomoneyAudio.play();
    } else {
      balance -= costUpdate[1];
      balancePlus = costUpdateBonus[1];
      lvlOfUpdate.textContent = '3';
      balanceNode.textContent = `$ ${balance.toFixed(2)}`;
      bonusForClick.textContent = ` ${costUpdateBonus[1].toFixed(2)}`;
      costOfUpdate.textContent = costUpdate[2];
      lvlupdate = 2;
      new Audio('audio/success.mp3').play();
    }
  } else if (lvlupdate === 2) {
    if (balance < costUpdate[2]) {
      const nomoneyAudio = new Audio('audio/no-money.mp3');
      nomoneyAudio.play();
    } else {
      balance -= costUpdate[2];
      balancePlus = costUpdateBonus[2];
      lvlOfUpdate.textContent = '4';
      balanceNode.textContent = `$ ${balance.toFixed(2)}`;
      bonusForClick.textContent = ` ${costUpdateBonus[2].toFixed(2)}`;
      costOfUpdate.textContent = costUpdate[3];
      lvlupdate = 3;
      new Audio('audio/success.mp3').play();
    }
  } else if (lvlupdate === 3) {
    if (balance < costUpdate[3]) {
      const nomoneyAudio = new Audio('audio/no-money.mp3');
      nomoneyAudio.play();
    } else {
      balance -= costUpdate[3];
      balancePlus = costUpdateBonus[3];
      lvlOfUpdate.classList.add('d-none');
      balanceNode.textContent = `$ ${balance.toFixed(2)}`;
      bonusForClick.textContent = ` ${costUpdateBonus[3].toFixed(2)}`;
      costOfUpdate.textContent = costUpdate[4];
      lvlupdate = 4;
      btnBuyUpdClick.classList.add('d-none');
      new Audio('audio/success.mp3').play();
    }
  }
}

function purchase(itemId, cost, bonus) {
  if (balance < cost) {
    new Audio('audio/no-money.mp3').play();
    return;
  }

  document.getElementById(itemId).classList.add('d-none');
  new Audio('audio/success.mp3').play();
  balance -= cost;
  balanceNode.textContent = `$ ${balance.toFixed(2)}`;
  businessBonus += bonus;
  businessBonusNode.textContent = `$ ${businessBonus.toFixed(0)} в секунду`;
}

function buyBusiness(index, itemId, cost, bonus , bonusLvl) {
  if (balance >= cost) {
    businessBuyedNode.innerHTML += `
      <div class="grid grid-cols-[auto_1fr_auto] items-center text-center h-[7vh] w-[25vw] my-[1vh] border border-black rounded-[1vh] text-[2vh] font-bold gap-[1vh]">
        <img src="images/${businesses[index].image}.png" alt="" class="w-[7vh] p-[1vh] place-self-center">
        <p class="place-self-center">${businesses[index].name}</p>
        <p class="place-self-center" style="margin-right: .5vw; color: green">Доход: <span class="${itemId}LvlBusiness">${bonusLvl}</span></p>
      </div>
    `;
    buyedBusinesses.push(itemId);
    updatedBusinesses++;
    document.getElementById('UpdatedBusinessesNode').textContent = updatedBusinesses;
  }
  purchase(itemId, cost, bonus);
}

setInterval(() => {
  balance += businessBonus;
  balanceNode.textContent = `$ ${balance.toFixed(2)}`;
}, 1000)

// Бизнес 1: mem (10 уровней)
let memLvl = 1;
let memLvlBonus = [0,143,126,108,101,94,87,80,73,178];
let memLvlCost  = [0,2500,5000,10000,20000,40000,80000,160000,320000,640000];

// Бизнес 2: shaurma (10 уровней)
let shaurmaLvl = 1;
let shaurmaLvlBonus = [0,1287,1134,972,909,846,783,720,657,1592];
let shaurmaLvlCost  = [0,25000,50000,100000,200000,400000,800000,1600000,3200000,6400000];

// Бизнес 3: startup (10 уровней)
let startupLvl = 1;
let startupLvlBonus = [0,12870,11340,9720,9090,8460,7830,7200,6570,15920];
let startupLvlCost  = [0,250000,500000,1000000,2000000,4000000,8000000,16000000,32000000,64000000];

// Бизнес 4: bank (10 уровней)
let bankLvl = 1;
let bankLvlBonus = [0,41900,36920,31640,29600,27540,25490,23440,21390,52080];
let bankLvlCost  = [0,2500000,5000000,10000000,20000000,40000000,80000000,160000000,320000000,640000000];

// Бизнес 5: country (10 уровней)
let countryLvl = 1;
let countryLvlBonus = [0,72220,63630,54540,51010,47470,43935,40400,36870,89925];
let countryLvlCost  = [0,25000000,50000000,100000000,200000000,400000000,800000000,1600000000,3200000000,6400000000];


// Вызовы для покупки каждого бизнеса
function memFunc() {     buyBusiness(0, 'mem',     500,      10,     memBonus); }
function shaurmaFunc() { buyBusiness(1, 'shaurma', 5000,     100,    shaurmaBonus); }
function startupFunc() { buyBusiness(2, 'startup', 50000,    1000,   startUpBonus); }
function bankFunc() {    buyBusiness(3, 'bank',    500000,   10000,  BankBonus); }
function countryFunc() { buyBusiness(4, 'country', 5000000,  100000, CountryBonus); }







function UpdateBusiness(business, lvl, bonus, cost, alphabet, businessLvl) { 
  if (balance < cost[lvl]) {
    const nomoneyAudio = new Audio('audio/no-money.mp3');
    nomoneyAudio.play();
  } else if (lvl === 9){
    balance -= cost[lvl];
    businessLvl += bonus[lvl];
    businessBonus += bonus[lvl];
    updatedBusinesses++;
    document.querySelector(`.ubrat-${alphabet}`).innerHTML = ``;
    document.querySelector(`.${business}LvlBusiness`).textContent = `$ ${businessLvl}`;
    businessBonusNode.textContent = `$ ${businessBonus} в секунду`;
    document.getElementById('UpdatedBusinessesNode').textContent = updatedBusinesses;
    new Audio('audio/success.mp3').play();
  } else {
    balance -= cost[lvl];
    updatedBusinesses++;

    businessLvl += bonus[lvl];
    businessBonus += bonus[lvl];
    lvl++;
    businessBonusNode.textContent = `$ ${businessBonus} в секунду`;
    document.getElementById(`text-${business}`).textContent = lvl;
    document.querySelector(`.${business}LvlBusiness`).textContent = `$ ${businessLvl}`;
    document.getElementById('UpdatedBusinessesNode').textContent = updatedBusinesses;
    document.getElementById(`btnUpd${business}Bonus`).textContent = `+ ${bonus[lvl]} $ в сек.`;
    document.getElementById(`btnUpd${business}Cost`).textContent = `${cost[lvl]} $`;
    new Audio('audio/success.mp3').play();
  }
  return { lvl, businessLvl };
};

function UpdateMem() {
  const result = UpdateBusiness('mem', memLvl, memLvlBonus, memLvlCost, 'm', memBonus);
  memLvl = result.lvl;
  memBonus = result.businessLvl;
}

function UpdateShaurma() {
  const result = UpdateBusiness('shaurma', shaurmaLvl, shaurmaLvlBonus, shaurmaLvlCost, 's', shaurmaBonus);
  shaurmaLvl = result.lvl;
  shaurmaBonus = result.businessLvl;
}

function UpdateStartup() {
  const result = UpdateBusiness('startup', startupLvl, startupLvlBonus, startupLvlCost, 'u', startUpBonus);
  startupLvl = result.lvl;
  startUpBonus = result.businessLvl;
}

function UpdateBank() {
  const result = UpdateBusiness('bank', bankLvl, bankLvlBonus, bankLvlCost, 'b', BankBonus);
  bankLvl = result.lvl;
  BankBonus = result.businessLvl;
}

function UpdateCountry() {
  const result = UpdateBusiness('country', countryLvl, countryLvlBonus, countryLvlCost, 'c', CountryBonus);
  countryLvl = result.lvl;
  CountryBonus = result.businessLvl;
}


const cars = [
  {
    image: '1',
    name: 'ВАЗ-2107 «Жигули»',
    country: 'Россия',
    cost: '500',
    btn: 'buy-car-1',
    rare: 'default'
  },
  {
    image: '2',
    name: 'Honda Civic',
    country: 'Япония',
    cost: '1000',
    btn: 'buy-car-2',
    rare: 'default'
  },
  {
    image: '3',
    name: 'Toyota Corolla',
    country: 'Япония',
    cost: '1500',
    btn: 'buy-car-3',
    rare: 'default'
  },
  {
    image: '4',
    name: 'Kia Soul',
    country: 'Южная Корея',
    cost: '3000',
    btn: 'buy-car-4',
    rare: 'default'
  },
  {
    image: '5',
    name: 'BMW E46',
    country: 'Германия',
    cost: '5000',
    btn: 'buy-car-5',
    rare: 'default'
  },
  {
    image: '6',
    name: 'Mazda 3',
    country: 'Япония',
    cost: '7500',
    btn: 'buy-car-6',
    rare: 'common'
  },
  {
    image: '7',
    name: 'Mercedes C-class',
    country: 'Германия',
    cost: '10000',
    btn: 'buy-car-7',
    rare: 'common'
  },
  {
    image: '8',
    name: 'Honda Accord',
    country: 'Япония',
    cost: '15000',
    btn: 'buy-car-8',
    rare: 'common'
  },
  {
    image: '9',
    name: 'Volkswagen Golf GTI',
    country: 'Германия',
    cost: '20000',
    btn: 'buy-car-9',
    rare: 'common'
  },
  {
    image: '10',
    name: 'Audi A6 C8',
    country: 'Германия',
    cost: '25000',
    btn: 'buy-car-10',
    rare: 'common'
  },
  {
    image: '11',
    name: 'Tesla Model 3',
    country: 'США',
    cost: '400000',
    btn: 'buy-car-11',
    rare: 'epic'
  },
  {
    image: '12',
    name: 'Porsche Cayman 718',
    country: 'Германия',
    cost: '500000',
    btn: 'buy-car-12',
    rare: 'epic'
  },
  {
    image: '13',
    name: 'BMW M3',
    country: 'Германия',
    cost: '750000',
    btn: 'buy-car-13',
    rare: 'epic'
  },
  {
    image: '14',
    name: 'Tesla Model S',
    country: 'США',
    cost: '1000000',
    btn: 'buy-car-14',
    rare: 'epic'
  },
  {
    image: '15',
    name: 'Porsche 911',
    country: 'Германия',
    cost: '1750000',
    btn: 'buy-car-15',
    rare: 'epic'
  },
  {
    image: '16',
    name: 'Lamborghini Huracán EVO',
    country: 'Италия',
    cost: '2500000',
    btn: 'buy-car-16',
    rare: 'legendary'
  },
  {
    image: '17',
    name: 'Aston Martin DB11',
    country: 'Великобритания',
    cost: '3500000',
    btn: 'buy-car-17',
    rare: 'legendary'
  },
  {
    image: '18',
    name: 'Bugatti Chiron',
    country: 'Франция',
    cost: '5000000',
    btn: 'buy-car-18',
    rare: 'legendary'
  },
  {
    image: '19',
    name: 'Ferrari 812 Superfast',
    country: 'Италия',
    cost: '7000000',
    btn: 'buy-car-19',
    rare: 'legendary'
  },
  {
    image: '20',
    name: 'Pagani Huayra Roadster',
    country: 'Италия',
    cost: '10000000',
    btn: 'buy-car-20',
    rare: 'legendary'
  },
]

const planes = [
  {
    image: '1',
    name: 'Cessna 172 Skyhawk',
    country: 'США',
    cost: '5000',
    btn: 'buy-plane-1',
    rare: 'default'
  },
  {
    image: '2',
    name: 'Cirrus SR20',
    country: 'США',
    cost: '25000',
    btn: 'buy-plane-2',
    rare: 'default'
  },
  {
    image: '3',
    name: 'Piper Meridian',
    country: 'США',
    cost: '50000',
    btn: 'buy-plane-3',
    rare: 'common'
  },
  {
    image: '4',
    name: 'Beechcraft Baron 58',
    country: 'США',
    cost: '100000',
    btn: 'buy-plane-4',
    rare: 'common'
  },
  {
    image: '5',
    name: 'Cessna Citation I',
    country: 'США',
    cost: '500000',
    btn: 'buy-plane-5',
    rare: 'common'
  },
  {
    image: '6',
    name: 'Embraer Phenom 100',
    country: 'Бразилия',
    cost: '1000000',
    btn: 'buy-plane-6',
    rare: 'epic'
  },
  {
    image: '7',
    name: 'Cessna Citation XLS',
    country: 'США',
    cost: '5000000',
    btn: 'buy-plane-7',
    rare: 'epic'
  },
  {
    image: '8',
    name: 'Gulfstream G280',
    country: 'Израиль',
    cost: '10000000',
    btn: 'buy-plane-8',
    rare: 'epic'
  },
  {
    image: '9',
    name: 'Gulfstream G550',
    country: 'США',
    cost: '25000000',
    btn: 'buy-plane-9',
    rare: 'legendary'
  },
  {
    image: '10',
    name: 'Gulfstream G650ER',
    country: 'США',
    cost: '50000000',
    btn: 'buy-plane-10',
    rare: 'legendary'
  },
]

const houses = [
  {
    image: '1',
    name: 'Южная Каролина',
    country: 'США',
    cost: '5000',
    btn: 'buy-house-1',
    rare: 'default'
  },
  {
    image: '2',
    name: 'Южная Каролина',
    country: 'США',
    cost: '10000',
    btn: 'buy-house-2',
    rare: 'default'
  },
  {
    image: '3',
    name: 'Аризона',
    country: 'США',
    cost: '25000',
    btn: 'buy-house-3',
    rare: 'default'
  },
  {
    image: '4',
    name: 'Айова',
    country: 'США',
    cost: '50000',
    btn: 'buy-house-4',
    rare: 'default'
  },
  {
    image: '5',
    name: 'Огайо',
    country: 'США',
    cost: '100000',
    btn: 'buy-house-5',
    rare: 'common'
  },
  {
    image: '6',
    name: 'Арканзас',
    country: 'США',
    cost: '250000',
    btn: 'buy-house-6',
    rare: 'common'
  },
  {
    image: '7',
    name: 'Кентукки',
    country: 'США',
    cost: '500000',
    btn: 'buy-house-7',
    rare: 'common'
  },
  {
    image: '8',
    name: 'Калифорния',
    country: 'США',
    cost: '1000000',
    btn: 'buy-house-8',
    rare: 'common'
  },
  {
    image: '9',
    name: 'Калифорния',
    country: 'США',
    cost: '5000000',
    btn: 'buy-house-9',
    rare: 'epic'
  },
  {
    image: '10',
    name: 'Флорида',
    country: 'США',
    cost: '10000000',
    btn: 'buy-house-10',
    rare: 'epic'
  },
  {
    image: '12',
    name: 'Вашингтон',
    country: 'США',
    cost: '20000000',
    btn: 'buy-house-11',
    rare: 'epic'
  },
  
  {
    image: '11',
    name: 'Калифорния',
    country: 'США',
    cost: '35000000',
    btn: 'buy-house-12',
    rare: 'legendary'
  },
  {
    image: '13',
    name: 'Даллас',
    country: 'США',
    cost: '50000000',
    btn: 'buy-house-13',
    rare: 'legendary'
  },
  {
    image: '14',
    name: 'Калифорния',
    country: 'США',
    cost: '100000000',
    btn: 'buy-house-14',
    rare: 'legendary'
  },
  {
    image: '15',
    name: 'Калифорния',
    country: 'США',
    cost: '250000000',
    btn: 'buy-house-15',
    rare: 'legendary'
  },
]

const pictures = [
  {
    image: '1',
    name: 'Телефонные будки',
    author: 'Ричард Эстес',
    cost: '250000',
    btn: 'buy-picture-1',
    rare: 'default'
  },
  {
    image: '2', 
    name: 'Чоп-сюи',
    author: 'Эдвард Хоппер', 
    cost: '500000',
    btn: 'buy-picture-2', 
    rare: 'default'
  },
  {
    image: '3',
    name: 'Американский пейзаж',
    author: 'Чарльз Шилер',
    cost: '750000',
    btn: 'buy-picture-3',
    rare: 'default'
  },
  {
    image: '4',
    name: 'Прибытие весны, Нормандия',
    author: 'Дэвид Хокни',
    cost: '1500000',
    btn: 'buy-picture-4',
    rare: 'default'
  },
  {
    image: '5',
    name: 'Оушен Парк №54',
    author: 'Ричард Дайбенкорн',
    cost: '3000000',
    btn: 'buy-picture-5',
    rare: 'default'
  },
  {
    image: '6',
    name: 'Синие столбы',
    author: 'Джексон Поллок',
    cost: '5000000',
    btn: 'buy-picture-6',
    rare: 'common'
  },
  {
    image: '7',
    name: 'Снежная буря: Пароход у устья гавани',
    author: 'Дж. М. У. Тернер',
    cost: '8000000',
    btn: 'buy-picture-7',
    rare: 'common'
  },
  {
    image: '8',
    name: 'Бродвей Буги-Вуги',
    author: 'Пит Мондриан',
    cost: '15000000',
    btn: 'buy-picture-8',
    rare: 'common'
  },
  {
    image: '9',
    name: 'Оранжевый, Красный, Жёлтый',
    author: 'Марк Ротко',
    cost: '20000000',
    btn: 'buy-picture-9',
    rare: 'common'
  },
  {
    image: '10',
    name: 'Без названия (Море, Воздух и Солнце)',
    author: 'Сай Твомбли',
    cost: '25000000',
    btn: 'buy-picture-10',
    rare: 'epic'
  },
  {
    image: '11',
    name: 'Парижская улица, дождливый день',
    author: 'Гюстав Кабийботт',
    cost: '60000000',
    btn: 'buy-picture-11',
    rare: 'epic'
  },
  {
    image: '12',
    name: 'Воскресный день на острове Ла Гранжатт',
    author: 'Жорж Сёра',
    cost: '80000000',
    btn: 'buy-picture-12',
    rare: 'epic'
  },
  {
    image: '13',
    name: 'Большой всплеск',
    author: 'Дэвид Хокни',
    cost: '90000000',
    btn: 'buy-picture-13',
    rare: 'epic'
  },
  {
    image: '14',
    name: 'Водяные лилии',
    author: 'Клод Моне',
    cost: '95000000',
    btn: 'buy-picture-14',
    rare: 'legendary'
  },
  {
    image: '15',
    name: 'Пшеничное поле с кипарисами',
    author: 'Винсент Ван Гог',
    cost: '100000000',
    btn: 'buy-picture-15',
    rare: 'legendary'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.cars-container');
  let carsHTML = '';

  for (let car of cars) {
    carsHTML += `
    <div class="car-card ${car.rare}">
      <img src="images/car-${car.image}.png" alt="" class="car-image ${car.rare}">
      <div class="flex justify-evenly items-center">
        <div style="width:10vw; font-weight:bold; font-size: 2vh">
          <p>${car.name}</p>
          <p>Страна: ${car.country}</p>
        </div>
        <button class="btn-buy-car hover:bg-[#15803d] active:bg-[#157347]" 
          data-btn="${car.btn}" 
          data-name="${car.name}" 
          data-cost="${car.cost}" 
          data-country="${car.country}"
          data-image="${car.image}">
          ${car.cost} $
          <div class="flex justify-center">
            <hr style="border-color: white; width: 75%; border-top-width: 0.1vh;">
          </div>
          купить
        </button>
      </div>
    </div>
    `;
  }

  container.innerHTML = carsHTML; // Вставляем весь HTML за один раз

  // Делегирование событий
  container.addEventListener('click', (event) => {
    const target = event.target;

    // Покупка машины
    if (target.classList.contains('btn-buy-car')) {
      const button = target;
      const carData = {
        name: button.dataset.name,
        cost: Number(button.dataset.cost),
        country: button.dataset.country,
        btn: button.dataset.btn,
        image: button.dataset.image
      };

      buyItem(carData, button);
    }

    // Использование машины
    if (target.classList.contains('btn-use-car')) {
      useCar(target);
    }
  });
});

// Функция покупки
function buyItem(car, button) {
  if (balance >= car.cost) {
    console.log(`Куплена машина: ${car.name}, стоимость: ${car.cost}$, страна: ${car.country}`);
    
    const useButton = document.createElement('button');
    useButton.classList.add('btn-use-car', 'hover:bg-blue-500', 'active:bg-blue-700');
    useButton.textContent = 'Использовать';
    useButton.dataset.name = car.name;
    useButton.dataset.image = car.image;
    useButton.dataset.cost = car.cost;
    useButton.dataset.country = car.country;

    button.replaceWith(useButton);
    
    balance -= car.cost;
    buyedItems++;
    document.getElementById('buyedItemsNode').textContent = buyedItems;
    UpdateBalance();
    new Audio('audio/success.mp3').play();
  } else {
    new Audio('audio/no-money.mp3').play();
  }
}

// Функция использования машины
function useCar(button) {
  const carName = button.dataset.name;
  const carImage = button.dataset.image;
  const carCost = button.dataset.cost;
  const carCountry = button.dataset.country;

  // Убираем выделение у всех кнопок "Использовать"
  document.querySelectorAll('.btn-use-car').forEach(btn => {
    btn.classList.remove('bg-blue-700'); // Если ты хочешь выделять активную кнопку
    btn.classList.add('hover:bg-blue-500');
  });

  // Выделяем нажатую кнопку
  button.classList.add('bg-blue-700'); // Цвет для активной машины
  button.classList.remove('hover:bg-blue-500');

  console.log(`Теперь используется машина: \n${carName}\n ${carImage} \n ${carCost} \n ${carCountry}`);

  document.getElementById('using-car').innerHTML = `
  <div class="person-image">
    <img src="images/car-${carImage}.png" alt="" class="person-image-image-vstavka">
  </div>
  <div class="person-text flex items-center">
    <div style="font-size: 1.5vh">
          <p>${carName}</p>
          <p>Страна: ${carCountry}</p>
        </div>
  </div>
  `
}



document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.planes-container');
  let planesHTML = '';

  for (let plane of planes) {
    planesHTML += `
    <div class="car-card ${plane.rare}">
      <img src="images/plane-${plane.image}.jpg" alt="" class="plane-image ${plane.rare}">
      <div class="flex justify-evenly items-center">
        <div style="width:10vw; font-weight:bold; font-size: 2vh">
          <p>${plane.name}</p>
          <p>Страна: ${plane.country}</p>
        </div>
        <button class="btn-buy-plane hover:bg-[#15803d] active:bg-[#157347]" 
          data-btn="${plane.btn}" 
          data-name="${plane.name}" 
          data-cost="${plane.cost}" 
          data-country="${plane.country}"
          data-image="${plane.image}">
          ${plane.cost} $
          <div class="flex justify-center">
            <hr style="border-color: white; width: 75%;">
          </div>
          купить
        </button>
      </div>
    </div>
    `;
  }

  container.innerHTML = planesHTML; // Вставляем весь HTML за один раз

  container.addEventListener('click', (event) => {
    const target = event.target;

    // Покупка самолета
    if (target.classList.contains('btn-buy-plane')) {
      const button = target;
      const planeData = {
        name: button.dataset.name,
        cost: Number(button.dataset.cost),
        country: button.dataset.country,
        btn: button.dataset.btn,
        image: button.dataset.image
      };

      buyPlane(planeData, button);
    }

    // Использование самолета
    if (target.classList.contains('btn-use-plane')) {
      usePlane(target);
    }
  });
});

// Функция покупки самолета
function buyPlane(plane, button) {
  if (balance >= plane.cost) {
    console.log(`Куплен самолет: ${plane.name}, стоимость: ${plane.cost}$, страна: ${plane.country}`);
    
    const useButton = document.createElement('button');
    useButton.classList.add('btn-use-plane', 'hover:bg-blue-500', 'active:bg-blue-700');
    useButton.textContent = 'Использовать';
    useButton.dataset.name = plane.name;
    useButton.dataset.image = plane.image;
    useButton.dataset.cost = plane.cost;
    useButton.dataset.country = plane.country;

    button.replaceWith(useButton);
    
    balance -= plane.cost;
    UpdateBalance();
    buyedItems++;
    document.getElementById('buyedItemsNode').textContent = buyedItems;
    new Audio('audio/success.mp3').play();
  } else {
    new Audio('audio/no-money.mp3').play();
  }
}

// Функция использования самолета
function usePlane(button) {
  const planeName = button.dataset.name;
  const planeImage = button.dataset.image;
  const planeCost = button.dataset.cost;
  const planeCountry = button.dataset.country;

  // Убираем выделение у всех кнопок "Использовать"
  document.querySelectorAll('.btn-use-plane').forEach(btn => {
    btn.classList.remove('bg-blue-700');
    btn.classList.add('hover:bg-blue-500');
  });

  // Выделяем нажатую кнопку
  button.classList.add('bg-blue-700');
  button.classList.remove('hover:bg-blue-500');

  console.log(`Теперь используется самолет: \n${planeName}\n ${planeImage} \n ${planeCost} \n ${planeCountry}`);

  document.getElementById('using-plane').innerHTML = `
  <div class="person-image">
    <img src="images/plane-${planeImage}.jpg" alt="" class="person-image-image-vstavka" style="border-radius: 1vh">
  </div>
  <div class="person-text flex items-center">
    <div style="font-size: 1.5vh">
          <p>${planeName}</p>
          <p>Страна: ${planeCountry}</p>
        </div>
  </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.houses-container');
  let housesHTML = '';

  for (let house of houses) {
    housesHTML += `
    <div class="car-card ${house.rare}">
      <img src="images/house-${house.image}.webp" alt="" class="house-image ${house.rare}">
      <div class="flex justify-evenly items-center">
        <div style="width:10vw; font-weight:bold; font-size: 2vh">
          <p>${house.name}</p>
          <p>Страна: ${house.country}</p>
        </div>
        <button class="btn-buy-house hover:bg-[#15803d] active:bg-[#157347]" 
          data-btn="${house.btn}" 
          data-name="${house.name}" 
          data-cost="${house.cost}" 
          data-country="${house.country}" 
          data-image="${house.image}">
          ${house.cost} $
          <div class="flex justify-center">
            <hr style="border-color: white; width: 75%;">
          </div>
          купить
        </button>
      </div>
    </div>
    `;
  }

  container.innerHTML = housesHTML; // Вставляем весь HTML за один раз

  container.addEventListener('click', (event) => {
    const target = event.target;

    // Покупка дома
    if (target.classList.contains('btn-buy-house')) {
      const button = target;
      const houseData = {
        name: button.dataset.name,
        cost: Number(button.dataset.cost),
        country: button.dataset.country,
        btn: button.dataset.btn,
        image: button.dataset.image
      };

      buyHouse(houseData, button);
    }

    // Использование дома
    if (target.classList.contains('btn-use-house')) {
      useHouse(target);
    }
  });
});

// Функция покупки дома
function buyHouse(house, button) {
  if (balance >= house.cost) {
    console.log(`Куплен дом: ${house.name}, стоимость: ${house.cost}$, страна: ${house.country}`);

    const useButton = document.createElement('button');
    useButton.classList.add('btn-use-house', 'hover:bg-blue-500', 'active:bg-blue-700');
    useButton.textContent = 'Использовать';
    useButton.dataset.name = house.name;
    useButton.dataset.image = house.image;
    useButton.dataset.cost = house.cost;
    useButton.dataset.country = house.country;

    button.replaceWith(useButton);

    balance -= house.cost;
    UpdateBalance();
    buyedItems++;
    document.getElementById('buyedItemsNode').textContent = buyedItems;
    new Audio('audio/success.mp3').play();
  } else {
    new Audio('audio/no-money.mp3').play();
  }
}

// Функция использования дома
function useHouse(button) {
  const houseName = button.dataset.name;
  const houseImage = button.dataset.image;
  const houseCost = button.dataset.cost;
  const houseCountry = button.dataset.country;

  // Убираем выделение у всех кнопок "Использовать"
  document.querySelectorAll('.btn-use-house').forEach(btn => {
    btn.classList.remove('bg-blue-700');
    btn.classList.add('hover:bg-blue-500');
  });

  // Выделяем нажатую кнопку
  button.classList.add('bg-blue-700');
  button.classList.remove('hover:bg-blue-500');

  console.log(`Теперь используется дом: \n${houseName}\n ${houseImage} \n ${houseCost} \n ${houseCountry}`);

  document.getElementById('using-house').innerHTML = `
  <div class="person-image">
    <img src="images/house-${houseImage}.webp" alt="" class="person-image-image-vstavka" style="border-radius: 1vh">
  </div>
  <div class="person-text flex items-center">
    <div style="font-size: 1.5vh">
      <p>${houseName}</p>
      <p>Страна: ${houseCountry}</p>
    </div>
  </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.pictures-container');
  let picturesHTML = '';

  for (let picture of pictures) {
    picturesHTML += `
    <div class="car-card ${picture.rare}">
      <img src="images/picture-${picture.image}.jpg" alt="" class="picture-image ${picture.rare}">
      <div class="flex justify-evenly items-center">
        <div style="width:10vw; font-weight:bold font-size: 2vh">
          <p>Автор: ${picture.author}</p>
          <p>${picture.name}</p>
        </div>
        <button class="btn-buy-picture hover:bg-[#15803d] active:bg-[#157347]" 
          data-btn="${picture.btn}" 
          data-name="${picture.name}" 
          data-cost="${picture.cost}" 
          data-author="${picture.author}" 
          data-image="${picture.image}">
          ${picture.cost} $
          <div class="flex justify-center">
            <hr style="border-color: white; width: 75%;">
          </div>
          купить
        </button>
      </div>
    </div>
    `
  }
  container.innerHTML = picturesHTML; // Вставляем весь HTML за один раз

  container.addEventListener('click', (event) => {
    const target = event.target;

    // Покупка картины
    if (target.classList.contains('btn-buy-picture')) {
      const button = target;
      const pictureData = {
        name: button.dataset.name,
        cost: Number(button.dataset.cost),
        author: button.dataset.author,
        btn: button.dataset.btn,
        image: button.dataset.image
      };

      buyPicture(pictureData, button);
    }

    // Использование картины
    if (target.classList.contains('btn-use-picture')) {
      usePicture(target);
    }
  });
});

// Функция покупки картины
function buyPicture(picture, button) {
  if (balance >= picture.cost) {
    console.log(`Куплена картина: ${picture.name}, стоимость: ${picture.cost}$, автор: ${picture.author}`);

    const useButton = document.createElement('button');
    useButton.classList.add('btn-use-picture', 'hover:bg-blue-500', 'active:bg-blue-700');
    useButton.textContent = 'Использовать';
    useButton.dataset.name = picture.name;
    useButton.dataset.image = picture.image;
    useButton.dataset.cost = picture.cost;
    useButton.dataset.author = picture.author;

    button.replaceWith(useButton);

    balance -= picture.cost;
    UpdateBalance();
    buyedItems++;
    document.getElementById('buyedItemsNode').textContent = buyedItems;
    new Audio('audio/success.mp3').play();
  } else {
    new Audio('audio/no-money.mp3').play();
  }
}

// Функция использования картины
function usePicture(button) {
  const pictureName = button.dataset.name;
  const pictureImage = button.dataset.image;
  const pictureCost = button.dataset.cost;
  const pictureAuthor = button.dataset.author;

  // Убираем выделение у всех кнопок "Использовать"
  document.querySelectorAll('.btn-use-picture').forEach(btn => {
    btn.classList.remove('bg-blue-700');
    btn.classList.add('hover:bg-blue-500');
  });

  // Выделяем нажатую кнопку
  button.classList.add('bg-blue-700');
  button.classList.remove('hover:bg-blue-500');

  console.log(`Теперь используется картина: \n${pictureName}\n ${pictureImage} \n ${pictureCost} \n ${pictureAuthor}`);

  document.getElementById('using-picture').innerHTML = `
  <div class="person-image">
    <img src="images/picture-${pictureImage}.jpg" alt="" class="person-image-image-vstavka" style="border-radius: 1vh">
  </div>
  <div class="person-text flex items-center">
    <div style="font-size: 1.5vh">
      <p>${pictureName}</p>
      <p>Автор: ${pictureAuthor}</p>
    </div>
  </div>
  `;
}


function adBoost(incomePerSecond) {
  let multiplier;

  if (incomePerSecond < 1000) {
      multiplier = 90; // 1.5 минут
  } else if (incomePerSecond < 1000) {
      multiplier = 120; // 2 минуты
  } else if (incomePerSecond < 10000) {
      multiplier = 150; // 2.5 минуты
  } else if (incomePerSecond < 100000) {
      multiplier = 150; // 2.5 минуты
  } else if (incomePerSecond < 500000) {
      multiplier = 180; // 3 минуты
  } else if (incomePerSecond < 1000000) {
      multiplier = 150;  // 2.5 минуты
  } else {
      multiplier = 60;  // 1 минута
  }

  return incomePerSecond * multiplier;
}

setInterval(() => {
  if (buyedBusinesses.length > 0) { 
      let bb = adBoost(businessBonus); // Бонус за рекламу
      document.getElementById('btns-ad-watch').innerHTML = `
          <button class="btn-ad-bb">получить ${bb.toFixed(0)}$ за просмотр рекламы</button>
      `;
      document.querySelector('.btn-ad-bb').addEventListener('click', () => {
        balance += bb;
        UpdateBalance()
        })
  }
}, 2000);





let avatarImg = 1;
const avatarMax = 6;
const avatarImgEl = document.querySelector('.person-image-image');

const updateAvatar = () => {
  avatarImgEl.src = `images/avatar-${avatarImg}.png`;
};

document.getElementById('person-btn-avatar-up').addEventListener('click', () => {
  avatarImg = avatarImg < avatarMax ? avatarImg + 1 : 1;
  updateAvatar();
});

document.getElementById('person-btn-avatar-down').addEventListener('click', () => {
  avatarImg = avatarImg > 1 ? avatarImg - 1 : avatarMax;
  updateAvatar();
});

const btnChangeNickname = document.getElementById('btn-change-nick');
const nicknameNode = document.getElementById('nickname');
const svgOneNode = document.querySelector('.svg-red-nick');
const svgTwoNode = document.querySelector('.svg-agree-nick');

let nickname = '';

btnChangeNickname.addEventListener('click', () => {
  if (svgTwoNode.classList.contains('d-none')) {
  nicknameNode.innerHTML = `<input type="text" id="input-change-nickname" placeholder="10 символов">`
  svgOneNode.classList.toggle('d-none')
  svgTwoNode.classList.toggle('d-none')
  } else {
    if (document.getElementById('input-change-nickname').value.length <= 10 &&
     document.getElementById('input-change-nickname').value != '' &&
     document.getElementById('input-change-nickname').length != 0) {
    nickname = document.getElementById('input-change-nickname').value;
    svgOneNode.classList.toggle('d-none')
    svgTwoNode.classList.toggle('d-none')
    nicknameNode.textContent = nickname;
  } else {
    document.getElementById('input-change-nickname').style.borderColor = 'red';
  }
}
})

function updateTime() {
  minutes++;

  if (minutes === 60) {
      minutes = 0;
      hours++;
  }

  document.getElementById('timeInGame').innerText = `${hours} час ${minutes} мин`;
}

setInterval(updateTime, 60000);


