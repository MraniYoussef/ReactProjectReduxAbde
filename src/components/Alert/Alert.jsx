import { useSelector } from "react-redux";
import './Alert.css';

export default function Alert(){

    const {status} = useSelector(state => state);
    const messages = {

        'add-book-error' : 'Error while adding book',
        'add-book-success' : 'Book added successfully',
        'update-book-error' : 'Error while updating book',
        'update-book-success' : 'Book updated successfully',
        'fetching-error' : 'Error while fetching books',
        'fetching-success' : 'Books loaded successfully', 
        'delete-error' : 'Error while deleting book',
        'delete-success' : 'Book deleted successfully',
    }

    return (
        <div className="Alert">{status && messages[status]}</div>
    )
}