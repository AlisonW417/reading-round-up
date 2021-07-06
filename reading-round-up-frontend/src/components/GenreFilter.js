import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const GenreFilter = ({ books }) => {
    const handleOnSubmit = (event) => {
        event.preventDefault()
        debugger
        // const selectedGenre = books.filter(book => book.genre === event.target.selected.value)
    }
    const handleOnChange = () => {
        debugger
    }

    return (
        <Container>
            <div>
                <h4>View Books by Genre</h4>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Control as="select" onChange={handleOnChange}>
                            <option value="Non-fiction">Non-Fiction</option>
                            <option value="Classics">Classics</option>
                            <option value="Historical Fiction">Historical Fiction</option>
                            <option value="Mystery">Mystery/Thriller</option>
                            <option value="Other">Other</option>
                        </Form.Control> 
                    </Form.Group> 
                    <Button type="submit">Select Genre</Button>
                </Form>         
            </div>
        </Container>
        
    )
}

export default GenreFilter;