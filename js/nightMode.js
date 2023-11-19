const modoNocheBtn = document.getElementById("checkbox");
    const body = document.body;
    const header = document.querySelector('body > header');
    const navBar_movil = document.querySelector('body .MovilNav');
    const html = document.querySelector('html');
    const ArticleText = document.querySelectorAll('.OfertaProducto a p');
    const MainArticleText = document.querySelectorAll('.producto a p');
    const OpcionesCuenta = document.querySelectorAll('#OpcionesCuenta div img');
    


    modoNocheBtn.addEventListener("click", () => {
        body.classList.toggle("modo-noche");
        if (body.classList.contains("modo-noche")) {
        modoNocheBtn.textContent = "Modo Día";
        modoNocheBtn.className = "modo-noche";
        body.style.backgroundColor = "#0a2540";
        body.style.color = "#fff";
        header.style.backgroundColor = "#0052a3";
        navBar_movil.style.backdropfilter = "blur(10%)";
        navBar_movil.style.backgroundColor = "transparent";
        html.style.backgroundColor = "#0a2540";
        ArticleText.forEach(parrafo => parrafo.style.color = 'white');
        MainArticleText.forEach(parrafo => parrafo.style.color = 'white');
        OpcionesCuenta.forEach(imagen => imagen.style.filter = 'invert(1)');
    
        } else {
        modoNocheBtn.textContent = "Modo Noche";
        modoNocheBtn.className = "modo-dia";
        body.style.backgroundColor = "";
        body.style.color = "";
        header.style.backgroundColor = "";
        navBar_movil.style.backdropfilter = "";
        navBar_movil.style.backgroundColor = "";
        html.style.backgroundColor = "";
        }
});


