import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, saveBook } from '../../redux/books/actions';
import './Book.css';

function Book({details}){
    const {status} = useSelector(state => state);
    const dispatch = useDispatch();

    const [isModeEdit, setIsModeEdit] = useState(false);
    const [data, setData] = useState({
        ...details,
    });

    const handleOnDeleteClick = () => {
        dispatch(deleteBook(details.id));
    }

    const handleOnEditClick = () => {
        setIsModeEdit(!isModeEdit)
    }
    const handleOnChange = e => {
        setData({
            ...data, [e.target.name] : e.target.value, 
        })
    }

    const handleOnSaveClick = async  () => {
       
        dispatch(saveBook(data));
             setIsModeEdit(false)
         }
        
    
    return (
        
        
        <div className="Book">
                <img src={details.imageUrl} />
                {status === 'update-book-progress' ? 
                <div>Loading...</div> : (
                    <div>
                    {isModeEdit ? (
                        <>
                            <label for='title'>Title : </label>
                            <input name='title' value={data.title} onChange={handleOnChange} />
                            <label for='description'>Description : </label>
                            <input name='description' value={data.description} onChange={handleOnChange} />
                            <button onClick={handleOnSaveClick}>Save</button>
                        </>
                    ) : (
                            <>
                                <h1>{details.title}</h1>
                                <p>{details.description}</p>
                                <button onClick={handleOnDeleteClick}>Delete</button> 
                            </>
                    )}
                    
                    <button onClick={handleOnEditClick}> Edit </button> 
                 </div>
                )}
            
        </div>
    )
}
export default Book;