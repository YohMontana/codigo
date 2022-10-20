// 
// Reglas de nuestra clase 
// 1) Que debemos recibir 3 parametros cuando instaciemos esto
// 2) tendremos 3 estados
//    * status 1 = create
//    * status 2 = done
//    * status 3 = delete
// 3) Tendremos una function para poder renderizar nuestra tarea
// 4) Tendremos una function para actualizar nuestra tarea
// 5) Tendremos una function para eliminar nuestra tarea
// CRUD -> CREATE - READ - UPDATE - DELETE
// 
// Esta es la forma en la que instanciamos a la clase task
// const task = new Task("Tarea1", new Date(), 1);

// Importante: Una clase siempre inicia en mayusculas
// Para poder usar import de este archivo tenemos que decir 
//que nuestra clase sea exportable, es decir que pueda ser 
// usada desde otro archivo

class Task {
  // Estos son parametros
  constructor(id, name, date, status) {
    this._id = id;
    this._name = name;
    this._date = date;
    this._status = status;
  }

  static destroyRender(id){
    const element = document.querySelector(`#task-name-${id}`);
    
    element.remove();
  }
//Es una clase no hace falta usar la palabra function

static updateRender(id, name){
  const element = document.querySelector(`#task-name-${id}`);
  //si quieren cambiar el texto de un elemento pueden usar
  // * innerText -> Antiguo
  // * textContent -> 
  element.textContent = name;  
}

render() {
  return `   
          <div id="task-${this._id}" class="item_task">
          <input id= type="checkbox" />
          <h6 id="task-name-${this._id}">${this._name}</h6>
          <button onclick="edit(${this._id})"> 
          <img src="./images/edit.png" width="15" alt=""> 
          </button>
          <button onclick="destroy(${this._id})">
          <img src="./images/delete.png" width="15" alt=""> 
          </button>
       </div>`
}                                                                              

}

