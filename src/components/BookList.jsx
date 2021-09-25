import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/actions";
import Book from "./Book/Book";

function BookList(){

    const {books, status, error} = useSelector(state => state);
    const dispatch = useDispatch();
  
     useEffect(() => {
     dispatch(fetchBooks());

  }, []);

    return (
        <div>
             {status === 'fetching-progress' && <div>Loading...</div>}
             {books.length && books.map(book => <Book key={book.id} details={book} />)}
             {status === 'fetching-error' && <div>Error : {error}</div>}

           
        </div>
    )
}
export default BookList;