import React from 'react'

class ValueAnswer extends React.Component {

    render() {
        const { question, description, answer } = this.props
        return (
            <div class="jumbotron">
                <h1 class="display-4">{question}</h1>
                <p class="lead">{description}</p>
                <hr class="my-4">
                </hr><p> Answer: {answer}</p>
            </div>
        )
    }
}

export default ValueAnswer;