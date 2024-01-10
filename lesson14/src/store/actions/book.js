export const addBook=(book)=>{
    return{
        type:"ADD_BOOK",
        payload:book
    }
}
export const deleteBook=(code)=>{
    return{
        type:"DELETE_BOOK",
        payload:code
    }
}
export const selectBook=(book)=>{
    return{
        type:"SELECT_BOOK",
        payload:book
    }
}
export const selectBookToEdit=(book)=>{
    return{
        type:"SELECT_BOOK_TO_EDIT",
        payload:book
    }
}
export const saveEditBook=(book)=>{
    return{
        type:"SAVE_EDIT_BOOK",
        payload:book
    }
}