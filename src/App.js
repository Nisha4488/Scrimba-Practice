import React from 'react'
import Joke from './Joke'
import jokeData from './jokeData'


function App(){
    // const nums = [1,2,3,4,5,6]
    // const doubleNum = nums.map((function(num){
    //     return num*2
    // }))

    // console.log(doubleNum)
    const jokeComponent = jokeData.map(joke=><Joke key={joke.id} question={joke.question} answer={joke.answer}/>)
    return(
        <div>
            {jokeComponent}
        </div>
    )
}


export default App