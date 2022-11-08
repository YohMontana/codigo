const listPlayers = document.querySelector("#list-players");
const urlApi = ""
function renderPlayers(){
  listPlayers.innerHTML += `<my-card title='desde-js'></my-card>`;
}

renderPlayers();