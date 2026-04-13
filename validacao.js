const { body, validationResult } = require('express-validator');

const validarFilme = [
  body('titulo').notEmpty().withMessage('Título é obrigatório').isLength({ max: 200 }),
  body('diretor').notEmpty().withMessage('Diretor é obrigatório'),
  body('ano').isInt({ min: 1888, max: new Date().getFullYear() }).withMessage('Ano inválido'),
  body('genero').isIn(['Ação', 'Drama', 'Comédia', 'Terror', 'Ficção Científica', 'Animação', 'Documentário', 'Outro'])
    .withMessage('Gênero inválido'),
  body('nota').optional().isFloat({ min: 0, max: 10 }).withMessage('Nota deve ser entre 0 e 10'),
];

const checarErros = (req, res, next) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }
  next();
};

module.exports = { validarFilme, checarErros };