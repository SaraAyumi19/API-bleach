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
    imagem: "https://static.wikia.nocookie.net/bleach/images/c/c9/KonProfileOption2Ep320.png/revision/latest?cb=20141203012651&path-prefix=pt-br"
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
    imagem: "https://static.wikia.nocookie.net/bleach/images/4/4d/Ep158SadoProfile.png/revision/latest?cb=20231105184802&path-prefix=en"
  },
  {
    id: 5,
    nome: "Renji Abarai",
    raca: "Shinigami",
    cargo: "Tenente da 6° Divisão",
    zanpakuto: "Zabimaru",
    status: "Vivo",
    imagem: "https://i.redd.it/sw8sxwpg5uc91.jpg"
  },
  {
    id: 6,
    nome: "Grimmjow Jaegerjaquez",
    raca: "Arrancar",
    cargo: "Espada N° 6",
    zanpakuto: "Pantera",
    status: "Vivo",
    imagem: "https://i.pinimg.com/736x/cb/d5/a2/cbd5a226e96700617488787652777299.jpg"
  },
  {
    id: 7,
    nome: "Tatsuki Arisawa",
    raca: "Humana",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://preview.redd.it/tatsuki-deserved-more-screentime-v0-i5lz579lwgre1.jpeg?width=640&crop=smart&auto=webp&s=cbd09ee1f7bcb7b8d663a9df305ce1c0df78bb6f"
  },
  {
    id: 8,
    nome: "Byakuya Kuchiki",
    raca: "Shinigami",
    cargo: "Capitão da 6° Divisão",
    zanpakuto: "Senbonzakura",
    status: "Vivo",
    imagem: "https://static.wikia.nocookie.net/bleach/images/f/f2/686Byakuya_profile.png/revision/latest/scale-to-width/360?cb=20200322080959&path-prefix=en"
  },
  {
    id: 9,
    nome: "Kenpachi Zaraki",
    raca: "Shinigami",
    cargo: "Capitão da 11° Divisão",
    zanpakuto: "Nozarashi",
    status: "Vivo",
    imagem: "https://i.redd.it/luqt2h438x2a1.jpg"
  },
  {
    id: 10,
    nome: "Yumichika Ayasegawa",
    raca: "Shinigami",
    cargo: "5° Ofcial da 11° Divisão",
    zanpakuto: "Pantera",
    status: "Vivo",
    imagem: "https://static.wikia.nocookie.net/bleach/images/4/45/482Yumichika_profile.png/revision/latest/scale-to-width/360?cb=20170208041100&path-prefix=en"
  },
  {
    id: 11,
    nome: "Uryū Ishida",
    raca: "Quincy",
    cargo: "Espada N° 6",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://i.redd.it/wcbjscah7cbe1.jpeg"
  },
  {
    id: 12,
    nome: "Sōsuke Aizen",
    raca: "Shinigami",
    cargo: "Ex-capitão da 5° Divisão e Líder dos Arrancar",
    zanpakuto: "Kyōka Suigetsu",
    status: "Vivo",
    imagem: "https://static.wikia.nocookie.net/bleach/images/6/68/682Aizen_profile.png/revision/latest/scale-to-width/360?cb=20260319222423&path-prefix=en"
  },
  {
    id: 13,
    nome: "Kisuke Urahara",
    raca: "Shinigami",
    cargo: "Ex-capitão da 12ª Divisão e fundador do Instituto de Pesquisa e Desenvolvimento Shinigami",
    zanpakuto: "Benihime",
    status: "Vivo",
    imagem: "https://i.pinimg.com/736x/4f/a9/70/4fa9707e8a288b545d42d0ea7cb2d551.jpg"
  },
  {
    id: 14,
    nome: "Yoruichi Shihōin",
    raca: "Shinigami",
    cargo: "22ª Líder do Clã Shihōin, Comandante do Onmitsukidō e Ex-capitã da 2° Divisão",
    zanpakuto: "Não Revelada",
    status: "Vivo",
    imagem: "https://i.pinimg.com/736x/21/1b/30/211b304d4922fd9968ca4dafb5a718cf.jpg"
  },
  {
  id: 15,
  nome: "Tōshirō Hitsugaya",
  raca: "Shinigami",
  cargo: "Capitão da 10° Divisão",
  zanpakuto: "Hyōrinmaru",
  status: "Vivo",
  imagem: "https://i.redd.it/toshiro-hitsugaya-v0-yqol0lq2735e1.jpg?width=828&format=pjpg&auto=webp&s=0dbe800a1e5c6425ab3fe0f20c215a33e4b720a0"
},
{
  id: 16,
  nome: "Rangiku Matsumoto",
  raca: "Shinigami",
  cargo: "Tenente da 10° Divisão",
  zanpakuto: "Haineko",
  status: "Vivo",
  imagem: "https://static.wikia.nocookie.net/bleach/images/b/b6/-16Rangiku_profile.png/revision/latest/scale-to-width/360?cb=20220625045948&path-prefix=en"
},
{
  id: 17,
  nome: "Gin Ichimaru",
  raca: "Shinigami",
  cargo: "Ex-capitão da 3° Divisão",
  zanpakuto: "Shinsō",
  status: "Morto",
  imagem: "https://static.wikia.nocookie.net/bleachfanwork/images/0/05/GinIchimaru_E8.png/revision/latest?cb=20220903125800"
},
{
  id: 18,
  nome: "Mayuri Kurotsuchi",
  raca: "Shinigami",
  cargo: "Capitão da 12° Divisão",
  zanpakuto: "Ashisogi Jizō",
  status: "Vivo",
  imagem: "https://static.wikia.nocookie.net/bleach/images/9/91/480Mayuri_profile.png/revision/latest/scale-to-width/360?cb=20170208040109&path-prefix=en"
},
{
  id: 19,
  nome: "Nemu Kurotsuchi",
  raca: "Artificial",
  cargo: "Tenente da 12° Divisão",
  zanpakuto: "Nulo",
  status: "Morto",
  imagem: "https://i.pinimg.com/originals/58/b1/bf/58b1bfc562fe8d73559ea955e61dac8c.jpg"
},
{
  id: 20,
  nome: "Shunsui Kyōraku",
  raca: "Shinigami",
  cargo: "Capitão-Comandante",
  zanpakuto: "Katen Kyōkotsu",
  status: "Vivo",
  imagem: "https://i.redd.it/my-attempt-to-make-shunsui-kyoraku-from-the-manga-bleach-v0-40k52p00qh2a1.png?width=711&format=png&auto=webp&s=1e980baee15a81e98dac7346f666c7480304c62e"
},
{
  id: 21,
  nome: "Jūshirō Ukitake",
  raca: "Shinigami",
  cargo: "Capitão da 13° Divisão",
  zanpakuto: "Sōgyo no Kotowari",
  status: "Morto",
  imagem: "https://static.wikia.nocookie.net/bleach/images/3/37/335Ukitake%27s_green_eyes.png/revision/latest?cb=20251013153219&path-prefix=en"
},
{
  id: 22,
  nome: "Shūhei Hisagi",
  raca: "Shinigami",
  cargo: "Co-tenente da 9ª Divisão",
  zanpakuto: "Kazeshini",
  status: "Vivo",
  imagem: "https://static.wikia.nocookie.net/bleach/images/5/54/520.5Hisagi_profile.png/revision/latest?cb=20250123185650&path-prefix=en"
},
{
  id: 23,
  nome: "Neliel Tu Odelschwanck",
  raca: "Arrancar",
  cargo: "Ex-Espada N° 3",
  zanpakuto: "Gamuza",
  status: "Vivo",
  imagem: "https://i.pinimg.com/236x/8b/69/a5/8b69a5089830294557caf56f3a6adf8d.jpg"
},
{
  id: 24,
  nome: "Ulquiorra Cifer",
  raca: "Arrancar",
  cargo: "Espada N° 4",
  zanpakuto: "Murciélago",
  status: "Morto",
  imagem: "https://i.pinimg.com/474x/7d/e8/c7/7de8c7bc6a807fbddb750f2072be7bb0.jpg"
},
{
  id: 25,
  nome: "Nnoitra Gilga",
  raca: "Arrancar",
  cargo: "Espada N° 5",
  zanpakuto: "Santa Teresa",
  status: "Morto",
  imagem: "https://i.pinimg.com/736x/a7/f2/f6/a7f2f65d5c68115e4a4e01f3dc210319.jpg"
},
{
  id: 26,
  nome: "Tier Harribel",
  raca: "Arrancar",
  cargo: "Ex-Espada N° 3",
  zanpakuto: "Tiburón",
  status: "Vivo",
  imagem: "https://static.wikia.nocookie.net/bleach/images/1/14/356Harribel_Resurreccion_profile.png/revision/latest/scale-to-width/360?cb=20201010154748&path-prefix=en"
},
{
  id: 27,
  nome: "Barragan Louisenbairn",
  raca: "Arrancar",
  cargo: "Espada N° 2",
  zanpakuto: "Arrogante",
  status: "Morto",
  imagem: "https://i.pinimg.com/736x/64/09/03/640903a772cf8f9b599a48cd00d039f7.jpg"
},
{
  id: 28,
  nome: "Coyote Starrk",
  raca: "Arrancar",
  cargo: "Espada N° 1",
  zanpakuto: "Los Lobos",
  status: "Morto",
  imagem: "https://i.pinimg.com/736x/5c/55/4b/5c554b76b10d1c53f14e08e4fa2aacb7.jpg"
},
{
  id: 29,
  nome: "Lilinette Gingerbuck",
  raca: "Arrancar",
  cargo: "Parte de Starrk",
  zanpakuto: "Nulo",
  status: "Morto",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWC6jBPRugsEPxqfeht1lmp0kiT_7pmi2Ilg&s"
},
{
  id: 30,
  nome: "Ikkaku Madarame",
  raca: "Shinigami",
  cargo: "3° Oficial da 11° Divisão",
  zanpakuto: "Hōzukimaru",
  status: "Vivo",
  imagem: "https://i.pinimg.com/736x/df/c9/6c/dfc96cbc69c77c966623b329a0f269bc.jpg"
},
{
  id: 31,
  nome: "Kaien Shiba",
  raca: "Shinigami",
  cargo: "Ex-tenente",
  zanpakuto: "Nejibana",
  status: "Morto",
  imagem: "https://i.pinimg.com/736x/db/eb/de/dbebde00b436cdf2cb17ecbf689c4974.jpg"
},
{
  id: 32,
  nome: "Isshin Kurosaki",
  raca: "Shinigami",
  cargo: "Ex-capitão da 10° Divisão",
  zanpakuto: "Engetsu",
  status: "Vivo",
  imagem: "https://media.tenor.com/iDqNoxmmWV8AAAAM/isshin-bleach.gif"
},
{
  id: 33,
  nome: "Masaki Kurosaki",
  raca: "Quincy",
  cargo: "Nulo",
  zanpakuto: "Nulo",
  status: "Morto",
  imagem: "https://i.pinimg.com/474x/25/4d/87/254d87aa46cd74b4f75ba399a383a809.jpg"
},
{
  id: 34,
  nome: "Yhwach",
  raca: "Quincy",
  cargo: "Rei Quincy",
  zanpakuto: "Nulo",
  status: "Morto",
  imagem: "https://pbs.twimg.com/media/EroY_cqXYAM7P8r.jpg"
},
{
  id: 35,
  nome: "Jugram Haschwalth",
  raca: "Quincy",
  cargo: "Grande Mestre",
  zanpakuto: "Nulo",
  status: "Morto",
  imagem: "https://static.wikia.nocookie.net/bleach/images/0/0f/Jugram.JPG/revision/latest?cb=20250829002449&path-prefix=pt-br"
},
{
  id: 36,
  nome: "Bazz-B",
  raca: "Quincy",
  cargo: "Sternritter",
  zanpakuto: "Nulo",
  status: "Morto",
  imagem: "https://i.pinimg.com/736x/0a/e3/f5/0ae3f5cb3944a54df1e20250bdfdd87e.jpg"
},
{
  id: 37,
  nome: "Askin Nakk Le Vaar",
  raca: "Quincy",
  cargo: "Sternritter",
  zanpakuto: "Nulo",
  status: "Morto",
  imagem: "https://i.pinimg.com/originals/a4/29/8f/a4298fd31338b4129b036c4782c3bb19.jpg"
},
{
  id: 38,
  nome: "Gremmy Thoumeaux",
  raca: "Quincy",
  cargo: "Sternritter",
  zanpakuto: "Nulo",
  status: "Morto",
  imagem: "https://static.wikia.nocookie.net/bleach/images/7/7f/Gremmy_Psicopata.png/revision/latest?cb=20210207004727&path-prefix=pt-br"
},
{
  id: 39,
  nome: "Shinji Hirako",
  raca: "Shinigami/Visored",
  cargo: "Capitão da 5° Divisão",
  zanpakuto: "Sakanade",
  status: "Vivo",
  imagem: "https://static.wikia.nocookie.net/bleachfanwork/images/6/6b/ShinjiHirako_E8.png/revision/latest?cb=20220904070847"
},
{
  id: 40,
  nome: "Hiyori Sarugaki",
  raca: "Shinigami/Visored",
  cargo: "Ex-tenente",
  zanpakuto: "Kubikiri Orochi",
  status: "Vivo",
  imagem: "https://s3.amazonaws.com/comicgeeks/characters/avatars/53523.jpg?t=1665152184"
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