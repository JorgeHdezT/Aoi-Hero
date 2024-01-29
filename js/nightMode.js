const modoNocheBtn = document.getElementById("checkbox");
    const body = document.body;
    const header = document.querySelector('body > header');
    const navBar_movil = document.querySelector('body .MovilNav');
    const h2 = document.querySelectorAll("h2");

    h2.forEach(element => {
        element.style.color = "#000";
        });

    }

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

        h2.forEach(element => {
        element.style.color = "#fff";
        });
    
        } else {
        modoNocheBtn.textContent = "Modo Noche";
        modoNocheBtn.className = "modo-dia";
        body.style.backgroundColor = "";
        body.style.color = "";
        header.style.backgroundColor = "";
        navBar_movil.style.backdropfilter = "";
        navBar_movil.style.backgroundColor = "";

        h2.forEach(element => {
            element.style.color = "#000";
            });

        }
});


