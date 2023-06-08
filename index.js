document.getElementById("body").addEventListener("submit", crear);

function opcion() {
  let sel = document.getElementById("inicial").value;
  console.log(sel);
  switch (sel) {
    case '1':
      document.getElementById("formulario").innerHTML = `
            <div class="data">
            <div id="texto">
              <input type="text" id="asset" class="form-control my-3" placeholder="Asset">
              <input type="text" id="serial" class="form-control my-3" placeholder="Serial">
              <input type="text" id="modelo" class="form-control my-3" placeholder="Modelo">
              <input type="text" id="marca" class="form-control my-3" placeholder="Marca">
              <input type="text" id="cpu" class="form-control my-3" placeholder="CPU">
              <input type="text" id="organizacion" class="form-control my-3" placeholder="Organizacion">
            </div>
            <div id="seleccion" class="border border-2">
              <p class="opc">Tipo: </p>
              <select id="Tipo" class="form-select" aria-label="Default select example">
                <option selected>--Tipo--</option>
                <option value="1">Desktop</option>
                <option value="2">Laptop</option>
              </select>
              <p class="opc">Status: </p>
              <select id="Status" class="form-select" aria-label="Default select example">
                <option selected>--Status--</option>
                <option value="1">Operaciones</option>
                <option value="2">Stock</option>
              </select>
              <p class="opc">Sistema Operativo: </p>
              <select id="SO" class="form-select" aria-label="Default select example">
                <option selected>--Sistema Operativo--</option>
                <option value="1">Windows</option>
                <option value="2">MAC</option>
                <option value="3">Linux</option>
              </select>
              <p class="opc">RAM: </p>
              <select id="RAM" class="form-select" aria-label="Default select example">
                <option selected>--RAM--</option>
                <option value="1">4 GB</option>
                <option value="2">8 GB</option>
                <option value="3">12 GB</option>
                <option value="4">16 GB</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir">Enviar</button>
            `
      break;
    case '2':
      document.getElementById("formulario").innerHTML = `
            <div class="data">
            <div id="texto">
              <input type="text" id="asset" class="form-control my-3" placeholder="Asset">
              <input type="text" id="serial" class="form-control my-3" placeholder="Serial">
              <input type="text" id="modelo" class="form-control my-3" placeholder="Modelo">
              <input type="text" id="marca" class="form-control my-3" placeholder="Marca">
              <input type="text" id="organizacion" class="form-control my-3" placeholder="Organizacion">
            </div>
            <div id="seleccion" class="border border-2">
              <p class="opc">Status: </p>
              <select id="Status" class="form-select" aria-label="Default select example">
                <option selected>--Status--</option>
                <option value="1">Operaciones</option>
                <option value="2">Stock</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir">Enviar</button>
            `
    case '3':
      document.getElementById("formulario").innerHTML = `
            <div class="data">
            <div id="texto">
              <input type="text" id="asset" class="form-control my-3" placeholder="Asset">
              <input type="text" id="serial" class="form-control my-3" placeholder="Serial">
              <input type="text" id="modelo" class="form-control my-3" placeholder="Modelo">
              <input type="text" id="marca" class="form-control my-3" placeholder="Marca">
              <input type="text" id="organizacion" class="form-control my-3" placeholder="Organizacion">
            </div>
            <div id="seleccion" class="border border-2">
              <p class="opc">Status: </p>
              <select id="Status" class="form-select" aria-label="Default select example">
                <option selected>--Status--</option>
                <option value="1">Operaciones</option>
                <option value="2">Stock</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir">Enviar</button>
            `
      break;
  }
}
function crear(e) {
  let selc = document.getElementById("inicial").value;
  switch (selc) {
    case '1':
      asset = document.getElementById("asset").value;
      serial = document.getElementById("serial").value;
      modelo = document.getElementById("modelo").value;
      marca = document.getElementById("marca").value;
      cpu = document.getElementById("cpu").value;
      org = document.getElementById("organizacion").value;
      let sel1 = document.getElementById("Tipo");
      let sel2 = document.getElementById("Status");
      let sel3 = document.getElementById("SO");
      let sel4 = document.getElementById("RAM");
      tipo = sel1.options[sel1.selectedIndex].text;
      estatus = sel2.options[sel2.selectedIndex].text;
      so = sel3.options[sel3.selectedIndex].text;
      ram = sel4.options[sel4.selectedIndex].text;

      if (asset === '' || serial === '' || modelo === '' || marca === '' || cpu === '' || org === '' || tipo === '--Tipo--' || estatus === '--Status--' || so === '--Sistema Operativo--' || ram === '--RAM--') {
        alert("Error. No se pudo añadir el elemento favor de intentarlo de nuevo");
        e.preventDefault();
      } else {
        let pc = {
          asset,
          serial,
          modelo,
          marca,
          cpu,
          org,
          tipo,
          estatus,
          so,
          ram
        }

        if (localStorage.getItem("PCs") === null) {
          let pcs = [];
          pcs.push(pc);
          localStorage.setItem("PCs", JSON.stringify(pcs));
        } else {
          let pcs = JSON.parse(localStorage.getItem("PCs"));
          pcs.push(pc);
          localStorage.setItem("PCs", JSON.stringify(pcs));
        }
        document.getElementById("formulario").reset();
      }
      break;
    case '2':
      asset = document.getElementById("asset").value;
      serial = document.getElementById("serial").value;
      modelo = document.getElementById("modelo").value;
      marca = document.getElementById("marca").value;
      org = document.getElementById("organizacion").value;
      let sel5 = document.getElementById("Status");
      estatus = sel5.options[sel5.selectedIndex].text;
      if (asset === '' || serial === '' || modelo === '' || marca === '' || org === '' || estatus === '--Status--') {
        alert("Error. No se pudo añadir el elemento favor de intentarlo de nuevo");
        e.preventDefault();
      } else {

        let monitor = {
          asset,
          serial,
          modelo,
          marca,
          org,
          estatus
        }

        if (localStorage.getItem("Monitors") === null) {
          let monitors = [];
          monitors.push(monitor);
          localStorage.setItem("Monitors", JSON.stringify(monitors));
        } else {
          let monitors = JSON.parse(localStorage.getItem("Monitors"));
          monitors.push(monitor);
          localStorage.setItem("Monitors", JSON.stringify(monitors));
        }
        document.getElementById("formulario").reset();
      }
      break;
    case '3':
      asset = document.getElementById("asset").value;
      serial = document.getElementById("serial").value;
      modelo = document.getElementById("modelo").value;
      marca = document.getElementById("marca").value;
      org = document.getElementById("organizacion").value;
      let sel6 = document.getElementById("Status");
      estatus = sel6.options[sel6.selectedIndex].text;
      if (asset === '' || serial === '' || modelo === '' || marca === '' || org === '' || estatus === '--Status--') {
        alert("Error. No se pudo añadir el elemento favor de intentarlo de nuevo");
        e.preventDefault();
      } else {

        let headset = {
          asset,
          serial,
          modelo,
          marca,
          org,
          estatus
        }

        if (localStorage.getItem("Headsets") === null) {
          let headsets = [];
          headsets.push(headset);
          localStorage.setItem("Headsets", JSON.stringify(headsets));
        } else {
          let headsets = JSON.parse(localStorage.getItem("Headsets"));
          headsets.push(headset);
          localStorage.setItem("Headsets", JSON.stringify(headsets));
        }
        document.getElementById("formulario").reset();
      }
      break;
  }


}
function leer() {
  let sele = document.getElementById("inv").value;
  switch (sele) {
    case '1':
      let pcs = JSON.parse(localStorage.getItem("PCs"));
      document.getElementById("tbody").innerHTML = "";
      for (let i = 0; i < pcs.length; i++) {
        let asset = pcs[i].asset;
        let serial = pcs[i].serial;
        let modelo = pcs[i].modelo;
        let marca = pcs[i].marca;
        let cpu = pcs[i].cpu;
        let org = pcs[i].org;
        let tipo = pcs[i].tipo;
        let estatus = pcs[i].estatus;
        let so = pcs[i].so;
        let ram = pcs[i].ram;

        document.getElementById("tbody").innerHTML +=
          `<tr>
            <td>${asset}</td>
            <td>${serial}</td>
            <td>${modelo}</td>
            <td>${marca}</td>
            <td>${cpu}</td>
            <td>${org}</td>
            <td>${tipo}</td>
            <td>${estatus}</td>
            <td>${so}</td>
            <td>${ram}</td>
            <td><button onClick="eliminar('${asset}')" class="btn btn-danger">Eliminar</button></td>
            <td><button onClick="editar('${asset}')" class="btn btn-success">Editar</button></td>
        </tr>
        `
      }
      break;
    case '2':
      let monitors = JSON.parse(localStorage.getItem("Monitors"));
      document.getElementById("tbody").innerHTML = "";
      for (let i = 0; i < monitors.length; i++) {
        let asset = monitors[i].asset;
        let serial = monitors[i].serial;
        let modelo = monitors[i].modelo;
        let marca = monitors[i].marca;
        let org = monitors[i].org;
        let estatus = monitors[i].estatus;

        document.getElementById("tbody").innerHTML +=
          `<tr>
              <td>${asset}</td>
              <td>${serial}</td>
              <td>${modelo}</td>
              <td>${marca}</td>
              <td>N/A</td>
              <td>${org}</td>
              <td>N/A</td>
              <td>${estatus}</td>
              <td>N/A</td>
              <td>N/A</td>
              <td><button onClick="eliminar('${asset}')" class="btn btn-danger">Eliminar</button></td>
              <td><button onClick="editar('${asset}')" class="btn btn-success">Editar</button></td>
          </tr>
        `
      }
      break;
    case '3':
      let headsets = JSON.parse(localStorage.getItem("Headsets"));
      document.getElementById("tbody").innerHTML = "";
      for (let i = 0; i < headsets.length; i++) {
        let asset = headsets[i].asset;
        let serial = headsets[i].serial;
        let modelo = headsets[i].modelo;
        let marca = headsets[i].marca;
        let org = headsets[i].org;
        let estatus = headsets[i].estatus;

        document.getElementById("tbody").innerHTML +=
          `
        <tr>
          <td>${asset}</td>
          <td>${serial}</td>
          <td>${modelo}</td>
          <td>${marca}</td>
          <td>N/A</td>
          <td>${org}</td>
          <td>N/A</td>
          <td>${estatus}</td>
          <td>N/A</td>
          <td>N/A</td>
          <td><button onClick="eliminar('${asset}')" class="btn btn-danger">Eliminar</button></td>
          <td><button onClick="editar('${asset}')" class="btn btn-success">Editar</button></td>
        </tr>
        `
      }
      break;
  }
}
function editar(asset) {
  let selec = document.getElementById("inv").value;
  switch (selec) {
    case '1':
      let pcs = JSON.parse(localStorage.getItem("PCs"));
      for (let i = 0; i < pcs.length; i++) {
        if (pcs[i].asset === asset) {
          document.getElementById("body").innerHTML = `
          <h2>Editar Elemento</h2>
          <form id="formulario">
            <div class="data">
              <div id="texto">
                <input type="text" id="newasset" class="form-control my-3" placeholder="${pcs[i].asset}">
                <input type="text" id="newserial" class="form-control my-3" placeholder="${pcs[i].serial}">
                <input type="text" id="newmodelo" class="form-control my-3" placeholder="${pcs[i].modelo}">
                <input type="text" id="newmarca" class="form-control my-3" placeholder="${pcs[i].marca}">
                <input type="text" id="newcpu" class="form-control my-3" placeholder="${pcs[i].cpu}">
                <input type="text" id="neworganizacion" class="form-control my-3" placeholder="${pcs[i].org}">
              </div>
              <div id="seleccion" class="border border-2">
                <p class="opc">Tipo: </p>
                <select id="newTipo" class="form-select" aria-label="Default select example">
                  <option selected>${pcs[i].tipo}</option>
                  <option value="1">Desktop</option>
                  <option value="2">Laptop</option>
                </select>
                <p class="opc">Status: </p>
                <select id="newStatus" class="form-select" aria-label="Default select example">
                  <option selected>${pcs[i].estatus}</option>
                  <option value="1">Operaciones</option>
                  <option value="2">Stock</option>
                </select>
                <p class="opc">Sistema Operativo: </p>
                <select id="newSO" class="form-select" aria-label="Default select example">
                  <option selected>${pcs[i].so}</option>
                  <option value="1">Windows</option>
                  <option value="2">MAC</option>
                  <option value="3">Linux</option>
                </select>
                <p class="opc">RAM: </p>
                <select id="newRAM" class="form-select" aria-label="Default select example">
                  <option selected>${pcs[i].ram}</option>
                  <option value="1">4 GB</option>
                  <option value="2">8 GB</option>
                  <option value="3">12 GB</option>
                  <option value="4">16 GB</option>
                </select>
              </div>
              <button class="btn btn-success editdel" onclick="actualizar('${i}', '${selec}')">Actualizar</button>
              <button class="btn btn-primary editdel" onclick="vistaPrincipal()">Cancelar</button>
            </div>
            `
        }
      }
      break;
    case '2':
      let monitors = JSON.parse(localStorage.getItem("Monitors"));
      for (let i = 0; i < monitors.length; i++) {
        if (monitors[i].asset === asset) {
          document.getElementById("body").innerHTML = `
          <h2>Editar Elemento</h2>
          <form id="formulario">
            <div class="data">
              <div id="texto">
              <input type="text" id="newasset" class="form-control my-3" placeholder="${monitors[i].asset}">
              <input type="text" id="newserial" class="form-control my-3" placeholder="${monitors[i].serial}">
              <input type="text" id="newmodelo" class="form-control my-3" placeholder="${monitors[i].modelo}">
              <input type="text" id="newmarca" class="form-control my-3" placeholder="${monitors[i].marca}">
              <input type="text" id="neworganizacion" class="form-control my-3" placeholder="${monitors[i].org}">
              </div>
              <div id="seleccion" class="border border-2">
                <p class="opc">Status: </p>
                <select id="newStatus" class="form-select" aria-label="Default select example">
                  <option selected>${monitors[i].estatus}</option>
                  <option value="1">Operaciones</option>
                  <option value="2">Stock</option>
                </select>
              </div>
              <button class="btn btn-success editdel" onclick="actualizar('${i}', '${selec}')">Actualizar</button>
              <button class="btn btn-primary editdel" onclick="vistaPrincipal()">Cancelar</button>
            </div>
            `
        }
      }
      break;
    case '3':
      let headsets = JSON.parse(localStorage.getItem("Headsets"));
      for (let i = 0; i < headsets.length; i++) {
        if (headsets[i].asset === asset) {
          document.getElementById("body").innerHTML = `
          <h2>Editar Elemento</h2>
          <form id="formulario">
            <div class="data">
              <div id="texto">
              <input type="text" id="newasset" class="form-control my-3" placeholder="${headsets[i].asset}">
              <input type="text" id="newserial" class="form-control my-3" placeholder="${headsets[i].serial}">
              <input type="text" id="newmodelo" class="form-control my-3" placeholder="${headsets[i].modelo}">
              <input type="text" id="newmarca" class="form-control my-3" placeholder="${headsets[i].marca}">
              <input type="text" id="neworganizacion" class="form-control my-3" placeholder="${headsets[i].org}">
              </div>
              <div id="seleccion" class="border border-2">
                <p class="opc">Status: </p>
                <select id="newStatus" class="form-select" aria-label="Default select example">
                  <option selected>${headsets[i].estatus}</option>
                  <option value="1">Operaciones</option>
                  <option value="2">Stock</option>
                </select>
              </div>
              <button class="btn btn-success editdel" onclick="actualizar('${i}', '${selec}')">Actualizar</button>
              <button class="btn btn-primary editdel" onclick="vistaPrincipal()">Cancelar</button>
            </div>
            `
        }
      }
      break;
  }
}
function actualizar(i, selec) {
  switch (selec) {
    case '1':
      let pcs = JSON.parse(localStorage.getItem("PCs"));
      pcs[i].asset = document.getElementById("newasset").value;
      pcs[i].serial = document.getElementById("newserial").value;
      pcs[i].modelo = document.getElementById("newmodelo").value;
      pcs[i].marca = document.getElementById("newmarca").value;
      pcs[i].cpu = document.getElementById("newcpu").value;
      pcs[i].org = document.getElementById("neworganizacion").value;
      let upd = document.getElementById("newTipo");
      let upd1 = document.getElementById("newStatus");
      let upd2 = document.getElementById("newSO");
      let upd3 = document.getElementById("newRAM");
      pcs[i].tipo = upd.options[upd.selectedIndex].text;
      pcs[i].estatus = upd1.options[upd1.selectedIndex].text;
      pcs[i].so = upd2.options[upd2.selectedIndex].text;
      pcs[i].ram = upd3.options[upd3.selectedIndex].text;
      if (pcs[i].asset === '' || pcs[i].serial === '' || pcs[i].modelo === '' || pcs[i].marca === '' || pcs[i].cpu === '' || pcs[i].org === '' || pcs[i].tipo === '--Tipo--' || pcs[i].estatus === '--Status--' || pcs[i].so === '--Sistema Operativo--' || pcs[i].ram === '--RAM--') {
        alert("Error. No se pudo actualizar el elemento ya que algunos campos estaban vacios, favor de intentarlo de nuevo");
      } else {
        localStorage.setItem("PCs", JSON.stringify(pcs));
        vistaPrincipal();
      }
      break;
    case '2':
      let monitors = JSON.parse(localStorage.getItem("Monitors"));
      monitors[i].asset = document.getElementById("newasset").value;
      monitors[i].serial = document.getElementById("newserial").value;
      monitors[i].modelo = document.getElementById("newmodelo").value;
      monitors[i].marca = document.getElementById("newmarca").value;
      monitors[i].org = document.getElementById("neworganizacion").value;
      let upd4 = document.getElementById("newStatus");
      monitors[i].estatus = upd4.options[upd4.selectedIndex].text;
      if (monitors[i].asset === '' || monitors[i].serial === '' || monitors[i].modelo === '' || monitors[i].marca === '' || monitors[i].org === '' || monitors[i].estatus === '--Status--') {
        alert("Error. No se pudo actualizar el elemento ya que algunos campos estaban vacios, favor de intentarlo de nuevo");
      } else {
        localStorage.setItem("Monitors", JSON.stringify(monitors));
        vistaPrincipal();
      }
      break;
    case '3':
      let headsets = JSON.parse(localStorage.getItem("Headsets"));
      headsets[i].asset = document.getElementById("newasset").value;
      headsets[i].serial = document.getElementById("newserial").value;
      headsets[i].modelo = document.getElementById("newmodelo").value;
      headsets[i].marca = document.getElementById("newmarca").value;
      headsets[i].org = document.getElementById("neworganizacion").value;
      let upd5 = document.getElementById("newStatus");
      headsets[i].estatus = upd5.options[upd5.selectedIndex].text;
      if (headsets[i].asset === '' || headsets[i].serial === '' || headsets[i].modelo === '' || headsets[i].marca === '' || headsets[i].org === '' || headsets[i].estatus === '--Status--') {
        alert("Error. No se pudo actualizar el elemento ya que algunos campos estaban vacios, favor de intentarlo de nuevo");
      } else {
        localStorage.setItem("Headsets", JSON.stringify(headsets));
        vistaPrincipal();
      }
      break;
  }
}
function eliminar(asset) {
  let select = document.getElementById("inv").value;
  switch (select) {
    case '1':
      let pcs = JSON.parse(localStorage.getItem("PCs"));
      for (let i = 0; i < pcs.length; i++) {
        if (pcs[i].asset === asset) {
          pcs.splice(i, 1);
        }
      }
      localStorage.setItem("PCs", JSON.stringify(pcs));
      leer();
      break;
    case '2':
      let monitors = JSON.parse(localStorage.getItem("Monitors"));
      for (let i = 0; i < monitors.length; i++) {
        if (monitors[i].asset === asset) {
          monitors.splice(i, 1);
        }
      }
      localStorage.setItem("Monitors", JSON.stringify(monitors));
      leer();
      break;
    case '3':
      let headsets = JSON.parse(localStorage.getItem("Headsets"));
      for (let i = 0; i < headsets.length; i++) {
        if (headsets[i].asset === asset) {
          headsets.splice(i, 1);
        }
      }
      localStorage.setItem("Headsets", JSON.stringify(headsets));
      leer();
      break;
  }
}
function vistaPrincipal() {
  document.getElementById("body").innerHTML = `
  <h2>Agregar elemento</h2>
    <p>Favor de seleccionar lo que desea agregar</p>
    <select id="inicial" class="form-select" aria-label="Default select example" onchange="opcion()">
      <option selected>--Seleccionar opciona agregar--</option>
      <option value="1">PC</option>
      <option value="2">Monitor</option>
      <option value="3">Headsets</option>
<!--  <option value="4">Mouse</option>
      <option value="5">Teclados</option> -->
    </select>
    <form id="formulario">
      <div class="data">
        <div id="texto">
          <input type="text" id="asset" class="form-control my-3" placeholder="Asset" disabled>
          <input type="text" id="serial" class="form-control my-3" placeholder="Serial" disabled>
          <input type="text" id="modelo" class="form-control my-3" placeholder="Modelo" disabled>
          <input type="text" id="marca" class="form-control my-3" placeholder="Marca" disabled>
          <input type="text" id="cpu" class="form-control my-3" placeholder="CPU" disabled>
          <input type="text" id="organizacion" class="form-control my-3" placeholder="Organizacion" disabled>
        </div>
        <div id="seleccion" class="border border-2">
          <p class="opc">Tipo: </p>
          <select id="Tipo" class="form-select" aria-label="Default select example" disabled>
            <option selected>--Tipo--</option>
            <option value="1">Desktop</option>
            <option value="2">Laptop</option>
          </select>
          <p class="opc">Status: </p>
          <select id="Status" class="form-select" aria-label="Default select example" disabled>
            <option selected>--Status--</option>
            <option value="1">Operaciones</option>
            <option value="2">Stock</option>
          </select>
          <p class="opc">Sistema Operativo: </p>
          <select id="SO" class="form-select" aria-label="Default select example" disabled>
            <option selected>--Sistema Operativo--</option>
            <option value="1">Windows</option>
            <option value="2">MAC</option>
            <option value="3">Linux</option>
          </select>
          <p class="opc">RAM: </p>
          <select id="RAM" class="form-select" aria-label="Default select example" disabled>
            <option selected>--RAM--</option>
            <option value="1">4 GB</option>
            <option value="2">8 GB</option>
            <option value="3">12 GB</option>
            <option value="4">16 GB</option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" id="anadir" disabled>Enviar</button>
    </form>
    <div id="Tdata">
      <select id="inv" class="form-select" aria-label="Default select example" onchange="leer()">
        <option selected>--Seleccionar opcion a desplegar--</option>
        <option value="1">PC</option>
        <option value="2">Monitor</option>
        <option value="3">Headsets</option>
<!--    <option value="4">Mouse</option>
        <option value="5">Teclados</option> -->
      </select>
    </div>

    <table class="table" id="datos">
      <thead>
        <tr>
          <th scope="col">Asset</th>
          <th scope="col">Serial</th>
          <th scope="col">Modelo</th>
          <th scope="col">Marca</th>
          <th scope="col">CPU</th>
          <th scope="col">Organizacion</th>
          <th scope="col">Tipo</th>
          <th scope="col">Status</th>
          <th scope="col">SO</th>
          <th scope="col">RAM</th>
        </tr>
      </thead>
      <tbody id="tbody">
        <tr>
          <td>######</td>
          <td>######</td>
          <td>######</td>
          <td>######</td>
          <td>######</td>
          <td>######</td>
          <td>######</td>
          <td>######</td>
          <td>######</td>
          <td>######</td>
        </tr>
      </tbody>
    </table>
    </div>
  `
}