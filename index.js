
// 1 noticia

let tituloprimero = document.createElement("h1");
//tituloprimero.innerText = "la mega fiesta";
document.querySelector(".primeranoticia").appendChild(tituloprimero);

let descripcionprimero = document.createElement("h2");
//descripcionprimero.innerText = "de 150 personas mas popular del verano";
document.querySelector(".primeranoticia").appendChild(descripcionprimero);

// 2 noticia

let titulosegundo = document.createElement("h1");
//titulosegundo.innerText = "el español";
document.querySelector(".segundanoticia").appendChild(titulosegundo);

let descripcionsegundo = document.createElement("h2");
//descripcionsegundo.innerText = "asesino a un soldado aleman";
document.querySelector(".segundanoticia").appendChild(descripcionsegundo);

// 3 noticia

let titulotercero = document.createElement("h1");
//titulotercero.innerText = "la fabrika";
document.querySelector(".terceranoticia").appendChild(titulotercero);

let descripciontercero = document.createElement("h2");
//descripciontercero.innerText = "textil donde trabajan muchas personas";
document.querySelector(".terceranoticia").appendChild(descripciontercero);

// constante 

const noticias = [
{
    titulo :        "la mega fiesta",
    descripcion:    "de 150 personas mas popular del verano"
},

{
    titulo :        "el español",
    descripcion:    "asesino a un soldado aleman"
},

{
    titulo :        "la fabrika",
    descripcion:    "textil donde trabajan muchas personas"
}

];