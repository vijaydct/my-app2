import React from 'react'
import axios from 'axios'

class PostShow extends React.Component {

    constructor() {
        super()
        this.state = {
            user: {},
            post: {},
            comments: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            const post = response.data
            console.log('POST', post)
            this.setState({post})

        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`)
        .then((response) => {
            const user = response.data
            console.log('USER', user)
            this.setState({user})
        })
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => {
            const comments = response.data
            console.log('COMMMENTS', comments)
            this.setState({comments})
        })
    }

    render() {
        console.log('PROPS', this.props)
        return (
            <div>
                <h3>Post details-{this.props.match.params.id}</h3>
                <p><b>TITLE:</b> {this.state.post.title}</p>
                <p><b>BODY:</b> {this.state.post.body}</p>
                <p><b>USERNAME:</b> {this.state.user.name}</p>
                <p><b>COMMENTS:</b> </p>
                <ul>
                    {
                        this.state.comments.map( (comment) => {
                            return <li key={comment.id}>{comment.body}</li>
                        })
                    }
                </ul>
                
            </div>
        )
    }
}

export default PostShow