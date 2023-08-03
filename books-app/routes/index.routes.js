const express = require('express');
const router = express.Router();

const Book = require('./../models/Book.model')

router.get("/", (req, res, next) => {
  res.render("index");
})

router.get('/libros/listado', (req, res) => {

  Book
    .find()
    .then(books => res.render('books/list', { books }))
    .catch(err => console.log(err))
})



router.get('/libros/detalles/:book_id', (req, res) => {

  const { book_id } = req.params

  Book
    .findById(book_id)
    .then(book => res.render('books/details', book))
    .catch(err => console.log(err))

})

module.exports = router