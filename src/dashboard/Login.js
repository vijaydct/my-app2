import React from 'react'
import axios from  'axios'
import { Link } from 'react-router-dom'


class Login extends React.Component {

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
                sessionStorage.setItem('mySessionStorageData', JSON.stringify(user))
            }
        })
    }

    handleSubmit = (e, history) => {
        e.preventDefault()
        let data = sessionStorage.getItem('mySessionStorageData')
        console.log('data', JSON.parse(data))
        if(data){
            this.setState((prevState) => {
                return {
                    isLogin: !prevState.isLogin
                }
            })
            history.push('/dashboard')
        }
    }

    render() {
        console.log('props', this.props, 'login', this.state.isLogin);
        return (
            <div>
                <h1>Welcome to login page</h1>
                <form>
                    <label>Email  </label>
                    <input 
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        onBlur={this.handleBlur}
                        required={true}
                    />
                </form>
                <button onClick={(e) => this.handleSubmit(e, this.props.history)} style={{marginLeft: '70px'}}>{this.state.isLogin ? 'logout' : 'login'}</button>             
            </div>
        )
    }
}

export default Login