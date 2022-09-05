import './index.css'
import { useLocation } from 'react-router-dom';
import { IBookDetails } from '../../models';

function DetailsPage() {
    const bookDetails: IBookDetails = useLocation().state as IBookDetails;
    return (
        <div className="dataContainer">
            <h2>Book details</h2>
            <div className="itemContainer">
                <label>Title: {bookDetails.title}</label>
            </div>

            <div className="itemContainer description">
                <label>Description: {bookDetails.description}</label>
            </div>
            <div className="itemContainer">
                <label>PageCount: {bookDetails.pageCount}</label>
            </div>
            <div className="itemContainer">
                <label>Publisher: {bookDetails.publisher}</label>
            </div>
            <div className="itemContainer">
                <label>Publish Date: {bookDetails.publishedDate}</label>
            </div>
        </div>
    );
}
export default DetailsPage;
