const templateNavBar = document.createElement('div');
templateNavBar.innerHTML = `
        <nav class="seccion-oscura" >
                <!--Icono-->
                <a href="#"><img class="nav-icon" src="./imagenes/logo.png" alt="icono"></a>

                <!--Links-->
                
                <input id="checkbox" type="checkbox">
                <img id="bar" src="./imagenes/bars.svg" />
                <img id="xmark" src="./imagenes/xmark.svg" />
               
                    <ul class="lista-nav">
                        <li><a class="lista-link" href="./index.html">
                        <img class="icon" src="./imagenes/house.svg" />
                            Principal</a></li>
                        <li><a class="lista-link" href="./sobre.html">
                        <img class="icon" src="./imagenes/circle-info.svg" />
                            Acerca de mí</a></li>
                        <li><a class="lista-link" href="./servicios.html">
                        <img class="icon" src="./imagenes/handshake.svg" />
                            Servicios</a></li>
                        <li><a class="lista-link" href="./contacto.html">
                        <img class="icon" src="./imagenes/envelope.svg" />
                            Contacto</a></li>
                    </ul>
             
        </nav>
        
        <style>
        .seccion-oscura {
            background-color: var(--oscuro);
          }

        #checkbox, #bar, #xmark  {
            display: none;
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

        
          
          .icon {
            width: 1.2rem;
            margin-left: 1.5rem;
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

          @media only screen and (max-width: 1110px) {
         
            /* Navbar */

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

           

            nav {
                font-family: sans-serif;
                background-color: var(--oscuro);
                height: auto;
                flex-direction: column;
                align-items: flex-start;
                // padding: 10px 12px;
                position: relative;
            }

            #checkbox, #bar, #xmark {
                display: flex;
                width: 2rem;
                height:2rem;
                position: absolute;
                top: 10px;
                left: 12px;
                cursor: pointer;
              }

              #bar, #xmark {
                pointer-events: none;
                font-size:2rem;
              }

              #checkbox {
                opacity: 0;
              }

              #xmark {
                display: none;
              }

              #checkbox:checked ~ #bar {
                display:none;
              }

              #checkbox:checked ~ #xmark {
                display:flex;
              }
          
            .nav-icon {
              margin: 0 4rem;
              height:4rem;
            }
          
            .lista-nav {
              width:100%;
              display: block;
              flex-direction: column;
              position: absolute;
              top: -10.2rem;
              z-index:-1;
              justify-content: start;
              align-items: start;
              transition:300ms;
            }
          
            .lista-nav li {
                list-style: none;
                margin:0;
                padding:0;
            }

            .lista-nav li a {
               text-decoration: none;
               color: inherit;
               display: block;
               padding: 1.2em 0rem;
               margin: 0;
            }

            .lista-nav li a:hover {
                color: black;
            }

            #checkbox:checked ~ .lista-nav {
                top:4rem;
                z-index:1;
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