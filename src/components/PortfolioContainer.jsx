import React, { useState } from 'react';
import '../App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer'
import Nav from './Nav';

const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        return <Contact />;
      };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='App'>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer />
        </div>
    )
}

export default PortfolioContainer
