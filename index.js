const input = document.getElementById("todo");
const ul = document.querySelector("ul");

// console.log(lis);

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
    // input.blur(); Enleve le focus
    li.addEventListener("click", (e) => {
      ul.removeChild(e.target);
    });
  }
});
