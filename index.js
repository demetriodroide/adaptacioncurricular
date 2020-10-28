
// 1 noticia

let titulo = document.createElement("h1");
document.querySelector("#cajas").appendChild(titulo);

let descripcionprimero = document.createElement("h2");
document.querySelector(".primeranoticia").appendChild(descripcionprimero);

// constante 

                     /// objeto dinamico
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
