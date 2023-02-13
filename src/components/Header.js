import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="No Logo"
              src="https://www.foodandlandusecoalition.org/wp-content/uploads/2021/06/ICON-1.gif"
              width="75"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Find me Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header