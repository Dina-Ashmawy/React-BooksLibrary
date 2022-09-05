import './index.css';
import { IBook } from '../../models';
import * as BooksAPI from '../../BooksAPI';
import { Link } from "react-router-dom";

type IProps = {
    book: IBook;
    addBook: Function
}

function Book({ book, addBook }: IProps) {
    const changeShelf = (event: any) => {
        let shelf = event.target.value;
        BooksAPI.update(book, shelf);
        book.shelf = shelf;
        addBook(book);
    }

    const handleDragStart = (event: any) => {
        event.dataTransfer.setData("book", JSON.stringify(book));
    }

    return (
        <li draggable onDragStart={handleDragStart}>
            <div className="book" >
                <div className="book-top">
                    <Link to={"/details"} state={book} >
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                            }}
                        ></div>
                    </Link>

                    <div className="book-shelf-changer">
                        <select
                            defaultValue={book.shelf ? book.shelf : "none"}
                            onChange={changeShelf}
                        >
                            <option value="" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors} </div>
            </div>
        </li>
    );
}

export default Book;
