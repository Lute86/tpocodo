const templateFooter = document.createElement('div');
templateFooter.innerHTML = `
<footer class="seccion-oscura">
<!-- Divisor -->
<div class="footer-principal" id="footer">
  <div class="footer-col">
    <a href="./index.html"><img class="nav-icon" src="./imagenes/logo.png" alt="logo"></a>
  </div>
  <div class="footer-col">
    <h4 class="footer-h">Seguinos</h4>
    <a href="https://instagram.com/mariana_sole_olmedo/" target="_blank"><img class="iconos"
        src="./imagenes/igIcon.png" alt="icono"></a>
    <a href="https://facebook.com/mariana.olmedo.589" target="_blank"><img class="iconos"
        src="./imagenes/fbBlack.png" alt="icono"></a>
  </div>
  <div class="footer-col">
    <h4 class="footer-h">Horario</h4>
    <p>Lunes a Sabado: 9h00 a 18h00</p>
    <p>Domingos y feriados: cerrado</p>
  </div>
</div>
<!-- Copyright -->
<div id="footer-copyright" class="copyright">
  <p>Copyright 2023</p>
</div>
</footer>

<style>

.seccion-oscura {
    background-color: var(--oscuro);
  }


/* Iconos */

.iconos {
  max-height: 3rem;
  max-width: 3rem;
}

.iconos:hover {
  max-height: 3.2rem;
  max-width: 3.2rem;
}

footer {
    height: fit-content;
    border-top: 0.1em solid var(--border);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .footer-principal {
    display: flex;
    flex-direction: row;
    min-height: 8rem;
    margin-bottom:2rem;
  }
  
  .footer-col {
    flex: 1;
    // padding: 0 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 5rem;
    padding-top: 2rem;
    margin-bottop: 2rem;
  }
  
  footer p {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .footer-h {
    margin-bottom: 0.5rem;
  }

  .copyright {
    background-color: var(--oscuro2);
  }

  @media only screen and (max-width: 480px) {
  
    /* footer */
    .footer-principal {
      flex-direction: column;
    }
  
    .footer-col {
      padding: 0;
      margin-bottom: 1rem;
    }
  }
</style>
`;



class Footer extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.appendChild(templateFooter.cloneNode(true));
    }
}

customElements.define('footer-component', Footer);