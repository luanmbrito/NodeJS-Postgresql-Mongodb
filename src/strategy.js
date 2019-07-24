class MongoDB extends ICrud {
    constructor(){
        super()
    }

    create(item){
        console.log('O item foi salvo em MongoDB')
    }
}

class Postgres extends ICrud{
    constructor(){
        super()
    }

    create(item){
        console.log('O item foi salvo em Postgres')
    }

}



const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()

contextMongo.read()