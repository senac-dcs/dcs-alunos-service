let Aluno = require('../models/alunoModel');

exports.all = function (req, res) {
    Aluno.get(function (err, alunos) {
        if (err) {
            res.json({
                status: "erro",
                message: err,
            });
        }
        res.json({
            status: "successo",
            message: "Listagem executada com sucesso!",
            alunos: alunos
        });
    });
};

exports.new = function (req, res) {
    var aluno = new Aluno();
    console.log(req.body);
    aluno.matricula = req.body.matricula;
    aluno.name = req.body.name ? req.body.name : aluno.name;
    aluno.email = req.body.email;
    aluno.cpf = req.body.cpf;
    aluno.telefone = req.body.telefone;
    aluno.data_nascimento = req.body.data_nascimento;
    aluno.cursos = req.body.cursos;
    
    aluno.save(function (err) {
    res.json({
            message: 'Aluno criado!',
            data: aluno
        });
    });
};

exports.view = function (req, res) {
    Aluno.findById(req.params.aluno_id, function (err, aluno) {
        if (err)
            res.send(err);
        res.json({
            message: 'Carregando detalhes...',
            data: aluno
        });
    });
};

exports.update = function (req, res) {
    Aluno.findById(req.params.aluno_id, function (err, aluno) {
        if (err)
            res.send(err);
            aluno.matricula = req.body.matricula;
            aluno.name = req.body.name ? req.body.name : aluno.name;
            aluno.email = req.body.email;
            aluno.cpf = req.body.cpf;
            aluno.telefone = req.body.telefone;
            aluno.data_nascimento = req.body.data_nascimento;
            aluno.cursos = req.body.cursos;

        aluno.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Dados atualizados!',
                data: aluno
            });
        });
    });
};

exports.delete = function (req, res) {
    Aluno.remove({
        _id: req.params.aluno_id
    }, function (err) {
        if (err)
            res.send(err);
        res.json({
                status: "successo",
                message: 'Deletado!'
            });
        }
    );
};

