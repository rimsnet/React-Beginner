import React from 'react'

class Home extends React.Component {
    constructor(props) { super(props) }
    render() {
        /* you can get the all URL related data from this.props */
        console.log(this.props)
        return (<h1>Home</h1>)
    }
}

export default Home