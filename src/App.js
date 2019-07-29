import React from 'react'
import Joke from './Joke'


function App(){
    return(
        <div>
            <Joke punchline="Hello"/>
            <Joke question="Second" punchline="Hi"/>
            <Joke  punchline="Hey"/>
            <Joke  punchline="Hola"/>
            <Joke question="Fifth" punchline="Good"/>
        </div>
    )
}


export default App