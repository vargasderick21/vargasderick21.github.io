const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


const salirads = document.querySelector("#cerrarads");
const ads2 = document.querySelector("#ads2");

const salirads2 = document.querySelector("#cerrarads");
const ads3 = document.querySelector("#ads2");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");

})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})



salirads.addEventListener("click", () => { 
    ads2.classList.add("hiden")
})


salirads.addEventListener("click",() => {
    ads3.classList.add("hiden");
})
    







































































