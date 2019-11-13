var mongoose = require('mongoose');

var alunoSchema = mongoose.Schema({
    matricula: Number,
    name: String,
    email: String,
    telefone: String,
    data_nascimento: Date,
    cursos: Array,
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Aluno = module.exports = mongoose.model('aluno', alunoSchema);
module.exports.get = function (callback, limit) {
    Aluno.find(callback).limit(limit);
}