import React, {useState} from 'react';

const Book = props => {

    const [bookListIsOpen, setBookListIsOpen] = useState(false)

    const openBookListHandler = () => {
        setBookListIsOpen(true)
    }
    const closeBookListHandler = () => {
        setBookListIsOpen(false)
    }
    const changeBookHandler = event => {
        props.selectBook(event);
        closeBookListHandler()
    }
return (
        <div className="center">
            
            <img onClick={openBookListHandler} src={'http://localhost:5000/uploads/images/' + props.image} alt='Підручник'/>
            {
                bookListIsOpen && (
                    <select onChange ={changeBookHandler} value ={props.name}>
                        {props.books.map((book)=>{
                            return <option value={book.name}>{book.name}</option>
                        })}
                    </select>
                )
            }
        </div>
    )
}

export default Book;