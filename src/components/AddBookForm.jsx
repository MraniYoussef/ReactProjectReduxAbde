import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooksApi } from "../api/apiBooks";
import { addBook } from "../redux/books/actions";

function AddBookForm(){

    const dispatch = useDispatch();
    const [formState, setFormState] = useState({ });
    const [errors, setErrors] = useState({ }) 

    const handleInputChange = e => {
        const{name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleAddBook = () => {
        setErrors({
            ...errors,
            title: !formState.title ? 'Title is required' : null,
            description: !formState.description ? 'Description is required' : null,
        });
        
        if(formState.title && formState.description){
            dispatch(addBook(formState))
            setErrors({})
        }
        
    }

    return (
        <div>
            <input type="text" value={formState.title} name='title' onChange={handleInputChange} />
            {errors.title && <small>{errors.title}</small>}
            <br/>
            <input type="text" value={formState.description} name='description' onChange={handleInputChange} />
            {errors.description && <small>{errors.description}</small>}
            <br/>

             <input type="text" value={formState.imageUrl} name='imageUrl' onChange={handleInputChange} />

            <button onClick={handleAddBook}>Add</button>
        </div>
    )
}
export default AddBookForm;