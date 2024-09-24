const btnToggle = document.querySelector(".barGroup");
const [bar1, bar2, bar3] = btnToggle.querySelectorAll("section");

btnToggle.addEventListener("click", () => {
    btnToggle.classList.toggle("on");
});