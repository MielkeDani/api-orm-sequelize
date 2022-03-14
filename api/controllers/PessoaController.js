const database = require('../models')

class PessoaController {

    //static não precisa usar a palavre chave 
    //async await esperar ele ler o banco para dps voltar
    //findAll() -> Select * FROM Tabela (SEQUELIZE)
    // GET 
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    //GET
    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaPessoa)
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }

    //POST
    static async criaPessoa (req, res ) { 
        const novaPessoa = req.body
        try { 
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        } catch (erro) { 
            return res.status(500).json(erro.message)
        }
    } 


    //PUT
    static async atualizaPessosa ( req, res ) { 
        const novasInfos = req.body
        const { id } = req.params
        try { 
            await database.Pessoas.update(novasInfos, {where: { id:Number(id)}})  
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id:Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        } catch (erro) { 
            return res.status(500).json(erro.message)
        }
    }


    //DELETE
    static async apagaPessoa (req, res ) { 
        const {id} = req.params 
        try { 
            await database.Pessoas.destroy( {where: { id:Number( id ) } } )
            return res.status(200).json({mensagem: `id ${id} foi deletado.`})
        } catch (erro) { 
            res.status(500).json(erro.message)
        }
    }
}
module.exports = PessoaController