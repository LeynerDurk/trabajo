import SHA256 from "crypto-js/sha256.js";

export class Block {
  constructor(
    index,
    nombre,
    fecha_nacimiento,
    lugar_nacimiento,
    altura,
    peso,
    posicion,
    goles,
    asistencias,
    test_velocidad,
    test_resistencia,
    lesiones,
    alergias,
    previousHash = ""
  ) {
    this.index = index;
    this.date = new Date();
    this.nombre = nombre;
    this.fecha_nacimiento = fecha_nacimiento;
    this.lugar_nacimiento = lugar_nacimiento;
    this.altura = altura;
    this.peso = peso;
    this.posicion = posicion;
    this.goles = goles;
    this.asistencias = asistencias;
    this.test_velocidad = test_velocidad;
    this.test_resistencia = test_resistencia;
    this.lesiones = lesiones;
    this.alergias = alergias;
    this.previousHash = previousHash;
    this.hash = this.createHash();
  }

  createHash() {
    return SHA256(
      this.index +
      this.date +
      this.nombre +
      this.fecha_nacimiento +
      this.lugar_nacimiento +
      this.altura +
      this.peso +
      this.posicion +
      this.goles +
      this.asistencias +
      this.test_velocidad +
      this.test_resistencia +
      this.lesiones +
      this.alergias +
      this.previousHash
    ).toString();
  }

  encontrarJugador(nombre) {
    if (nombre && nombre !== null && nombre !== "") {
      while (this.nombre.startsWith(nombre)) {
        this.hash = this.createHash();
        console.log(this.hash);
      }
    }
  }
}
