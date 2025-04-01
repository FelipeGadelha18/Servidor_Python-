const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json());


const operadoras = [
  { id: 1, nome: "Operadora A", categoria: "Móvel" },
  { id: 2, nome: "Operadora B", categoria: "Fixa" },
  { id: 3, nome: "Super Telecom", categoria: "Móvel" },
  { id: 4, nome: "Mega Conexão", categoria: "Internet" },
  { id: 5, nome: "Operadora C", categoria: "Móvel" }
];

// Rota de busca textual
app.get("/buscar", (req, res) => {
  const termo = req.query.q?.toLowerCase();

  if (!termo) {
    return res.status(400).json({ erro: "Parâmetro de busca não informado" });
  }

  const resultado = operadoras.filter(op => op.nome.toLowerCase().includes(termo));

  res.json(resultado);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
