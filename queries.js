// Select database
use plp_bookstore;

// View all books
db.books.find();

// View all books in a pretty format
db.books.find().pretty();

// Find books by a specific author
db.books.find({ author: "Robert C. Martin" });

// Find books published after 2010
db.books.find({ published_year: { $gt: 2010 } });

// Find books priced below $30
db.books.find({ price: { $lt: 30 } });

// Find books that are in stock
db.books.find({ in_stock: true });

// Find books with more than 400 pages
db.books.find({ pages: { $gt: 400 } });

// Find books of genre Programming or Fiction
db.books.find({ genre: { $in: ["Programming", "Fiction"] } });

// Count how many books are in stock
db.books.countDocuments({ in_stock: true });

// Find books sorted by price ascending
db.books.find().sort({ price: 1 });

// Find books sorted by published year descending
db.books.find().sort({ published_year: -1 });

// Limit to first 3 books
db.books.find().limit(3);

// Find books with page count between 300 and 500
db.books.find({ pages: { $gte: 300, $lte: 500 } });

// Update price of a specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 17.99 } }
);

// Delete a book by title
db.books.deleteOne({ title: "Atomic Habits" });

// Add a new book
db.books.insertOne({
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  published_year: 2016,
  price: 22.99,
  in_stock: true,
  pages: 304,
  publisher: "Grand Central Publishing"
});

// Group books by genre and count
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      total_books: { $sum: 1 }
    }
  }
]);

// Project only title and author fields
db.books.find({}, { title: 1, author: 1, _id: 0 });

// Find books where title contains "Code"
db.books.find({ title: /Code/ });

// Use $or to find books that are either in stock or under $25
db.books.find({
  $or: [{ in_stock: true }, { price: { $lt: 25 } }]
});

// Find distinct publishers
db.books.distinct("publisher");

// Rename a field (e.g., from `pages` to `page_count`)
db.books.updateMany({}, { $rename: { "pages": "page_count" } });