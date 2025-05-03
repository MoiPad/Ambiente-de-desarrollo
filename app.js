const daysjs = require("dayjs");

class CalculoEnvio {
  constructor(peso, distancia) {
    this.peso = peso;
    this.distancia = distancia;
    this.costoBase = 50;
  }

  calculoRecargoPorPeso() {
    if (this.peso > 5) {
      return (this.peso - 5) * 20;
    } else {
      return 0;
    }
  }

  calculoRecargoPorDistancia() {
    if (this.distancia > 50) {
      return (this.distancia - 50) * 10;
    } else {
      return 0;
    }
  }

  calculoCostoTotal() {
    return (
      this.costoBase +
      this.calculoRecargoPorPeso() +
      this.calculoRecargoPorDistancia()
    );
  }

  calculoFechaEstimadaDeEntrega() {
    const diasProcesamiento = 2;
    const diasTransporte = Math.ceil(this.distancia / 100);
    return daysjs()
      .add(diasProcesamiento + diasTransporte, "day")
      .format("DD/MM/YYYY");
  }

  resultados() {
    console.log(
      `| Costo Base :                | L.${this.costoBase.toFixed(2)}           |`,
    );
    console.log(
      `| Recargo por peso:           | L.${this.calculoRecargoPorPeso().toFixed(2)}          |`,
    );
    console.log(
      `| Recargo por distancia:      | L.${this.calculoRecargoPorDistancia().toFixed(2)}         |`,
    );
    console.log(
      `| Costo total:                | L.${this.calculoCostoTotal().toFixed(2)}         |`,
    );
    console.log(
      `| Fecha estima de entrega:    |   ${this.calculoFechaEstimadaDeEntrega()}      |`,
    );
  }
}

const calculoEnvio1 = new CalculoEnvio(40, 500);

calculoEnvio1.resultados();
