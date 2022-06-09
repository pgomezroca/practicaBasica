var input =document.getElementById("tarea");
var boton =document.getElementById("boton");
var tareas = document.querySelector("ul");
boton.addEventListener('click',function(){
  var trad= input.value
  var li= document.createElement("li")
  li.textContent=trad
  tareas.appendChild(li)
})