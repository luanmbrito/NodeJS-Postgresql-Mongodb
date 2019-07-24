const ICrud = require('./../interfaces/interfaceCrud')
const Sequelize = require('sequelize')

class Postgres extends ICrud{
    constructor(connection,schema){
        super()
        this._connection = connection
        this._schema = schema
        
    }
    
    async isConnected(){
        try {
            await this._connection.authenticate()
            return true
        } catch (errir) {
            console.log('fail',error)
            return false
            
        }
    }
    static async defineModel(connection, schema){
        const model = connection.define(
            schema.name, schema.schema, schema.options
        )
        /*const model = connection.define('heroes',{
            id:{
                type:Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome:{
                type:Sequelize.STRING,
                required: true
            },
            poder:{
                type:Sequelize.STRING,
                require: true
            }
        },{
            tableName: 'TB_HEROIS',
            freezeTableName: false,
            timestamps: false
        })*/
        await model.sync()
        return model
    }
    static async connect(){
        const connection = new Sequelize(
            'heroes',
            'luan',
            'luan',
            {
                host: '192.168.100.19',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false,
                logging:false
            }
        )

        return connection
    }
    async create(item){
        const { dataValues } = await this._schema.create(item)
        console.log(dataValues)
        return dataValues
    }

    async read(item = {}){
       return this._schema.findAll({where: item, raw:true})
    }

    async update(id, item){
        console.log('item', item)
        const r = await this._schema.update(item,{where: {id: id}})
        return r
    }

    async delete(id){
        const query = id ? { id }: {}
        return this._schema.destroy({where:query})
    }

}

module.exports = Postgres