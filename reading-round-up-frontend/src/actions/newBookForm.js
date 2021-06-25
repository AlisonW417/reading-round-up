export const updateNewBookForm = formData => {
    return {
        type: "UPDATE_NEW_BOOK_FORM",
        formData 
    }
}

export const resetNewBookForm = () => {
    return {
        type: "RESET_NEW_BOOK_FORM"
    }
}