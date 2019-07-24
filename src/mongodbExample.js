//npm install mongoose
const Mongoose = require('mongoose')
Mongoose.connect('mongodb://luan:luan@192.168.100.19:27017/herois',
    {useNewUrlParser: true},function(error){
        if(!error) return;

        console.log('Falaha na conexão', error)
    })

const connection = Mongoose.connection

// function nomedafuncao(){}
// const minhaFuncao = function(){}
// const minaFuncaoArrow = () => {}
// const minaFuncaoArrow = (params) => console.log()
connection.once('open',() => console.log('database rodando'))

/*setTimeout(() => {
    const state = connection.readyState
    console.log('state', state)
}, 1000)

    0: Disconectado
    1: conectado
    2: conectando
    3: disconectando
*/

const heroisSchema = new Mongoose.Schema({
    nome:{
        type:String,
        required:true
    },
    poder:{
        type: String,
        required:true
    },
    insertedAt:{
        type: Date,
        default: new Date()
    }
})

const model = Mongoose.model('herois', heroisSchema)

async function main(){
    const resultCadastrar = await model.create({
        nome: 'Batman',
        poder:'Dinheiro'
    })
    console.log('result cadastrar', resultCadastrar)

    const listItens = await model.find()
    console.log('items', listItens)
}

main()