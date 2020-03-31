//Get DOM elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

//Dealing with time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Set AM/PM
  const showAmOrPm = true;
  const amOrPm = hour >= 12 ? "PM" : "AM";

  //12hr format
  hour = hour % 12 || 12;

  //Set time
  time.innerHTML = `${hour}<span>:</span>${addZeros(
    min
  )}<span>:</span>${addZeros(sec)} ${showAmOrPm ? amOrPm : ""}`;

  //Add Zeros
  function addZeros(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }

  setTimeout(showTime, 1000);
}

//Set background & greeting
function setBackgroundAndGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = "Good Morning,";
    document.body.style.color = "black";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon,";
    document.body.style.color = "floralwhite";
  } else {
    //Night
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    greeting.textContent = "Good Evening,";
    document.body.style.color = "floralwhite";
  }  

}

//Get name
function getName() {
  if (localStorage.getItem("name") === null) name.textContent = "[Type Name]";
  else name.textContent = localStorage.getItem("name");
}

//Set name
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//Get focus
function getFocus() {
  if (localStorage.getItem("focus") === null)
    focus.textContent = "[Type focus]";
  else focus.textContent = localStorage.getItem("focus");
}

//Set focus
function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

//Event Listeners
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//Call functions
showTime();
setBackgroundAndGreeting();
getName();
getFocus();
