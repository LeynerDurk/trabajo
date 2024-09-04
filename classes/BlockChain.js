import { Block } from "./Block.js";

export class BlockChain {
  constructor(datosOrigen, nombre) {
    this.chain = [this.createFirstBlock(datosOrigen)];
    this.nombre = nombre;
  }

  createFirstBlock(datosOrigen) {
    return new Block(0, datosOrigen);
  }

  getLasBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(nombre,
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
    alergias) {
    let prevBlock = this.getLasBlock();
    let jugador = new Block(
      prevBlock.index + 1,
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
      prevBlock.hash
    );
    jugador.encontrarJugador(this.nombre);

    console.log(
      `Jugador encontrado: ${jugador.nombre}, encontrada.\n
        Fecha Nacimiento: ${jugador.fecha_nacimiento}\n
        Lugar Nacimiento: ${jugador.lugar_nacimiento}\n
        Altura: ${jugador.altura} \n
        Peso: ${jugador.peso} \n
        Posición:${jugador.posicion} \n
        Goles: ${jugador.goles} \n
        Asistencias: ${jugador.asistencias} \n        
        `
    );
    this.chain.push(jugador);
  }
}
