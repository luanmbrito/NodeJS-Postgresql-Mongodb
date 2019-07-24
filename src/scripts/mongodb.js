// docker ps 
// docker exec -it id_mongo mongo -u luan -p luan --authenticationDatabase herois
// databases
// show dbs
//mudando o contexto para uma database
// use herois
//mostar tables(colecoes)
// show collections

db.herois.insert({
    nome: 'Flash',
    poder: 'velocidade',
    dataNascimento: '1998-01-01'
})

db.herois.find()
db.herois.find().pretty()

for(let i=0; i <= 1000; i++)
{
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: 'velocidade',
        dataNascimento: '1998-01-01'
    })
    
}

db.herois.count()
db.herois.findOne()
db.herois.find().limit(1000).sort({nome: -1})
db.herois.find({},{poder: 1, _id:0})

//create
db.herois.insert({
    nome: 'Flash',
    poder: 'velocidade',
    dataNascimento: '1998-01-01'
})

//read
db.herois.find()

//update
db.herois.update({_id: ObjectId("d5415abndjaadas")}, 
{nome: 'Mulher Maravilha'})

db.herois.update({_id: ObjectId("d5415abndjaadas")},
                {$set:{nome:'Lanterna Verde'}})

                
db.herois.update({poder:'Velocidade'},
                {$set:{nome:'super força'}})

//delete
db.herois.remove({nome:'Mulher Maravilha'})