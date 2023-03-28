import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <>
    <div className="fixed-top">
    <nav className="navbar bg-dark " data-bs-theme="dark">
  <div className="container-fluid ">
    <a className={`${styles.head} navbar-brand text-light text-xs px-lg-4 `} href="#">
    <i className="bi bi-film text-light text-xs  me-2 "></i>
       Movie Gen
    </a>
    <SearchForm/>
  </div>
</nav>
</div></>
  )
}

export default Header