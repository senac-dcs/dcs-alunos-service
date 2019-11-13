const routes = require('express').Router();
const alunoController = require('../controllers/alunoController');

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'All good!' });
});

routes.route('/alunos')
    .get(alunoController.all)
    .post(alunoController.new);
routes.route('/alunos/:aluno_id')
    .get(alunoController.view)
    .patch(alunoController.update)
    .put(alunoController.update)
    .delete(alunoController.delete);

module.exports = routes;