// Es una clase porque va a extender de HTMLElement
// HTMLElement: Es una clase nativa de JS
class MyCard extends HTMLElement {
  // como esta clase tiene un extends requerimos de un super
  constructor() {
    // usando supper() dentro del contructur vamos a podrear atributos propios
    super();
  }

  // Para poder asignar html dentro de mi tag
  // debemos llamar a la funcion connectedCallback()

  // esta funcion se ejecuta de forma automatica
  // cuando nuestro component se crea en html
  connectedCallback() {
    this.classList.add("col-12", "col-sm-4", "col-md-3");
    this.innerHTML = `
      <div class="card mt-5">
        <img width="100%" class="card-img-top" src="https://as.com/futbol/imagenes/2005/11/28/mas_futbol/1133132416_740215_0000000001_noticia_grande.jpg" /> 
        <div class="card-body">
          <h5 class="card-title">Hola desde el componente</h5>
          <p class="card-text">El mejor jugador del mundo recibiendo el balon de oro, porque es Messi</p>
          <button class="btn btn-link">Leer mas</button>
        </div>
      </div>
    `;
  }
}

customElements.define("my-card", MyCard);