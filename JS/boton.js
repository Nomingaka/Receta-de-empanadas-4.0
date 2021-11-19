function cambiarTema() {
    var elemento_body = document.getElementById("page-body");

    var temaOscuroActivado = elemento_body.classList.contains("dark");

    if (temaOscuroActivado === true) {
        elemento_body.classList.remove("dark");
    } else {
        elemento_body.classList.add("dark");
    }
}

function nuestrosDatos() {
    alert("Pagina hecha por Elias Franco Valles para el Curso de Programacion Front End")
}