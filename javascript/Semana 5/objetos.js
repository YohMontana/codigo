let persona;

function crearPersona(){
 persona = {
    name: "bruno",
    years: 32,
    gender: "masculino",
    is_adult: function() {
      return this.years >=18;
    } 
 }

 console.log(persona);
}