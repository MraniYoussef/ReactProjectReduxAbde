import { useEffect, useState } from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar";

import {addBooksApi, deleteBooksApi, getBooksApi, saveBooksApi, searchBookApi} from "./api/apiBooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./redux/books/actions";
import Alert from "./components/Alert/Alert";

function App() {
     
  return (
    <>
        <Header>
        <h1>Header</h1>
      </Header>
      <Alert />
      <SearchBar  />
      <BookList  />
      <AddBookForm />

    </>
  );
}

export default App;
