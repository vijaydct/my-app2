import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Welcome to Home page</h1>
            <Link to="/login">LOGIN </Link>
        </div>
    )
}

export default Home