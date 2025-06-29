use plp_bookstore;

db.books.insertMany([
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 45.99,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 37.99,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 24.99,
    in_stock: true,
    pages: 320,
    publisher: "Avery"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    published_year: 1949,
    price: 15.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 29.99,
    in_stock: true,
    pages: 443,
    publisher: "Harvill Secker"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 19.99,
    in_stock: true,
    pages: 208,
    publisher: "HarperTorch"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    published_year: 2011,
    price: 32.50,
    in_stock: false,
    pages: 336,
    publisher: "Crown Business"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    published_year: 2016,
    price: 26.99,
    in_stock: true,
    pages: 304,
    publisher: "Grand Central"
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    genre: "Business",
    published_year: 2014,
    price: 23.99,
    in_stock: true,
    pages: 224,
    publisher: "Crown Business"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 27.00,
    in_stock: false,
    pages: 352,
    publisher: "Random House"
  }
]);