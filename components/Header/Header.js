import React from 'react'
import SearchForm from '../SearchForm/SearchForm'


const Header = () => {
  return (
    <>
    <div className="fixed-top ">
    <nav className="navbar bg-dark " data-bs-theme="dark">
  <div className="container-fluid ">
    <span className="ms-lg-3 px-lg-4 "  href="#">
    <i className="bi bi-film me-2 "></i>
       Movie Gen
    </span>
    <SearchForm/>
  </div>
</nav>
</div></>
  )
}

export default Header