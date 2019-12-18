## Configurações

É necessário criar um arquivo chamado **.env** na raiz do projeto, abaixo são os campos que necessitam ser preenchidos.

```
# App Infos
APP_PORT=3000
APP_ENV="development"

# MongoDB Configs
DB_HOST="localhost"
DB_PORT=27017
DB_USER=""
DB_PASS=""
DB_NAME="dcs_aluno"

# API Gateway
API_URL="https://dcs-api-gateway.herokuapp.com"
```
<s>Ps. Existe um arquivo de exemplo como guideline.</s>

## Rotas

As rotas definidas são:
+ \<url\>/alunos
    + GET \<url\>/alunos/                             -> Mostra todos alunos
    + POST \<url\>/alunos/                            -> Cria um novo aluno
+ \<url\>/alunos/:aluno_id                            
    + GET \<url\>/alunos/:aluno_id                    -> Mostra um aluno específico
    + DELETE \<url\>/alunos/:aluno_id                 -> Deleta um aluno específico
    + PUT \<url\>/alunos/:aluno_id                    -> Atualiza um aluno específico
    + PATCH \<url\>/alunos/:aluno_id                  ->Atualiza um aluno específico
+ \<url\>/alunos/:aluno_id/:curso_id
    + GET \<url\>/alunos/:aluno_id/:curso_id          -> Mostra um curso específico de um aluno específico
    + POST \<url\>/alunos/:aluno_id/:curso_id         -> Adiciona um curso específico de um aluno específico
    + DELETE \<url\>/alunos/:aluno_id/:curso_id       -> Deleta um curso específico de um aluno específico

## Modelo dos dados

**Aluno**
```
matricula: {
        type: Number,
        index: {unique: true}
    },
    nome: {
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
```

**Exemplo para POST**
```
{
	"matricula": 123123,
	"nome" : "Eduardo",
	"email": "eduardo@teste.com",
	"telefone" : "1233-1233",
	"data_nascimento": "2019-02-19T00:00:00z",
	"cursos": [
		{"curso_id":"1234","curso":"SI","carga_horaria":120},
		{"curso_id":"4321","curso":"ADS","carga_horaria":240},
		{"curso_id":"1324","curso":"Francês","carga_horaria":60}
	]
}
```
<s>Ps. As informações do curso dependem do MS de Curso.</s>

## Instalação

Para instalar basta seguir o processo abaixo:

```
git clone https://github.com/senac-dcs/dcs-alunos-service.git
cd dcs-alunos-service
npm install
touch .env
  <add values on the file created>
npm start
```
