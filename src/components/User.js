import React from 'react'

class User extends React.Component {
    constructor(props) { super(props) }
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>User</h3>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default User