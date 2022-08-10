import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserShow extends React.Component {

    constructor () {
        super()
        this.state = {
            user: {},
            posts: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const user = response.data
            this.setState({user})
        })

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const posts = response.data.filter((post) => {
                return post.userId === parseInt(id)
            })
            this.setState({posts})
        })
    }

    render() {
        return (
            <div>
                <h3>User details-{this.props.match.params.id}</h3>
                <p>Name- {this.state.user.name}</p>
                <p>Email- {this.state.user.email}</p>
                <h3>User posts-{this.state.posts.length}</h3>
                <ul>
                    {
                        this.state.posts.map((post) => {
                            return <li key={post.id}>{post.title}</li>
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default UserShow