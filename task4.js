// task4.js

class jugador {
  constructor(nombre, nivel) {
    this.nombre = nombre;
    this.nivel = nivel;
  }

  info() {
    return `${this.nombre} ha alcanzado el nivel ${this.nivel}!`;
  }

  levelUp() {
    this.nivel += 1;
  }
}

export {jugador};
