import { data } from "./data.js";

let container = document.querySelector(".div-container");
let icon = "fa-solid fa-plus";

function cardRender() {
  data.forEach((eleman) => {
    let cardTemplate = `
       <div class="accordion">
         <div class="text-container">
          <h4>
            ${eleman.title}  
          </h4>
          <button class="button">
          <i class="${icon}"></i>
          </button>
          </div>
          <p class="text" >
          ${eleman.description}
          </p>
       </div> 
       `;

    container.insertAdjacentHTML("beforeend", cardTemplate);
  });
}

cardRender();

const accordion = document.querySelectorAll(".accordion");

accordion.forEach((item) => {
  item.querySelector(".button").addEventListener("click", () => {
    item.querySelector(".text").classList.toggle("active");

    if (item.querySelector(".text").classList.contains("active")) {
      item.querySelector("i").className = "fa-solid fa-minus";
    } else {
      item.querySelector("i").className = "fa-solid fa-plus";
    }
  });
});
