'use strict';

const { NOW } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     return queryInterface.bulkInsert('Livros', [{
       nome: 'Barba Ensopada de Sangue',
        autor: 'Daniel Gaelera',
        editora: 'Compania das Letras',
        ano: 2012,
        genero: 'Mistério',
        foto: 'https://m.media-amazon.com/images/I/51suPAhsH1L.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Uma fração do todo',
        autor: 'Steve Toltz ',
        editora: 'Record',
        ano: 2011,
        genero: "Ficção, Romance",
        foto: 'https://images-na.ssl-images-amazon.com/images/I/91PW0yyAQHL.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Uma Aprendizagem ou O Livro dos Prazeres',
        autor: 'Clarice Lispector',
        editora: 'Rocco',
        ano: 1969,
        genero: "Romance",
        foto: 'https://images-na.ssl-images-amazon.com/images/I/51wIkpfdoxL.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    
    
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    

     return queryInterface.bulkDelete('People', null, {});
     
  }
};
