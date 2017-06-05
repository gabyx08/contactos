var cargarPagina = function(){
  cantidadDeContactos ();
  $("#guardar").click(obtenerDatos);
  $("#cancelar").click(obtenerDatos);
};
var cantidadDeContactos = function(){
  var $contador = $(".panel").length;
  $("#contador").text($contador);
};
var obtenerDatos = function(e){
  var $nombreContacto = $("#nombre");
  var $apellidoContacto = $("#apellido");
  var $numeroContacto = $("#numero");
  if(e.target.id === "guardar"){
      crearContacto($nombreContacto,$apellidoContacto,$numeroContacto);
  } else{
      cerrarModal($nombreContacto,$apellidoContacto,$numeroContacto);
  }
};
var crearContacto = function($nombreContacto,$apellidoContacto,$numeroContacto){
  var $divContenedor = $('<div class="panel panel-primary"/>');
  var $divNombre = $('<div class="panel-heading"/>');
  var $divNumero = $('<div class="panel-body"/>');
  $divNombre.text($nombreContacto.val()+" "+$apellidoContacto.val());
  $divNumero.text($numeroContacto.val());
  $divContenedor.append($divNombre);
  $divContenedor.append($divNumero)
  $("#contactos").append($divContenedor);
  cantidadDeContactos ();
  cerrarModal($nombreContacto,$apellidoContacto,$numeroContacto);
};
var cerrarModal = function($nombreContacto,$apellidoContacto,$numeroContacto){
  $nombreContacto.val("");
  $apellidoContacto.val("");
  $numeroContacto.val("");
  $("#agregarContacto").css("display","none");
  $(".modal-backdrop.in").css("display","none");
};

$(document).ready(cargarPagina);
