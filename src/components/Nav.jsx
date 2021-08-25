import React from "react";

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <nav className="nav nav-pills nav-fill">
        <a 
          className={currentPage === 'Home' ? 'nav-item nav-link active' : 'nav-item nav-link'} 
          href="#Home"
          onClick={() => handlePageChange('Home')}
        >
          HOME
        </a>
        <a 
          className={currentPage === 'About' ? 'nav-item nav-link active' : 'nav-item nav-link'} 
          href="#About"
          onClick={() => handlePageChange('About')}
        >
          ABOUT ME
        </a>
        <a 
          className={currentPage === 'Projects' ? 'nav-item nav-link active' : 'nav-item nav-link'} 
          href="#Projects"
          onClick={() => handlePageChange('Projects')}
        >
          MY WORKS
        </a>
        <a 
          className={currentPage === 'Resume' ? 'nav-item nav-link active' : 'nav-item nav-link'}
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
        >
          RESUME
        </a>
        <a 
          className={currentPage === 'Contact' ? 'nav-item nav-link active' : 'nav-item nav-link'} 
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
        >
          CONTACT ME
        </a>
      </nav>
    </div>
  );
};

export default Nav;
