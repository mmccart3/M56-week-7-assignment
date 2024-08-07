require("./db/connection.js");

const Book = require("./db/models/bookmodel.js")

const express = require("express");
const app = express();

app.use(express.json());

// CREATE add a book
app.post("/addbook", async (req, res) => {
    try {
        const results = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        });
        const responseMessage = {
            message: `Book ${req.body.title} has been added`,
            dbresponse: results
        }
        res.status(201).send(responseMessage);
    } catch (error) {
        console.log(error)
        const responseMessage = {
            message: `Book ${req.body.title} has NOT been added`,
            dbresponse: error
        }
        res.status(400).send(responseMessage);
    }
});

// READ = list all books in the database
app.get("/listBooks", async (req,res) => {
    // Put your code here to list all books
})

// UPDATE = update the author and genre of a book
app.get("/updatebook", async (req,res) => {
    // Put your code here to update a book
})

// DELETE = remove a book from the database
app.get("/delBook", async (req,res) => {
    // Put your code here to delete a book
})


app.listen(5001, () => console.log("Server is listening on port 5001"))