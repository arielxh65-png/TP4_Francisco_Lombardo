const buscarPaisBtn = document.getElementById('buscarPais');
const paisInput = document.getElementById('paisInput');
const listado = document.getElementById('listado');
const errorPais = document.getElementById('error');

async function buscarPais(){
  const q = paisInput.value.trim().toLowerCase();
  listado.innerHTML = '';
  errorPais.textContent = '';

  if(!q){ errorPais.textContent = 'Ingresa un país'; return; }

  try{
    listado.innerHTML = '<p class="small">Buscando...</p>';
    const res = await fetch(`https://publicapi.dev/api/countries/${encodeURIComponent(q)}`);
    if(!res.ok) throw new Error('País no encontrado');
    const data = await res.json();

    listado.innerHTML = `
      <div class="list-item">
        <img src="${data.flag}" alt="bandera" style="width:96px;height:60px;border-radius:6px">
        <div>
          <strong>${data.name}</strong>
          <div class="small">Capital: ${data.capital} • Población: ${data.population.toLocaleString()}</div>
        </div>
      </div>
    `;
  }catch(err){
    listado.innerHTML = '';
    errorPais.textContent = err.message;
  }
}

if(buscarPaisBtn) buscarPaisBtn.addEventListener('click', buscarPais);
if(paisInput) paisInput.addEventListener('keyup', (e)=>{
  if(e.key === 'Enter') buscarPais();
});
