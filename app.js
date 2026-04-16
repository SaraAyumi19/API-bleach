import express from "express";

const app = express();

// IMPORTANTE para Render
const porta = process.env.PORT || 8000;

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
    }
];

// 🔥 Rota base
app.get("/", (req, res) => {
    res.send("<h1>API Bleach rodando ⚔️</h1>");
});

// 📚 Todos os personagens
app.get("/bleach", (req, res) => {
    res.status(200).json(bleach);
});

// 🔎 Buscar por ID
app.get("/bleach/:id", (req, res) => {
    const id = Number(req.params.id);
    const perso = bleach.find(p => p.id === id);

    if (!perso) {
        return res.status(404).json({ mensagem: "Personagem não localizado!" });
    }

    res.status(200).json(perso);
});

// 🔎 Buscar por nome
app.get("/bleach/nome/:nome", (req, res) => {
    const nome = req.params.nome.toLowerCase();

    const perso = bleach.find(p =>
        p.nome.toLowerCase() === nome
    );

    if (!perso) {
        return res.status(404).json({ mensagem: "Personagem não localizado!" });
    }

    res.status(200).json(perso);
});

// 🔎 Buscar por raça (corrigido)
app.get("/bleach/raca/:raca", (req, res) => {
    const raca = req.params.raca.toLowerCase();

    const perso = bleach.filter(p => {
        if (Array.isArray(p.raca)) {
            return p.raca.some(r => r.toLowerCase() === raca);
        }
        return p.raca.toLowerCase() === raca;
    });

    if (perso.length === 0) {
        return res.status(404).json({ mensagem: "Personagem não localizado!" });
    }

    res.status(200).json(perso);
});

// 🚀 Start server
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});