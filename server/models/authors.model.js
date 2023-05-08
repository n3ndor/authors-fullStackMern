const mongoose = require("mongoose");

const AuthorsSchema = {
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters"]
    }
}

module.exports = mongoose.model("Author", AuthorsSchema);