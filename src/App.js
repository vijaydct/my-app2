import React from 'react'
import Login from './dashboard/Login'
import Home from './comments/static/Home'
import Dashboard from './dashboard/Dashboard'
// import About from './comments/static/About'
// import UsersList from './comments/user/List'
// import UserShow from './comments/user/Show'
// import PostList from './comments/post/List'
// import PostShow from './comments/post/Show'
// import Contact from './comments/static/contact'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import axios from  'axios'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            isLogin: false
        }
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    handleBlur = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((responce) => {
            const user = responce.data.find(item => item.email === this.state.email)
            console.log('user', user)
            if(user) {
                localStorage.setItem('myData', JSON.stringify(user))
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let data = localStorage.getItem('myData')
        console.log('data', JSON.parse(data))
        this.setState((prevState) => {
            return {
                isLogin: !prevState.isLogin
            }
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} exact={true} />
                        <Route path="/login" element={<Login />} exact={true} />
                        <Route path="/dashboard" element={<Dashboard />} exact={true} />
                        {/*
                        <Link to="/about">About</Link>-
                        <Link to="/users">Users</Link>-
                        <Link to="/posts">Posts</Link>-
                        <Link to="contact">Contact</Link>
        
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/about" component={About} />
                        <Route path="/users" component={UsersList} exact={true}/>
                        <Route path="/users/:id" component={UserShow} />
                        <Route path="/posts" component={PostList} exact={true}/>
                        <Route path="/posts/:id/comments" component={PostShow} />
                        <Route path="/contact" component={Contact} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}

export default App

// FOr deepp understanding of routing, --> https://reactrouter.com/web/api/Redirect/from-string