const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

// METODO CRUD
/* 
C -> CREATE 
R -> READ 
U -> UPDATE 
D -> DELETE 
*/

// Ler 
router.get('/pessoas', PessoaController.pegaTodasAsPessoas )
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa )
//Criar
router.post('/pessoas/', PessoaController.criaPessoa )
//Atualizar
router.put('/pessoas/:id', PessoaController.atualizaPessosa )
//Deletar
router.delete('/pessoas/:id', PessoaController.apagaPessoa )

module.exports = router