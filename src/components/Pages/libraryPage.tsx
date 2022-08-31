import BookShelf from "../UI/bookShelf";
import { Link } from "react-router-dom";
import { IBook } from '../../models';
import './libraryPage.css';

type IProps = {
    books: IBook[];
    addBook: Function;
}

function LibraryPage({ books, addBook }: IProps) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf
                        shelfTitle="Currently Reading"
                        books={books.filter((book) => book.shelf === "currentlyReading")}
                        addBook={addBook}
                    />
                    <BookShelf
                        shelfTitle="Want to Read"
                        books={books.filter((book) => book.shelf === "wantToRead")}
                        addBook={addBook}
                    />
                    <BookShelf
                        shelfTitle="Read"
                        books={books.filter((book) => book.shelf === "read")}
                        addBook={addBook}
                    />
                </div>
            </div>

            <Link to="/search" className="open-search">
                <span>Add a book</span>
            </Link>
        </div>
    );
}
export default LibraryPage;
