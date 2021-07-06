import React from 'react'
import { Container, Button } from 'react-bootstrap'

const GenreFilter = ({ books }) => {
    const handleOnSubmit = (event) => {
        event.preventDefault()
        // const selectedGenre = books.filter(book => book.genre === event.target.value)
    }

    return (
        <Container>
            <div>
                <h4>View Books by Genre</h4>
                <form onSubmit={handleOnSubmit}>
                    <select>
                        <option value="Non-fiction">Non-Fiction</option>
                        <option value="Classics">Classics</option>
                        <option value="Historical Fiction">Historical Fiction</option>
                        <option value="Mystery">Mystery/Thriller</option>
                        <option value="Other">Other</option>
                    </select>  
                    <Button type="submit">Select Genre</Button>
                </form>         
            </div>
        </Container>
        
    )
}

export default GenreFilter;