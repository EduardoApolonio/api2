const Filme = require('../models/Filme');

// GET /api/filmes — listar todos
const listarFilmes = async (req, res) => {
  try {
    const { genero, ano } = req.query;
    const filtro = {};
    if (genero) filtro.genero = genero;
    if (ano) filtro.ano = Number(ano);

    const filmes = await Filme.find(filtro).sort({ createdAt: -1 });
    res.status(200).json({ total: filmes.length, filmes });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar filmes', detalhe: err.message });
  }
};

// GET /api/filmes/:id — buscar por ID
const buscarFilme = async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.id);
    if (!filme) return res.status(404).json({ erro: 'Filme não encontrado' });
    res.status(200).json(filme);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar filme', detalhe: err.message });
  }
};

// POST /api/filmes — criar
const criarFilme = async (req, res) => {
  try {
    const filme = new Filme(req.body);
    await filme.save();
    res.status(201).json({ mensagem: 'Filme criado com sucesso', filme });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar filme', detalhe: err.message });
  }
};

// PUT /api/filmes/:id — atualizar
const atualizarFilme = async (req, res) => {
  try {
    const filme = await Filme.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!filme) return res.status(404).json({ erro: 'Filme não encontrado' });
    res.status(200).json({ mensagem: 'Filme atualizado', filme });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar filme', detalhe: err.message });
  }
};

// DELETE /api/filmes/:id — deletar
const deletarFilme = async (req, res) => {
  try {
    const filme = await Filme.findByIdAndDelete(req.params.id);
    if (!filme) return res.status(404).json({ erro: 'Filme não encontrado' });
    res.status(200).json({ mensagem: 'Filme deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar filme', detalhe: err.message });
  }
};

module.exports = { listarFilmes, buscarFilme, criarFilme, atualizarFilme, deletarFilme };