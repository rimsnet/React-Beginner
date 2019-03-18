import React from 'react'
import { Link } from 'react-router-dom'

class NavLink extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='home'>Home</Link></li>
                    <li><Link to='user/rimzan'>User</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='contextsample'>Context</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavLink