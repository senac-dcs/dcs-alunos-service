let Aluno = require('../models/alunoModel');

exports.all = function (req, res) {
    try {
        Aluno.get(function (err, alunos) {
            res.json({
                status: "Successo",
                message: "Listagem executada com sucesso!",
                data: alunos
            });
        });
    } catch (err) {
        res.json({
            status: "Erro",
            message: err,
        });
    }
};

exports.new = function (req, res) {
    try {
        var aluno = new Aluno();
     
        aluno.matricula = req.body.matricula;
        aluno.nome = req.body.nome;
        aluno.email = req.body.email;
        aluno.cpf = req.body.cpf;
        aluno.telefone = req.body.telefone;
        aluno.data_nascimento = req.body.data_nascimento;
        aluno.cursos = req.body.cursos;

        aluno.save(function (err) {
            res.json({
                status: "Sucesso",
                message: "Aluno criado com sucesso!",
                data: aluno
            });
        });
    } catch (err) {
        res.json({
            status: "Erro",
            message: err,
        });
    }
};

exports.view = function (req, res) {
    try {
        Aluno.findById(req.params.aluno_id, function (err, aluno) {
            res.json({
                status:"Sucesso",
                message: 'Carregando detalhes...',
                data: aluno
            });
        });
    } catch (err) {
        res.json({
            status: "Erro",
            message: err,
        });
    }
};

exports.update = function (req, res) {
    try {
        Aluno.findById(req.params.aluno_id, function (err, aluno) {
            aluno.matricula = aluno.matricula;
            aluno.nome = req.body.nome ? req.body.nome : aluno.nome;
            aluno.email = req.body.email ? req.body.email : aluno.email;
            aluno.cpf = req.body.cpf ? req.body.cpf : aluno.cpf;
            aluno.telefone = req.body.telefone ? req.body.telefone : aluno.telefone;
            aluno.data_nascimento = req.body.data_nascimento ? req.body.data_nascimento : aluno.data_nascimento;
            aluno.cursos = req.body.cursos ? req.body.cursos : aluno.cursos;

            aluno.save(function (err) {
                res.json({
                    status: "Sucesso",
                    message: 'Dados atualizados!',
                    data: aluno
                });
            });
        });
    } catch (err) {
        res.json({
            status: "Erro",
            message: err,
        });
    }
};

exports.delete = function (req, res) {
    try {
        Aluno.remove({
            _id: req.params.aluno_id
        }, function (err) {
            res.json({
                status: "Successo",
                message: 'Deletado!'
            });
        }
        );
    } catch (err) {
        res.json({
            status: "Erro",
            message: err,
        });
    }
};
