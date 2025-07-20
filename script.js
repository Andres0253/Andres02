function mostrar(id) {
  document.querySelectorAll('.seccion').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  event.target.closest('a').classList.add('active');
}

function agregarProducto(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const cantidad = document.getElementById('cantidad').value;
  const estado = document.getElementById('estado').value;
  const fila = `<tr><td>${nombre}</td><td>${cantidad}</td><td>${estado}</td></tr>`;
  document.getElementById('tabla-productos').innerHTML += fila;
  e.target.reset();
}

function filtrarVentas() {
  const filtroDia = document.getElementById('filtroDia').value;
  const filtroMes = document.getElementById('filtroMes').value;
  document.querySelectorAll('.venta').forEach(venta => {
    const fecha = venta.dataset.fecha;
    const [a, m, d] = fecha.split('-');
    const coincideDia = !filtroDia || filtroDia === fecha;
    const coincideMes = !filtroMes || filtroMes === m;
    venta.style.display = (coincideDia && coincideMes) ? 'block' : 'none';
  });
}
