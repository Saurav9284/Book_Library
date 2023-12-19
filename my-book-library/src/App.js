// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Compoents/Header';
import BookSearch from './Compoents/BookSearch';
import BookList from './Compoents/BookList';
import BorrowHistory from './Compoents/BorrowHistory';

const App = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [borrowHistory, setBorrowHistory] = useState([]);

  useEffect(() => {
  
    axios.get('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books')
      .then(response => {
        const bookData = response.data.map(book => ({ id: book.id, title: book.title }));
        setBooks(bookData);
        setFilteredBooks(bookData);
      })
      .catch(error => {
        console.error('Error fetching book data:', error);
      });
  }, []);

  const handleSearch = (query) => {
  
    const filtered = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <Header />
      <BookSearch onSearch={handleSearch} />
      <BookList books={filteredBooks} />
      <BorrowHistory history={borrowHistory} />
    </div>
  );
};

export default App;
