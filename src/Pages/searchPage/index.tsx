import './index.css';
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import { useEffect, useState, useMemo } from "react";
import Book from "../../components/book";
import debounce from "lodash.debounce";
import { IBook, EventModel } from '../../models';

type IProps = {
    books: IBook[];
    addBook: Function;
}



function SearchPage({ books, addBook }: IProps) {
    const [query, setQuery] = useState("");
    const [searchedBooks, setSearchedBooks] = useState([]);

    useEffect(() => {
        if (query !== "") {
            BooksAPI.search(query, 10).then((books) =>
                !books.error ? setSearchedBooks(books) : setSearchedBooks([]))

        } else {
            setSearchedBooks([]);
        }
    }, [query]);
    function handleSearch(event: EventModel) {
        setQuery(event.target.value);
    }
    const debouncedHandleSearch = useMemo(() => debounce(handleSearch, 400), []);

    useEffect(() => {
        return () => {
            debouncedHandleSearch.cancel();
        };
    }, [debouncedHandleSearch]);

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        onChange={debouncedHandleSearch}
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchedBooks.length !== 0 && query
                        ? searchedBooks
                            .filter((book: IBook) => book?.imageLinks?.smallThumbnail)
                            .map((book: IBook) => {
                                let existedBook = books.find(
                                    (existedBook) => existedBook.id === book.id
                                );
                                return existedBook ? (
                                    <Book key={book.id} book={existedBook} addBook={addBook} />
                                ) : (
                                    <Book key={book.id} book={book} addBook={addBook} />
                                );
                            })
                        : !query ?
                            <div>
                                <h2>Please put the message text in the Search bar</h2>
                            </div>
                            :
                            <div>
                                <h2>No books found</h2>
                            </div>}
                </ol>
            </div>
        </div>
    );
}
export default SearchPage;
