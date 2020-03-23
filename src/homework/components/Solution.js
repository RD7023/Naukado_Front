import React, {useState} from 'react';

const Solution = props => {
    
    const [showIsCorrect, setShowIsCorrect] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)

    const checkAnswer = () => {
        setShowIsCorrect(true);
        
        const userAnswer = document.getElementById('answer').value;
        if (props.answer === userAnswer){
            setIsCorrect(true)
        } 
        else{
            setIsCorrect(false)
        }
    }

    return (
        <div className="center">
            <label>Відповідь</label>
            <input id='answer' type ='number'/>
            <button onClick={checkAnswer}>Готово</button>
            {showIsCorrect && (
                <div>
                    {isCorrect ? (<p>Правильно</p>):(<p>Не правильно</p>)}
                </div>
            )}
        </div>
    )
}

export default Solution;