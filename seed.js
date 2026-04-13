require('dotenv').config();
const mongoose = require('mongoose');
const Filme = require('./src/models/Filme');

const filmes = [
  { titulo: 'Inception', diretor: 'Christopher Nolan', ano: 2010, genero: 'Ficção Científica', nota: 9.5 },
  { titulo: 'Parasita', diretor: 'Bong Joon-ho', ano: 2019, genero: 'Drama', nota: 9.2 },
  { titulo: 'O Poderoso Chefão', diretor: 'Francis Ford Coppola', ano: 1972, genero: 'Drama', nota: 9.8 },
  { titulo: 'Matrix', diretor: 'Wachowski', ano: 1999, genero: 'Ficção Científica', nota: 8.9 },
  { titulo: 'Vingadores: Endgame', diretor: 'Russo Brothers', ano: 2019, genero: 'Ação', nota: 8.4 },
  { titulo: 'Coringa', diretor: 'Todd Phillips', ano: 2019, genero: 'Drama', nota: 8.6 },
  { titulo: 'Toy Story', diretor: 'John Lasseter', ano: 1995, genero: 'Animação', nota: 8.3 },
  { titulo: 'O Silêncio dos Inocentes', diretor: 'Jonathan Demme', ano: 1991, genero: 'Terror', nota: 8.7 },
  { titulo: 'Pulp Fiction', diretor: 'Quentin Tarantino', ano: 1994, genero: 'Drama', nota: 9.1 },
  { titulo: 'De Volta para o Futuro', diretor: 'Robert Zemeckis', ano: 1985, genero: 'Ficção Científica', nota: 8.8 },
];

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  await Filme.deleteMany();
  await Filme.insertMany(filmes);
  console.log('10 filmes inseridos com sucesso!');
  process.exit();
});