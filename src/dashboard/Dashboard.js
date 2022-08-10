import React from 'react'
import axios from 'axios'
// import UserShow from  '../comments/user/Show'

class Dashboard extends React.Component {

    constructor() {
        super()
        this.state = {
            data: {},
            posts: []
        }
    }

    handleLogout=() => {
        this.props.history.push('/login')
        localStorage.clear() // after logout, to clear login details in browser storage
        sessionStorage.clear() // after logout, to clear login details in browser storage
    }

    componentDidMount= () => {
        let data = JSON.parse(localStorage.myData)
        this.setState({data})
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)
        .then((response) => {
            console.log('resp', response.data)
            const posts = response.data
            this.setState({posts})
        })
        console.log('local', data);
    }

    render() {
        return (
            <div>
                <div><button onClick={this.handleLogout}> logout </button></div>
                <div>
                    <h3>User profile card</h3>
                    <span>NAME: {this.state.data.name} EMAIL: {this.state.data.email}</span>
                </div>
                <div>
                    <h3>List of posts</h3>
                    <ul>
                        {
                            this.state.posts.map((post) => {
                                return <li>{post.title}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dashboard