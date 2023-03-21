

const sobremi = document.getElementById("sobremi");
const pagina2 = document.getElementById("pagina2");
const volver = document.getElementById("volver");


sobremi.addEventListener("click", ()=>{
    pagina2.classList.add("entrar");
});

volver.addEventListener("click", ()=>{
    pagina2.classList.remove("entrar");
});