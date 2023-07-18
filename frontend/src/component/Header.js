import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../my.css'

function Headers() {
  return (
    <div>

        <header id="header">
            <div className='header-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-8'>
                            <div className='header-top-left text-left'>
                                <div className='contact'><span className='hidden-xs hidden-sm hidden-md'>Day a week from 09.00 am to 7:00 pm</span></div>

                            </div>

                        </div>
                        <div className='col-xs-12 col-sm-4'>
                            <div className='header-top-left text-rigt'>

                            <Nav className="me-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>


                            </div>
                            





                        </div>
                    </div>
                </div>
            </div>

            <div className='header'>
                <div className="container">
                <div className='row'>
                <div className='col-xs-12 col-sm-4'>  
                
                <div className="main-search mt_40">
                <input id="search-input" name="search" value="" placeholder="Search" className="form-control input-lg" type="text" readOnly />
                <span className="input-group-btn">
              <button type="button" className="btn btn-default btn-lg"><i className="fa fa-search"></i></button>
              </span> </div>
                
                
                
                 </div> 
                 <div className='col-xs-6 col-sm-4'>  
                 <a className="navbar-brand" href="index.html"> <img alt="themini" src="images/logo.png"/> </a> 
                
                
                 </div> 

                 <div className='col-xs-6 col-sm-4'>  
        
                 <div id="cart" className="btn-group btn-block mtb_40">

                <button type="button" className="btn" data-target="#cart-dropdown" data-toggle="collapse" aria-expanded="true"><span id="shippingcart">Shopping cart</span><span id="cart-total">items (0)</span> </button>
                </div>
                
                
                </div> 
         

                </div>

  </div>
  <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12">
          <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
      </div>
        </div>
     

        </header>




    </div>
  )
}

export default Headers