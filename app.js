let add = document.querySelector("#add");
let list = document.querySelector(".list");
let input = document.querySelector("input");

add.addEventListener("click", () => {
  if (input.value !== "") {
    let html = `
    <div class="row">
            <p>${input.value}</p>
            <i class="fa-solid fa-trash"></i>
          </div>
    `;
    list.innerHTML += html;
    input.value = "";
  }
});
list.addEventListener("click", (e) => {
  if (e.target.classList[1] == "fa-trash") {
    e.target.parentElement.remove();
  }
});
