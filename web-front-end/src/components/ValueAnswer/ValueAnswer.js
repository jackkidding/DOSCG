import React from 'react'

class ValueAnswer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            answer: "",
        }
    }

    componentDidMount() {
        const { url } = this.props

        fetch(url)
            .then(response => response.json())
            .then(answer => this.setState(answer))
    }


    render() {
        const { question, description } = this.props
        const { answer } = this.state

        return (
            <div className="jumbotron">
                <h1 className="display-4">{question}</h1>
                <p className="lead">{description}</p>
                <hr className="my-4">
                </hr><p> Answer: {answer} </p>
            </div>
        )
    }
}

export default ValueAnswer;