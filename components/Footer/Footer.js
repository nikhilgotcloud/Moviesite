import React from 'react';


const Footer = () => {
  return (
    <div className="fixed-bottom">
        <footer className="d-flex  justify-content-between align-items-center p-3  border-top bg-dark" data-bs-theme="dark">
    <div className=" d-flex align-items-center ">
      <span className="mb-lg-3  text-light ms-lg-5 text-sm ">© Movie Gen X (Nikhil) 2023 </span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-lg-5  ">
      <li className="ms-3"><i className="bi bi-twitter text-light"></i></li>
      <li className="ms-3"><i className="bi bi-instagram text-light"></i></li>
      <li className="ms-3"><i className="bi bi-facebook text-light"></i></li>
      
    </ul>
  </footer>
    </div>
  )
}

export default Footer