const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg") || document.querySelector(".MSG");

if (!msg) {
  console.warn("[calc.js] .msg element not found; output messages will not be shown.");
}

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const setMessage = (text) => {
  if (msg) {
    msg.innerText = text;
  } else {
    console.log(text);
  }
};

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  if (fromCurr.value === toCurr.value) {
    let finalAmount = amtVal;
    setMessage(`${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`);
    return;
  }

  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

  try {
    let response = await fetch(URL);
    if (!response.ok) {
      setMessage(`Failed to fetch rate for ${fromCurr.value} to ${toCurr.value}: ${response.status}`);
      return;
    }

    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];

    if (typeof rate !== "number") {
      setMessage(`Unexpected API response for ${fromCurr.value} to ${toCurr.value}`);
      return;
    }

    let finalAmount = amtVal * rate;
    setMessage(`${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`);
  } catch (error) {
    setMessage(`Cannot update rate: ${error.message}`);
  }
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});