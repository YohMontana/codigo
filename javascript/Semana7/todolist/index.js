// importar nuestro task
const inputTask = document.querySelector(".input_task");
const btnCreate = document.querySelector(".btn_create");
const listTask = document.querySelector(".container_list_task")
//vamos a crear un arreglo vacio
let arrayTasks = [];

//Nota
btnCreate.onclick = function() {
  const taskText = inputTask.value;
  
  //Agira vamos a validar que el taskText no este vacio
  if (taskText === "") {
    alert("Debes completar la caja de texto");
    return;
  }

  const task = new Task(arrayTasks.length + 1, taskText, new Date(), 1)
  arrayTasks.push(task);
  // console.log(arraytastks);
  listTask.innerHTML += task.render();

  inputTask.value = "";
  inputTask.focus();
};

inputTask.addEventListener("keyup",(event) => {
  if (event.key == "Enter") {
    btnCreate.click();
  }
});


function destroy(id) {
  // en la condicion podemos decir que traiga todos los elementos menos el que tenga el id que estamos recibiendo
  //? Que retorna filter? = Array

  const filterTask =  arrayTasks.filter((task) => task._id !== Number(id));
  //Aca estamos diciendo que el valor de arraytask es ahora filtertask
  arrayTasks = filterTask;
  Task.destroyRender(id);
}
// Edit v1
// function edit(id) {
//   const newText = prompt("Ingresa el nuevo nombre de la tarea");
//  // find solo retorna 1 elemento 
//  const oneTask = arrayTasks.find((task) => task._id == id)

//  if (oneTask == undefined) return
 
//   oneTask._name = newText;
    
//   Task.updateRender(id, newText);
// }

//Edit v2
function edit(id) {
  const element = document.querySelector(`#task-name-${id}`);
  element.style.display = "none";
  //para poder crear un elemento de type node tenemos que usar la funcion createElement
  const container = document.createElement("div");
  container.id = `task-edit-${id}`
  container.style.display = "flex";
  container.style.gap = "5px";

  const input = document.createElement("input");
  input.id = `task-edit-${id}`
  input.type = "text";
  input.placeholder = "Ingrese el nuevo nombre";

  const button = document.createElement("button"); // <button>Save</button>
    button.textContent = "Save"
    button.style.backgroundColor = "#ccc";
    button.onclick = function() {
      if (input.value == ""){
        alert("Debe escribir el nombre");
        return;
      }
      // update a nivel de array
      const oneTask = arrayTasks.find((task) => task._id == id);
      oneTask._name = input.value;


      // update a nivel visual
     
     element.textContent = input.value;
     element.style.display = "block";
     container.remove();
    }

  
  const buttonCancel = document.createElement("button"); // <button>Cancel</button>
    buttonCancel.textContent = "Cancel"
    buttonCancel.style.backgroundColor = "#ccc";
    buttonCancel.onclick = function () {
      container.remove();
      element.style.display = "block";
    }


    container.appendChild(input); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" /> </div>
    container.appendChild(button); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" />  <button>Save</button> </div>
    container.appendChild(buttonCancel); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" />  <button>Save</button> <button>Cancel</button> </div>

    // Recordemos que element es el h6 y queremos poner el container al costado
    // parentNode.insertBefore = coloca el containe antes del h6
    // element.nextSibling = cambien la posición a despues del h6

  element.parentNode.insertBefore(container, element.nextSibling);
}