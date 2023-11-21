import { LitElement, html } from 'lit-element';
import buscss from './my-busStyle';
import './my-busMostrar';
import '../rutas/my-ruta';

export class MyElement extends LitElement {
  static get styles() {
    return [buscss];
  }

  constructor() {
    super();
    this.busData = this.cargarBusesGuardados() || [];
    this.rutas = this.obtenerNombresRutas() || [];
  }

  obtenerNombresRutas() {
    const rutasGuardadas = localStorage.getItem('rutasData');
    if (rutasGuardadas) {
      const rutas = JSON.parse(rutasGuardadas);
      return rutas.map(ruta => ruta.nombreRuta);
    }
    return [];
  }

  render() {
    return html`
      <div class="container">
        <div class="form-section">
          <div class="card">
            <div class="card-header">
              <div class="text-header">Registrar bus</div>
            </div>
            <div class="card-body">
              <form @submit=${this.onSubmit}>
                <div class="form-group">
                  <label for="bus">Numero de bus:</label>
                  <input required class="form-control" name="bus" id="bus" type="text">
                </div>
                <div class="form-group">
                  <label for="Nombre">Nombre del bus:</label>
                  <input required class="form-control" name="Nombre" id="Nombre" type="text">
                </div>
                <div class="form-group">
                  <label for="Ruta">Ruta Asignada:</label>
                  <select required class="form-control" name="Ruta" id="Ruta">
                    ${this.rutas.map(
                      ruta => html`<option value=${ruta}>${ruta}</option>`
                    )}
                  </select>
                </div>
                <div class="form-group">
                  <label for="Tiempo">Tiempo del recorrido:</label>
                  <input required class="form-control" name="Tiempo" id="Tiempo" type="text">
                </div>
                <input type="submit" class="btn" value="Enviar">
              </form>
            </div>
          </div>
        </div>

        <div class="data-section">
          <table>
            <thead>
              <tr>
                <th>Numero de bus</th>
                <th>Nombre del bus</th>
                <th>Ruta Asignada</th>
                <th>Tiempo del recorrido</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              ${this.busData.map(
                (bus, index) => html`
                  <tr>
                    <td>${bus.bus}</td>
                    <td>${bus.Nombre}</td>
                    <td>${bus.Ruta}</td>
                    <td>${bus.Tiempo}</td>
                    <td><button @click=${() => this.eliminarBus(index)}>Eliminar</button></td>
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newBus = {
      bus: formData.get('bus'),
      Nombre: formData.get('Nombre'),
      Ruta: formData.get('Ruta'),
      Tiempo: formData.get('Tiempo')
    };

    this.busData = [...this.busData, newBus];
    this.guardarBuses();
    event.target.reset();
  }

  eliminarBus(index) {
    this.busData.splice(index, 1);
    this.guardarBuses();
    this.requestUpdate();
  }

  guardarBuses() {
    localStorage.setItem('busesData', JSON.stringify(this.busData));
  }

  cargarBusesGuardados() {
    const savedData = localStorage.getItem('busesData');
    return savedData ? JSON.parse(savedData) : [];
  }
}

customElements.define('my-bus', MyElement);
