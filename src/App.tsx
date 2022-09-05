import "./App.css";
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import { IBook } from "./models";


function App() {
  const LibraryPage = React.lazy(() => import('./Pages/library'));
  const SearchPage = React.lazy(() => import('./Pages/searchPage'));
  const DetailsPage = React.lazy(() => import('./Pages/details'));
  const NotFound = React.lazy(() => import('./Pages/notFound'));


  var initialBooks: IBook[] = []
  const [books, setBooks] = useState(initialBooks);
  const addBook = (book: IBook) => {
    setBooks([...books.filter((item) => item.id !== book.id), book]);
  };

  useEffect(() => {
    BooksAPI.getAll().then((data) => setBooks(data));
  }, []);


  return (
    <div>
      <Suspense fallback={<span>Loading ...</span>}>
        <Router>
          <Routes>
            <Route path="/" element={<LibraryPage books={books} addBook={addBook} />} />
            <Route path="/search" element={<SearchPage books={books} addBook={addBook} />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;