const Author = require("../models/authors.model");


const createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.json({ newAuthor });
        })
        .catch((err) => {
            res.status(400).json({ errors: err.errors });
        });
};

const getAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json(allAuthors);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor =>
            res.json(oneAuthor))
        .catch((err) =>
            res.status(400).json(err));
};

const putUpdate = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch((err) =>
            res.status(400).json(err));
}

const deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(delAuth => res.json(delAuth))
        .catch((err) =>
            res.status(400).json(err));
}
module.exports = { createNewAuthor, getOneAuthor, getAllAuthors, putUpdate, deleteAuthor };