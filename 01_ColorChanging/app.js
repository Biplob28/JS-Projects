const colors = ["blue", "red", "orange", "purple", "green"];
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
body.style.backgroundColor = "brown";

btn.addEventListener("click", () => {
  

  const randomcolor =Math.floor (Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomcolor];
});
