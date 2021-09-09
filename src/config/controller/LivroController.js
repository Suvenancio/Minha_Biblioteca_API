const database = require('../../models');

class LivrosController{

    static async mostraosLivros(req,res){

        try{
            const todosOsLivros = await database.Livros.findAll();

            return res.status(200).json(todosOsLivros)
        }catch(e){
            res.status(400).json(e)
        }
    } ;
    static async mostraUmLivro(req,res){
        
        try{
            let id = req.params.id;

            const umlivro = await database.Livros.findOne({ where:{id: id} });

            return res.status(200).json(umlivro)
        }catch(e){
            res.status(400).json(e)
        }
    };
    static async colocaLivro (req,res){
    
        
        try{
            let novoLivro = req.body;

            const atualizaLivro = await database.Livros.create(novoLivro);

            return res.status(200).json(atualizaLivro)
        }catch(e){
            res.status(400).json(e)
        }
    };
    static async alteraLivro (req,res){

        try{
            let id = req.params.id;
            let atualiza = req.body;

            await database.Livros.update(atualiza,{ where:{id: id} });

            const atualizaLivro = await database.Livros.findOne({ where:{id: id} });

            return res.status(200).json(atualizaLivro)
        }catch(e){
            res.status(400).json(e)
        }
    };
    static async deletaLivro (req,res){
        
    
        try{
            let id = req.params.id;

            const deletaLivro = await database.Livros.destroy({ where:{id: id} })

            return res.status(200).json(deletaLivro)
        }catch(e){
            res.status(400).json(e)
        }
    };
}

module.exports = LivrosController