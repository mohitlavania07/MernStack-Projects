const express = require('express');
const app = express();

 
app.use(express.json())
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Initial array of books
const books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" }
];

// Route to get the list of books
app.get('/books', (req, res) => {
  res.json(books);
});

// Route to handle book submissions
app.post('/books', (req, res) => {
  console.log(req.body);
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };

  books.push(book); 
  res.json(books);
});

app.post('/data',(req,res)=>{
    console.log(req.body);
    const newBook = req.body;
    newBook.id = books.length +1;
    books.push(newBook);
    res.status(201).json(books);
})

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
