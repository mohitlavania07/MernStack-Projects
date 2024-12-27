const express = require('express');
const app = express();
const path = require('path');
const phone = require('./data'); 

app.use(express.json())

const books = [{
    id: 1,
    name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925
    },
    {
        id: 2,
        name: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 1951
        },
        {
            id: 3,
            name: 'The Hitchhiker\'s Guide to the Galaxy',
            author: 'Douglas Adams',
            year: 1979
            }
            ];

// Serve static files from the 'calculator' directory
app.use(express.static('calculator'));

app.get('/', (req, res) => {
    res.send('<h1>phone</h1><a href="api/phone">Click Here 🤗</a>');
});

app.get('/api/phone', (req, res) => {
   
    res.json(phone);
});

app.post('/books',(req,res)=>{
    console.log(req.body)
})

app.put('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const book = books.find((book)=> book.id === id)
    res.send(book)
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
