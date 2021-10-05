const {Router} = require('express');
const LivrosController = require('../controller/LivroController');

 const router = Router();

router.get('/livros' , LivrosController.mostraosLivros)
router.get('/livros/:id' , LivrosController.mostraUmLivro)
router.post('/livros' , LivrosController.colocaLivro)
router.put('/livros/:id' , LivrosController.alteraLivro)
router.delete('/livros/:id' , LivrosController.deletaLivro)

 module.exports = router;