import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="py-3">
        <Navbar.Brand>
          <Link to='/' className='text-decoration-none text-dark'>
            <img src={logo} alt="" style={{width: "13rem"}}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Link to="/" className='text-decoration-none text-dark'>Home</Link>
            <Link to="/pages" className='text-decoration-none text-dark'>Pages</Link>
            <Link to="/movies" className='text-decoration-none text-dark'>Movies</Link>
            <Link to="/tvshows" className='text-decoration-none text-dark'>TV Shows</Link>
            <Link to="/celebs" className='text-decoration-none text-dark'>Celebs</Link>
            <Link to="/blog" className='text-decoration-none text-dark'>Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;