window.addEventListener('scroll', function () {
    //texto sobre mi
    let sobreMi = this.document.getElementById('sobreMi');
    let posicionSobreMi = sobreMi.getBoundingClientRect().top;
    console.log(posicionSobreMi);
    let tamañoDePantalla = window.innerHeight;
    if (posicionSobreMi < tamañoDePantalla) {
        sobreMi.style.animation = 'animacion2 2s ease'
    }

    //Servicios

    let manicura = this.document.getElementById('manicura');
    let posicionmanicura = manicura.getBoundingClientRect().top;
    console.log(posicionmanicura);
    if (posicionmanicura < tamañoDePantalla) {
        manicura.style.animation = 'animacion2 3s ease'
    }

    let pedicura = this.document.getElementById('pedicura');
    let posicionpedicura = pedicura.getBoundingClientRect().top;
    console.log(posicionpedicura);
    if (posicionpedicura < tamañoDePantalla) {
        pedicura.style.animation = 'animacion2 4s ease'
    }

    let uñas = this.document.getElementById('uñas');
    let posicionuñas = uñas.getBoundingClientRect().top;
    console.log(posicionuñas);
    if (posicionuñas < tamañoDePantalla) {
        uñas.style.animation = 'animacion2 5s ease'
    }

    let productos = this.document.getElementById('productos');
    let anchoDePantalla = window.innerWidth;
    let posicionproductos = productos.getBoundingClientRect().top;
    console.log(posicionproductos);
    if ((posicionproductos < tamañoDePantalla) && (anchoDePantalla < 481)) {
        productos.style.animation = 'animacion2 3s ease'
    }
})