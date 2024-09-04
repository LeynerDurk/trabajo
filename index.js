import Express, { urlencoded } from "express";
import { BlockChain } from "./classes/BlockChain.js";

const PORT = 8080;

const app = Express();

app.use(Express.json()); //Recibir datos en formato json
app.use(urlencoded())
app.use(Express.static("public")); //Permite usar los documentos del public

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  const { nombre,
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
    alergias } =
    req.body;


  //Informacion del equipo
  const blockchain = new BlockChain(
    "A.C Milan"
  );

  //Informacion del primer jugador
  blockchain.addBlock(
    "Nombre Jugador 1",
    "16/03/2024",
    "Colombia",
    "1.80",
    "80",
    "Centro",
    "50",
    "25",
    "2.3",
    "85",
    "No",
    "Maní"
  );

  blockchain.addBlock(
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
    alergias
  );

  console.log(JSON.stringify(blockchain.chain, null, 2));

});

app.listen(PORT, () => {
  console.log(`Server funcionando en http://localhost:${PORT}`);
});
