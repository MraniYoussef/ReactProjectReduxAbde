import BookList from "../../components/BookList";
import { ADD_BOOK, ADD_BOOK_ERROR, ADD_BOOK_SUCCESS, DELETE_BOOK, DELETE_BOOK_ERROR, DELETE_BOOK_SUCCESS, FETCHING_BOOKS, FETCHING_BOOKS_ERROR, FETCHING_BOOKS_SUCCESS, SEARCH_BOOK, SEARCH_BOOKS_ERROR, SEARCH_BOOKS_SUCCESS, UPDATE_BOOK, UPDATE_BOOK_ERROR, UPDATE_BOOK_SUCCESS } from "./types";

const initialState = {
    books: [],
    status: null,
    error: null,
}


const reducer  = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case FETCHING_BOOKS: {
            return {
                ...state,
                status: 'fetching-progress',
            }
        }
        case FETCHING_BOOKS_ERROR: {
            return {
                ...state,
                status: 'fetching-error',
                error: payload,
            }
        }
        case FETCHING_BOOKS_SUCCESS: {
            return {
                ...state,
                status: 'fetching-success',
                books: payload,
            }
        }

        case DELETE_BOOK: {
            return {
                ...state,
                status: 'delete-progress',
            }
        }
        case DELETE_BOOK_ERROR: {
            return {
                ...state,
                status: 'delete-error',
                error: payload,
            }
        }
        case DELETE_BOOK_SUCCESS: {
            return {
                ...state,
                status: 'delete-success',
                books: [...state.books.filter(book => book.id !== payload)]
            }
        }

        case ADD_BOOK: {
            return {
                ...state,
                status: 'add-book-progress',
            }
        }
        case ADD_BOOK_ERROR: {
            return {
                ...state,
                status: 'add-book-error',
                error: payload,
            }
        }
        case ADD_BOOK_SUCCESS: {
            return {
                ...state,
                status: 'add-book-success',
                books: [...state.books, payload],
            }
        }
        case UPDATE_BOOK: {
            return {
                ...state,
                status: 'update-book-progress',
            }
        }
        case UPDATE_BOOK_ERROR: {
            return {
                ...state,
                status: 'update-book-error',
                error: payload,
            }
        }
        case UPDATE_BOOK_SUCCESS: {
            const newBooks = [...state.books];
            const book = newBooks.find(book => book.id === payload.id);
            book.title = payload.title;
            book.description = payload.description;
            return {
                ...state,
                status: 'update-book-success',
                books: [...newBooks],
            }
        }

        case SEARCH_BOOK: {
            return {
                ...state,
                status: 'search-book-progress',
            }
        }
        case SEARCH_BOOKS_ERROR: {
            return {
                ...state,
                status: 'search-book-error',
                error: payload,
            }
        }
        case SEARCH_BOOKS_SUCCESS: {
            
            return {
                ...state,
                status: 'update-book-success',
                books: [...payload],
            }
        }
        
        default : {
            return state;
        }
    }
}
export default reducer;