const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Caroline Espindula',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQEUG9NFF5UtMQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1666196641932?e=1749081600&v=beta&t=SC9TBnGND3Y2VeKnqiGnSQ6kGoeyZOf14U40TshJNFw',
        minibio: 'Data student'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora ProgaMAria'
    }
]

function mostraMulheres (request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)