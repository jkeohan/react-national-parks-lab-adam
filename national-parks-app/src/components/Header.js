import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <nav>
        <Link to="/">
            <h1>National Parks List</h1>
        </Link>
    </nav>
  )
}

export default Header
