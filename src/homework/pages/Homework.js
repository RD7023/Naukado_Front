import React, {useState, useEffect} from 'react';

import Book from '../components/Book';
import SelectTask from '../components/SelectTask';
import Task from '../components/Task';
import Video from '../components/Video';
import Solution from '../components/Solution';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'

const Homework = () => {
    
    const [isLoading, setIsLoading] = useState(false)
    //const [error, setError] = useState()
    const [loadedData, setLoadedData] = useState()
   
    const [currentBook, setCurrentBook] = useState()
    const [currentTask, setCurrentTask] = useState()

    useEffect(() => {
        const sendRequest = async () =>{
            setIsLoading(true)
            const response = await fetch('http://localhost:5000/api')
            const responseData = await response.json()
            
            setCurrentBook(responseData.books[0])
            setCurrentTask(responseData.tasks[0])
            setLoadedData(responseData)
            setIsLoading(false)
        }
        sendRequest()
    },[])

    const selectBook = event => {
        const newBook = loadedData.books.find(book => book.name === event.target.value)
        setCurrentBook(
            newBook
        )
    }
    
    const selectTask = event => {
        const newTask = loadedData.tasks.filter(task => task.book ===currentBook.name).find(task => task.number === Number(event.target.value))        
        if(newTask){
            setCurrentTask(
                newTask
            )
        }
    }

    return (
        <React.Fragment>
            {isLoading && (
            <div className="center">
                <LoadingSpinner />
            </div>)}

            {loadedData && !isLoading &&
            <div className>
                <Book books = {loadedData.books} name = {currentBook.name} image = {currentBook.image} selectBook = {selectBook}/>
                <SelectTask tasks = {loadedData.tasks} book = {currentBook} selectTask = {selectTask}/>
                <Task task = {currentTask}/>
                <Video source = {currentTask.video} />
                <Solution answer = {currentTask.answer}/>
            </div> }
        </React.Fragment>
    )
}

export default Homework;