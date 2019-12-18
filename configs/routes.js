const routes = require('express').Router();
const alunoController = require('../controllers/alunoController');

routes.get('/status', (req, res) => {
    res.status(200).json({ message: 'All good!' });
});

routes.route('/v1')
    .get(alunoController.all)
    .post(alunoController.new);
routes.route('/v1/:aluno_id')
    .get(alunoController.view)
    .patch(alunoController.update)
    .put(alunoController.update)
    .delete(alunoController.delete);

module.exports = routes;