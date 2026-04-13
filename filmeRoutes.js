const express = require('express');
const router = express.Router();
const {
  listarFilmes, buscarFilme, criarFilme, atualizarFilme, deletarFilme
} = require('../controllers/filmeController');
const { validarFilme, checarErros } = require('../middlewares/validacao');

router.get('/', listarFilmes);
router.get('/:id', buscarFilme);
router.post('/', validarFilme, checarErros, criarFilme);
router.put('/:id', validarFilme, checarErros, atualizarFilme);
router.delete('/:id', deletarFilme);

module.exports = router;