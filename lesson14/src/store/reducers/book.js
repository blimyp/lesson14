import { selectBook } from "../actions/book"

const initialState = {
    arrBooks: [
        { name: "shikupizki", code: 123, price: 25, url: "https://upload.wikimedia.org/wikipedia/he/4/44/Shiku.jpg", author: "david" },
        { name: "Benzi", code: 124, price: 30, url: "https://he.wikipedia.org/wiki/%D7%A7%D7%95%D7%91%D7%A5:%D7%A2%D7%98%D7%99%D7%A4%D7%94-%D7%91%D7%A0%D7%A6%D7%99.jpg", author: "moshe" }
    ],
    selectBook: null,
    selectBookForEdit: null
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                arrBooks: [...state.arrBooks, action.payload],
                selectBook: state.selectBook,
                selectBookForEdit: state.selectBookForEdit
            }
        case "DELETE_BOOK":
            let select = state.selectBook;
            let forEdit = state.selectBookForEdit;
            console.log(state.selectBook)
            if (!state.selectBook || (state.selectBook.code === action.payload))
                select = null;
            if (state.selectBookForEdit === action.payload)
                forEdit = null;
            return {
                arrBooks: state.arrBooks.filter(item => item.code != action.payload),
                selectBook: select,
                selectBookForEdit: forEdit
            }
        case "SELECT_BOOK":
            return {
                arrBooks: state.arrBooks,
                selectBook: action.payload,
                selectBookForEdit: state.selectBookForEdit
            }
        case "SELECT_BOOK_TO_EDIT":
            return {
                arrBooks: state.arrBooks,
                selectBook: state.selectBook,
                selectBookForEdit: action.payload
            }
        case "SAVE_EDIT_BOOK":
            let copy = state.arrBooks.map(item => {
                if (item.code !== action.payload.code)
                    return item;
                return action.payload
            })
            return {
                arrBooks: copy,
                selectBook: state.selectBook,
                selectBookForEdit: null
            }
        default: return state;

    }
}