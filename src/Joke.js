import React from 'react'


function Joke(props){
    return(
        <div>
            <h3>Question: {props.question}</h3>
            <h3>PunchLine: {props.punchline}</h3>
            </div>
    )
}

export default Joke