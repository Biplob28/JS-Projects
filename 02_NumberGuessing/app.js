const btn1 = document.querySelector(".btn1");
const body = document.querySelector("body");

btn1.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 10) + 1;
  const number = parseInt(prompt("Enter your number"));
  while (number !== random) {
    number = parseInt(alert("I'm Sorry Try Again"));
  }
  if (number == random) {
    number = parseInt(alert("You Guessed it right!! "));
  }
});
