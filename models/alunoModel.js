var mongoose = require('mongoose');

var alunoSchema = mongoose.Schema({
    matricula: Number,
    name: {
        type: String, 
        lowercase: true, 
        required: [true, "Não pode ficar em branco"], 
        match: [/^[a-zA-Z0-9]+$/, 'É inválido']

    },
    email: {
        type: String,
         lowercase: true, 
         required: [true, "Não pode ficar em branco"], 
         match: [/\S+@\S+\.\S+/, 'É inválido']
    },
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