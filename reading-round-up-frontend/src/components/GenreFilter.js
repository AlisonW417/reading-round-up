// import React from 'react'
// import BookList from './BookList'
// import { Container, Form, Button } from 'react-bootstrap'

// class GenreFilter extends React.Component {
//     // const handleOnSubmit = (event) => {
//     //     event.preventDefault()
//     //     debugger
//     //     // const selectedGenre = books.filter(book => book.genre === event.target.selected.value)
//     // }


//     render() {
//         this.handleOnChange = (event) => {
//             const selectedGenre = this.props.books.filter(book => book.attributes.genre === event.target.value)
//             return selectedGenre
//             // console.log(selectedGenre)
//         }

//         return (

//         <Container>
//             <div>
//                 <h4>View Books by Genre</h4>
//                 <Form>
//                     <Form.Group>
//                         <Form.Control as="select" onChange={this.handleOnChange}>
//                             <option value="Non-fiction">Non-Fiction</option>
//                             <option value="Classics">Classics</option>
//                             <option value="Historical Fiction">Historical Fiction</option>
//                             <option value="Mystery">Mystery/Thriller</option>
//                             <option value="Other">Other</option>
//                         </Form.Control> 
//                     </Form.Group> 
//                     <Button type="submit">Select Genre</Button>
//                 </Form>         
//             </div>
//             <BookList books={selectedGenre} />
//         </Container>
        
//         )}
// }

// export default GenreFilter;