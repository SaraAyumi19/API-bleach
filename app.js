import express from "express";
import cors from "cors";

const app = express();
const porta = process.env.PORT || 10000;

app.use(cors());

const bleach = [
  {
    id: 1,
    nome: "Kon",
    raca: "Alma Modificada",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo"
  },
  {
    id: 2,
    nome: "Ichigo Kurosaki",
    raca: ["Shinigami", "Hollow", "Quincy", "Humano", "Arrancar"],
    cargo: "Substituto",
    zanpakuto: "Zangetsu",
    status: "Vivo"
  },
  {
    id: 3,
    nome: "Rukia Kuchiki",
    raca: "Shinigami",
    cargo: "Capitã da 13° Divisão",
    zanpakuto: "Sode no Shirayuki",
    status: "Vivo"
  },
  {
    id: 4,
    nome: "Sado Yasutora/Chad",
    raca: "Humano",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo"
  },
  {
    id: 5,
    nome: "Renji Abarai",
    raca: "Shinigami",
    cargo: "Tenente da 6° Divisão",
    zanpakuto: "Zabimaru",
    status: "Vivo"
  },
  {
    id: 6,
    nome: "Grimmjow Jaegerjaquez",
    raca: "Arrancar",
    cargo: "Espada N° 6",
    zanpakuto: "Pantera",
    status: "Vivo"
  },
  {
    id: 6,
    nome: "Grimmjow Jaegerjaquez",
    raca: "Arrancar",
    cargo: "Espada N° 6",
    zanpakuto: "Pantera",
    status: "Vivo"
  }
];

// 🏠 rota base
app.get("/", (req, res) => {
  res.send("API Bleach rodando ⚔️");
});

// 📚 todos
app.get("/bleach", (req, res) => {
  res.json(bleach);
});

// 🔎 por ID
app.get("/bleach/:id", (req, res) => {
  const id = Number(req.params.id);
  const personagem = bleach.find(p => p.id === id);

  if (!personagem) {
    return res.status(404).json({ mensagem: "Personagem não localizado" });
  }

  res.json(personagem);
});

// 🔎 por nome (BUSCA FLEXÍVEL)
app.get("/bleach/nome/:nome", (req, res) => {
  const nome = req.params.nome.toLowerCase();

  const personagem = bleach.find(p =>
    p.nome.toLowerCase().includes(nome)
  );

  if (!personagem) {
    return res.status(404).json({ mensagem: "Personagem não localizado" });
  }

  res.json(personagem);
});

// 🔎 por raça
app.get("/bleach/raca/:raca", (req, res) => {
  const raca = req.params.raca.toLowerCase();

  const resultado = bleach.filter(p => {
    if (Array.isArray(p.raca)) {
      return p.raca.some(r => r.toLowerCase() === raca);
    }
    return p.raca.toLowerCase() === raca;
  });

  if (resultado.length === 0) {
    return res.status(404).json({ mensagem: "Não encontrado" });
  }

  res.json(resultado);
});

// 🚀 servidor (SÓ UM!)
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
