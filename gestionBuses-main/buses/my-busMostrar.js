import { LitElement, html, css } from 'lit-element';

export class MyBusMostrar extends LitElement {
  static get styles() {
    return css`
      /* Estilos para la tabla */
      .table-container {
        margin: auto;
        margin-top: 20px;
        overflow-x: auto;
      }

      table {
        width: 50%;
        border-collapse: collapse;
        border-spacing: 0;
        font-family: Arial, sans-serif;
        font-size: 14px;
        color: #333;
      }

      th {
        background-color: #f2f2f2;
        font-weight: bold;
        text-align: left;
        padding: 10px;
        border-bottom: 2px solid #ddd;
      }

      td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }

      tbody tr:hover {
        background-color: #f5f5f5;
      }

      @media (max-width: 768px) {
        .table-container {
          overflow-x: auto;
          display: block;
          width: 100%;
        }

        table {
          width: 100%;
        }
      }
    `;
  }

  static get properties() {
    return {
      busData: { type: Array },
    };
  }

  render() {
    return html`
      <div class="table-container">
 
        <table>
          <thead>
            <tr>
              <th>Número de bus</th>
              <th>Nombre del bus</th>
              <th>Ruta Asignada</th>
              <th>Tiempo del recorrido</th>
            </tr>
          </thead>
          <tbody>
            ${this.busData.map(
              bus =>
                html`
                  <tr>
                    <td>${bus.bus}</td>
                    <td>${bus.Nombre}</td>
                    <td>${bus.Ruta}</td>
                    <td>${bus.Tiempo}</td>
                  </tr>
                `
            )}
          </tbody>
        </table>
      </div>
    `;
  }
}

customElements.define('my-bus-mostrar', MyBusMostrar);
