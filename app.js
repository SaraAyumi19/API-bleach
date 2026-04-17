import express from "express";
import cors from "cors";

const app = express();
const porta = process.env.PORT || 10000;

app.use(cors());

app.use("/images", express.static("images"));

const bleach = [
  {
    id: 1,
    nome: "Ichigo Kurosaki",
    raca: ["Shinigami", "Hollow", "Quincy", "Humano", "Arrancar", "Vizard"],
    cargo: "Substituto",
    zanpakuto: "Zangetsu",
    status: "Vivo",
    imagem: "https://static.wikitide.net/deathbattlewiki/f/f6/Portrait.ichigokurosaki.png"
  },
  {
    id: 2,
    nome: "Rukia Kuchiki",
    raca: "Shinigami",
    cargo: "Capitã da 13° Divisão",
    zanpakuto: "Sode no Shirayuki",
    status: "Vivo",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9c/Rukia.jpg/250px-Rukia.jpg"
  },
  {
    id: 3,
    nome: "Yuzu Kurosaki",
    raca: "Humana",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://cdn.anisearch.com/images/character/cover/1/1017_400.webp"
  },
  {
    id: 4,
    nome: "Karin Kurosaki",
    raca: "Humana",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://static.wikia.nocookie.net/bleach/images/7/70/Ep132KarinProfile.png/revision/latest?cb=20211024072021&path-prefix=en"
  },
  {
    id: 5,
    nome: "Isshin Kurosaki",
    raca: "Shinigami",
    cargo: "Ex-capitão da 10° Divisão",
    zanpakuto: "Engetsu",
    status: "Vivo",
    imagem: "https://media.tenor.com/iDqNoxmmWV8AAAAM/isshin-bleach.gif"
  },
  {
    id: 6,
    nome: "Orihime Inoue",
    raca: "Humana",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://i.pinimg.com/474x/c2/c5/de/c2c5de078fe99fac967dd70fcb8d27bc.jpg"
  },
  {
    id: 7,
    nome: "Yasutora Sado",
    raca: "Humano",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://s3.amazonaws.com/comicgeeks/characters/avatars/35677.jpg"
  },
  {
    id: 8,
    nome: "Uryu Ishida",
    raca: "Quincy",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3B6muEIe_2UVhcGrZxZ6OMaA9C8XNr0EdQ&s"
  },
  {
    id: 9,
    nome: "Kisuke Urahara",
    raca: "Shinigami",
    cargo: "Ex-Capitão da 12° Divisão",
    zanpakuto: "Benihime",
    status: "Vivo",
    imagem: "https://i.pinimg.com/736x/4f/a9/70/4fa9707e8a288b545d42d0ea7cb2d551.jpg"
  },
  {
    id: 10,
    nome: "Tessai Tsukabishi",
    raca: "Shinigami",
    cargo: "Ex-Comandante do Kidō",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://i.redd.it/9qh4cvc638sb1.jpg"
  },
  {
    id: 11,
    nome: "Jinta Hanakari",
    raca: "Humano",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQazAPtF6xpYJB1BcDkDBnkmINmmmP_alh6ew&s"
  },
  {
    id: 12,
    nome: "Ururu Tsumugiya",
    raca: "Humano",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://static.wikia.nocookie.net/bleach/images/0/01/36Ururu_profile.png/revision/latest/scale-to-width-down/250?cb=20200107064424&path-prefix=en"
  },
  {
    id: 13,
    nome: "Kon",
    raca: "Alma Modificada",
    cargo: "Nulo",
    zanpakuto: "Nulo",
    status: "Vivo",
    imagem: "https://static.wikia.nocookie.net/bleach/images/c/c9/KonProfileOption2Ep320.png/revision/latest?cb=20141203012651&path-prefix=pt-br"
  },
  {
    id: 14,
    nome: "Renji Abarai",
    raca: "Shinigami",
    cargo: "Tenente da 6° Divisão",
    zanpakuto: "Zabimaru",
    status: "Vivo",
    imagem: "https://i.redd.it/sw8sxwpg5uc91.jpg"
  },
  {
  id: 15,
  nome: "Byakuya Kuchiki",
  raca: "Shinigami",
  cargo: "Capitão da 6° Divisão",
  zanpakuto: "Senbonzakura",
  status: "Vivo",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_TBFrSXqpLdIxW9bNVy_qxnN31-V1ZZcFdw&s"
},
{
  id: 16,
  nome: "Gin Ichimaru",
  raca: "Shinigami",
  cargo: "Ex-capitão da 3° Divisão",
  zanpakuto: "Shinsō",
  status: "Morto",
  imagem: "https://static.wikia.nocookie.net/bleachfanwork/images/0/05/GinIchimaru_E8.png/revision/latest?cb=20220903125800"
},
{
  id: 17,
  nome: "Rangiku Matsumoto",
  raca: "Shinigami",
  cargo: "Tenente da 10° Divisão",
  zanpakuto: "Haineko",
  status: "Vivo",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISsdKAsHYSUhWW-XHDyq31CdvK7vk2jo6tQ&s"
},
{
  id: 18,
  nome: "Toshiro Hitsugaya",
  raca: "Shinigami",
  cargo: "Capitão da 10° Divisão",
  zanpakuto: "Hyorinmaru",
  status: "Vivo",
  imagem: "https://i.redd.it/toshiro-hitsugaya-v0-yqol0lq2735e1.jpg?width=828&format=pjpg&auto=webp&s=0dbe800a1e5c6425ab3fe0f20c215a33e4b720a0"
},
{
  id: 19,
  nome: "Kenpachi Zaraki",
  raca: "Shinigami",
  cargo: "Capitão da 11° Divisão",
  zanpakuto: "Nozarashi",
  status: "Vivo",
  imagem: "https://i.redd.it/luqt2h438x2a1.jpg"
},
{
  id: 20,
  nome: "Yachiru Kusajishi",
  raca: "Shinigami",
  cargo: "Tenente da 11° Divisão",
  zanpakuto: "Sanpo Kenju",
  status: "Desconhecido",
  imagem: "https://i.redd.it/hafphjihe3fd1.jpeg"
},
{
  id: 21,
  nome: "Ikkaku Madarame",
  raca: "Shinigami",
  cargo: "3º Oficial da 11° Divião",
  zanpakuto: "Hozukimaru",
  status: "Morto",
  imagem: "https://i.pinimg.com/736x/89/c3/9d/89c39d5be3a7ee017a71397169a757c9.jpg"
},
{
  id: 22,
  nome: "Yumichika Ayasegawa",
  raca: "Shinigami",
  cargo: "5º Oficial da 11° Divião",
  zanpakuto: "Ruri'iro Kujaku",
  status: "Vivo",
  imagem: "https://static.wikia.nocookie.net/bleach/images/4/45/482Yumichika_profile.png/revision/latest/scale-to-width/360?cb=20170208041100&path-prefix=en"
},
{
  id: 23,
  nome: "Mayuri Kurotsuchi",
  raca: "Shinigami",
  cargo: "Capitão da 12° Divisão",
  zanpakuto: "Ashisogi Jizo",
  status: "Vivo",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTox7Vd0szOJMlMhFPIAp4nPKMg3j_l7ZISXg&s"
},
{
  id: 24,
  nome: "Nemu Kurotsuchi",
  raca: "Artificial",
  cargo: "Tenente da 12° Divisão",
  zanpakuto: "Nulo",
  status: "Morto",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcIC2pFGJQSo-XutyALl-ZB0yCckSRduVSA&s"
},
{
  id: 25,
  nome: "Shunsui Kyoraku",
  raca: "Shinigami",
  cargo: "Ex-capitão da 8° Divisão e Capitão da 1° Divisão",
  zanpakuto: "Katen Kyokotsu",
  status: "Vivo",
  imagem: "https://static.wikia.nocookie.net/bleach-pandamonium-saga/images/6/63/Shunsui.png/revision/latest?cb=20200114212639"
},
{
  id: 26,
  nome: "Jushiro Ukitake",
  raca: "Shinigami",
  cargo: "Capitão da 13° Divisão",
  zanpakuto: "Sogyo no Kotowari",
  status: "Morto",
  imagem: "https://static.wikia.nocookie.net/bleach/images/3/37/335Ukitake%27s_green_eyes.png/revision/latest?cb=20251013153219&path-prefix=en"
},
{
  id: 27,
  nome: "Sajin Komamura",
  raca: "Shinigami",
  cargo: "Capitão da 7° Divisão",
  zanpakuto: "Kokujō Tengen Myō'ō",
  status: "Vivo",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBJFheDKucM5x4myOmNE-6tTtVziCqBEz4qw&s"
},
{
  id: 28,
  nome: "Kaname Tosen",
  raca: ["Shinigami", "Vizard"],
  cargo: "Ex-capitão da 9° Divisão",
  zanpakuto: "Suzumushi",
  status: "Morto",
  imagem: "https://i.pinimg.com/736x/75/af/9f/75af9f694a0a327017f0915ee1ee46f3.jpg"
},
{
  id: 29,
  nome: "Keigo Asano",
  raca: "Humano",
  cargo: "Nulo",
  zanpakuto: "Nulo",
  status: "Vivo",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FFU3rWTCtc76vDATSVeYOlTnr9MvmpNPBQ&s"
},
{
  id: 30,
  nome: "Mizuiro Kojima",
  raca: "Humano",
  cargo: "Nulo",
  zanpakuto: "Nulo",
  status: "Vivo",
  imagem: "https://www.postavy.cz/foto/mizuiro-kojima-foto.jpg"
},
{
  id: 31,
  nome: "Don Kanonji",
  raca: "Humano",
  cargo: "Nulo",
  zanpakuto: "Nulo",
  status: "Vivo",
  imagem: "https://s3.amazonaws.com/comicgeeks/characters/avatars/51526.jpg?t=1661949560"
},
{
  id: 32,
  nome: "Jidanbo Ikkanzaka",
  raca: "Shinigami",
  cargo: "Guardião do Portão Oeste",
  zanpakuto: "Desconhecido",
  status: "Vivo",
  imagem: "https://s3.amazonaws.com/comicgeeks/characters/avatars/52378.jpg?t=1663091522"
},
{
  id: 33,
  nome: "Genryusai Yamamoto",
  raca: "Shinigami",
  cargo: "Capitão da 1° Divisão",
  zanpakuto: "Ryūjin Jakka",
  status: "Morto",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVdajK28huFON1fJmpjLVbMUAnwci2QSz2Q&s"
},
{
  id: 34,
  nome: "Soi Fon",
  raca: "Shinigami",
  cargo: "Capitã da 2° Divisão",
  zanpakuto: "Suzumebachi",
  status: "Vivo",
  imagem: "https://i.pinimg.com/736x/38/bf/c6/38bfc6e08ea9803df8c8cd1b8bd3607a.jpg"
},
{
  id: 35,
  nome: "Retsu Unohana",
  raca: "Shinigami",
  cargo: "Capitã da 4° Divisão e Primeira Kenpachi",
  zanpakuto: "Minazuki",
  status: "Morto",
  imagem: "https://cdn-images.dzcdn.net/images/artist/108c352bd53be9f6502c518ac0b643f6/1900x1900-000000-81-0-0.jpg"
},
{
  id: 36,
  nome: "Sosuke Aizen",
  raca: "Shinigami",
  cargo: "Ex-capitão da 5° Divisão e Líder dos Arrancar",
  zanpakuto: "Kyōka Suigetsu",
  status: "Vivo",
  imagem: "https://static.wikia.nocookie.net/bleach/images/6/68/682Aizen_profile.png/revision/latest/scale-to-width/360?cb=20260319222423&path-prefix=en"
},
{
  id: 37,
  nome: "Ganju Shiba",
  raca: "Shinigami",
  cargo: "Nulo",
  zanpakuto: "Nulo",
  status: "Vivo",
  imagem: "https://static.wikia.nocookie.net/bleach/images/3/37/Ep36GanjuShiba.png/revision/latest?cb=20210409065821&path-prefix=en"
},
{
  id: 38,
  nome: "Tatsuki Arisawa",
  raca: "Humana",
  cargo: "Nulo",
  zanpakuto: "Nulo",
  status: "Vivo",
  imagem: "https://preview.redd.it/tatsuki-deserved-more-screentime-v0-i5lz579lwgre1.jpeg?width=640&crop=smart&auto=webp&s=cbd09ee1f7bcb7b8d663a9df305ce1c0df78bb6f"
},
{
  id: 39,
  nome: "Ulquiorra Cifer",
  raca: "Arrancar",
  cargo: "Espada N° 4",
  zanpakuto: "Murciélago",
  status: "Morto",
  imagem: "https://i1.sndcdn.com/artworks-biTDJHbhlMT9TLgV-gv3iMA-t500x500.png"
},
{
  id: 40,
  nome: "grimmjow jaegerjaquez",
  raca: "Arrancar",
  cargo: "Espada N° 6",
  zanpakuto: "Pantera",
  status: "Vivo",
  imagem: "https://i.redd.it/happy-birthday-grimmjow-jaegerjaquez-v0-qseb2jusp7gf1.jpg?width=736&format=pjpg&auto=webp&s=aa96ffb302c08e0114d887931dae36d21996d054"
}
];


app.get("/", (req, res) => {
  res.send("API Bleach rodando ⚔️");
});


app.get("/bleach", (req, res) => {
  res.json(bleach);
});


app.get("/bleach/:id", (req, res) => {
  const id = Number(req.params.id);
  const personagem = bleach.find(p => p.id === id);

  if (!personagem) {
    return res.status(404).json({ mensagem: "Personagem não localizado" });
  }

  res.json(personagem);
});


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


app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});