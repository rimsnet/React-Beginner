import React from 'react'
import { ButtonClickProvider, ButtonClickConsumer } from '../contexts/ButtonClickContext'

class ContextSample extends React.Component {
    constructor(props) {
        super(props)
        this.state = { firstName: 'Rimzan' }
    }

    changeHandler = (e) => {
        this.setState({firstName:e.target.value})
    }

    render() {
        return (
            <ButtonClickProvider value={this.state.firstName}>
                <ChangeText />
                <input type="text" name="firstName" onChange={this.changeHandler} />
            </ButtonClickProvider>
        )
    }
}

const ChangeText = () => {
    return (
        <ButtonClickConsumer>
            {context => <p>{JSON.stringify(context)}</p>}
        </ButtonClickConsumer>
    )
}

export default ContextSample