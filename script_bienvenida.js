(function(){
  // Mostrar prompt al entrar si no existe nombre
  let nombreCompleto = localStorage.getItem('proyecto_nombre_completo');
  if(!nombreCompleto){
    nombreCompleto = prompt("Ingresa tu nombre y apellido:");
    if(nombreCompleto){
      localStorage.setItem('proyecto_nombre_completo', nombreCompleto.trim());
    } else {
      localStorage.setItem('proyecto_nombre_completo', "Usuario");
      nombreCompleto = "Usuario";
    }
  }

  // Mostrar en todos los elementos con id="welcome"
  const welcomeEls = document.querySelectorAll('#welcome');
  welcomeEls.forEach(el => el.textContent = `Bienvenido, ${nombreCompleto}`);
})();
