import express from "express";
import cors from "cors";

const app = express();
const porta = process.env.PORT || 10000;

app.use(cors());

// 🖼️ (opcional) servir imagens locais
app.use("/images", express.static("images"));

const bleach = [
  {
    id: 1,
    nome: "Kon",
    raca: "Alma Modificada",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://static.wikia.nocookie.net/all-worlds-alliance/images/f/f9/75cdd01890cec27b3b1e862a73a64a50.png/revision/latest/scale-to-width-down/479?cb=20200504070203"
  },
  {
    id: 2,
    nome: "Ichigo Kurosaki",
    raca: ["Shinigami", "Hollow", "Quincy", "Humano", "Arrancar"],
    cargo: "Substituto",
    zanpakuto: "Zangetsu",
    status: "Vivo",
    imagem: "https://static.wikitide.net/deathbattlewiki/f/f6/Portrait.ichigokurosaki.png"
  },
  {
    id: 3,
    nome: "Rukia Kuchiki",
    raca: "Shinigami",
    cargo: "Capitã da 13° Divisão",
    zanpakuto: "Sode no Shirayuki",
    status: "Vivo",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9c/Rukia.jpg/250px-Rukia.jpg"
  },
  {
    id: 4,
    nome: "Sado Yasutora/Chad",
    raca: "Humano",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://www.writeups.org/wp-content/uploads/Yasutora-Chad-Sado-Bleach-Shonen-Jump.jpg"
  },
  {
    id: 5,
    nome: "Renji Abarai",
    raca: "Shinigami",
    cargo: "Tenente da 6° Divisão",
    zanpakuto: "Zabimaru",
    status: "Vivo",
    imagem: "https://static.wikia.nocookie.net/p__/images/b/b8/Bleach_TYBW_Renji_Anime_Render.png/revision/latest?cb=20221212185324&path-prefix=protagonist"
  },
  {
    id: 6,
    nome: "Grimmjow Jaegerjaquez",
    raca: "Arrancar",
    cargo: "Espada N° 6",
    zanpakuto: "Pantera",
    status: "Vivo",
    imagem: "https://i.pinimg.com/736x/cb/d5/a2/cbd5a226e96700617488787652777299.jpg"
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

// 🔎 por nome
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

// 🚀 servidor
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});