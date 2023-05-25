const templateNavBar = document.createElement('div');
templateNavBar.innerHTML = `
        <nav class="seccion-oscura" >
                <!--Icono-->
                <a href="#"><img class="nav-icon" src="./imagenes/logo.png" alt="icono"></a>
                <!--Links-->
                    <ul class="lista-nav">
                        <li><a class="lista-link" href="./index.html">
                            <i class="fa-solid fa-house"></i>
                            Principal</a></li>
                        <li><a class="lista-link" href="./sobre.html">
                            <i class="fa-solid fa-circle-info"></i>
                            Acerca de mí</a></li>
                        <li><a class="lista-link" href="./servicios.html">
                            <i class="fa-solid fa-hand-holding-hand"></i>
                            Servicios</a></li>
                        <li><a class="lista-link" href="./contacto.html">
                            <i class="fa-solid fa-envelope"></i>
                            Contacto</a></li>
                    </ul>
        </nav>
        
        <style>
        .seccion-oscura {
            background-color: var(--oscuro);
          }

        nav {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.1em solid var(--border);
            width: 100vw;
            height: 7rem;
          }
          
          .nav-icon {
            width: 10rem;
            object-fit: cover;
            margin-left: 3rem;
          }
          
          .lista-nav {
            background-color: inherit;
            display: flex;
            margin-right: 3rem;
          }
          
          .lista-link {
            color: var(--textoNav);
          }
          
          li {
            display: inline;
            list-style-type: none;
            padding: 2em;
            color: #74a57f;
          }
          
          .lista-link:hover {
            color: var(--oscuro2);
          }

          @media only screen and (max-width: 480px) {
         
            /* Navbar */
            nav {
              height: auto;
              flex-direction: column;
              align-items: flex-start;
            }
          
            .nav-icon {
              margin: 1rem 0;
            }
          
            .lista-nav {
              margin: 1rem 0;
              flex-direction: column;
            }
          
            li {
              padding: 0.5em;
            }
          }

        </style>
`;



class Menu extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.appendChild(templateNavBar.cloneNode(true));
    }
}

customElements.define('menu-component', Menu);