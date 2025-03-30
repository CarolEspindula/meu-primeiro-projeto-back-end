const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: 'Caroline Espindula',
    imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQEUG9NFF5UtMQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1666196641932?e=1749081600&v=beta&t=SC9TBnGND3Y2VeKnqiGnSQ6kGoeyZOf14U40TshJNFw',
    minibio: 'Data student'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)