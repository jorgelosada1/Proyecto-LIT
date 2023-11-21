import { LitElement, html } from 'lit-element';
import buscss from './my-rutaStyle';

export class MyRuta extends LitElement {
  static get styles() {
    return [buscss];
  }

  static get properties() {
    return {
      rutasData: { type: Array }
    };
  }

  constructor() {
    super();
    this.rutasData = this.cargarRutasGuardadas() || [];
  }

  render() {
    return html`
      <div class="container">
        <div class="form-section">
          <div class="card">
            <div class="card-header">
              <div class="text-header">Registrar ruta</div>
            </div>
            <div class="card-body">
              <form @submit=${this.onSubmit}>
                <div class="form-group">
                  <label for="numeroRuta">Numero de la ruta:</label>
                  <input required class="form-control" name="numeroRuta" id="numeroRuta" type="text">
                </div>
                <div class="form-group">
                  <label for="nombreRuta">Nombre de la ruta:</label>
                  <input required class="form-control" name="nombreRuta" id="nombreRuta" type="text">
                </div>
                <input type="submit" class="btn" value="Agregar Ruta">
              </form>
            </div>
          </div>
        </div>

        <div class="data-section">
          ${this.rutasData.map(
            (ruta, index) => html`
              <div class="card">
                <div class="card-body">
                  <h3>Número de la ruta: ${ruta.numeroRuta}</h3>
                  <p>Nombre de la ruta: ${ruta.nombreRuta}</p>
                  <button class="btnRuta" @click=${() => this.eliminarRuta(index)}>Eliminar</button>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newRuta = {
      numeroRuta: formData.get('numeroRuta'),
      nombreRuta: formData.get('nombreRuta')
    };

    this.rutasData = [...this.rutasData, newRuta];
    this.guardarRutas();
    this.requestUpdate();

    event.target.reset();

    this.dispatchEvent(new CustomEvent('ruta-agregada', {
      detail: {
        nuevaRuta: newRuta
      }
    }));
  }

  eliminarRuta(index) {
    this.rutasData.splice(index, 1);
    this.guardarRutas();
    this.requestUpdate();
  }

  guardarRutas() {
    localStorage.setItem('rutasData', JSON.stringify(this.rutasData));
  }

  cargarRutasGuardadas() {
    const savedData = localStorage.getItem('rutasData');
    return savedData ? JSON.parse(savedData) : [];
  }
}

customElements.define('my-ruta', MyRuta);
