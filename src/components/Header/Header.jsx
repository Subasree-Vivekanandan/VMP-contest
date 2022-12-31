import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <br></br>
            <div className='header-content flex flex-c text-center'>
                <h2 className='header-title text-capitalize'>Filter books using book name</h2><br />
        
                <SearchForm />
            </div>
            <br></br>
            <div className='header-content flex flex-c text-center'>
                <h2 className='header-title text-capitalize'>Filter books using author name</h2><br />
        
                <SearchForm />
            </div>
            <br></br>
            <div className='header-content flex flex-c text-center'>
                <h2 className='header-title text-capitalize'>Filter books using edition</h2><br />
        
                <SearchForm />
            </div>
            <br></br>
            <div className='header-content flex flex-c text-center'>
                <h2 className='header-title text-capitalize'>Filter books using work</h2><br />
        
                <SearchForm />
            </div>
            <br></br>
        </header>
    </div>
  )
}

export default Header