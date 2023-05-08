const authorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.post("/author", authorController.createNewAuthor);
    app.get("/author/:id", authorController.getOneAuthor);
    app.get("/author", authorController.getAllAuthors);
    app.put("/author/:id", authorController.putUpdate);
    app.delete("/author/:id", authorController.deleteAuthor)
};
