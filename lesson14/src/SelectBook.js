import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux';
import { deleteBook, selectBook, selectBookToEdit } from './store/actions/book'
const SelectBook = ({ book }) => {
    return (<>
        <h1 style={{color:"red"}}>{book.name}</h1>
        <img src={book.src}></img>
    </>);
}

export default SelectBook;