import './index.css';
import Book from "../book";
import * as BooksAPI from "../../BooksAPI";
import { IBook } from '../../models';
import camelCase from "lodash.camelcase";

type IProps = {
    books: IBook[];
    shelfTitle: string;
    addBook: Function;
}


function BookShelf({ books, shelfTitle, addBook }: IProps) {
    const handleDrop = (event: any) => {
        let draggedBook = JSON.parse(event.dataTransfer.getData("book"));
        let shelfName = camelCase(shelfTitle);
        if (!(draggedBook.shelf === shelfName)) {
            draggedBook.shelf = shelfName;
            BooksAPI.update(draggedBook, shelfName);
            addBook(draggedBook);
        }
    }

    return (
        <div onDragOver={(e) => { e.preventDefault() }} onDrop={handleDrop} className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books " >
                <ol className="books-grid">
                    {books.map((book) => (
                        <Book key={book.id} book={book} addBook={addBook} />
                    ))}
                </ol>
            </div>
        </div>
    );
}
export default BookShelf;
