import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <nav>
        <Link to="/">
            <h1 className="nav-link">Maryland Parks</h1>
        </Link>
    </nav>
  )
}

export default Header
