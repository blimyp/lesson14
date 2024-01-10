import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux';
import { deleteBook, selectBook, selectBookToEdit } from './store/actions/book'
const OneBook = ({ book }) => {

    let dispatch = useDispatch();

    return (<>
        <h1>{book.name}</h1>
        <p>{book.code}</p>
        <p>{book.author}</p>
        <p>{book.price}</p>
        <img src={book.src}></img>
        <Button variant="text" onClick={() => { dispatch(deleteBook(book.code)) }}>delete</Button>
        <Button variant="text" onClick={() => { dispatch(selectBookToEdit(book.code)) }}>edit</Button>
        <Button variant="text" onClick={() => { dispatch(selectBook(book)) }}>select</Button>
    </>);
}

export default OneBook;