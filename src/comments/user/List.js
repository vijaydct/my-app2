import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UsersList extends React.Component {

    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = response.data
            this.setState({users})
        })
    }

    render() {
        return (
            <div>
                <h3>Listing users- {this.state.users.length}</h3>
                <ul>
                    {
                        this.state.users.map((user) => {
                            return <li key={user.id}><Link to={`/users/${user.id}/posts`}>{user.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UsersList