const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'Título é obrigatório'],
    trim: true,
    maxlength: [200, 'Título deve ter no máximo 200 caracteres']
  },
  diretor: {
    type: String,
    required: [true, 'Diretor é obrigatório'],
    trim: true
  },
  ano: {
    type: Number,
    required: [true, 'Ano é obrigatório'],
    min: [1888, 'Ano inválido'],
    max: [new Date().getFullYear(), 'Ano não pode ser futuro']
  },
  genero: {
    type: String,
    required: [true, 'Gênero é obrigatório'],
    enum: ['Ação', 'Drama', 'Comédia', 'Terror', 'Ficção Científica', 'Animação', 'Documentário', 'Outro']
  },
  nota: {
    type: Number,
    min: [0, 'Nota mínima é 0'],
    max: [10, 'Nota máxima é 10'],
    default: null
  },
  sinopse: {
    type: String,
    maxlength: [1000, 'Sinopse deve ter no máximo 1000 caracteres'],
    default: ''
  }
}, {
  timestamps: true // cria createdAt e updatedAt automaticamente
});

module.exports = mongoose.model('Filme', filmeSchema);