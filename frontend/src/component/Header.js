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
                        <div className='col-xs-12 col-sm-6'>
                            <div className='header-top-left text-left header-top-align'>
                                <div className='contact'><span className='hidden-xs hidden-sm hidden-md'>Day a week from 09.00 am to 7:00 pm</span></div>

                            </div>

                        </div>
                        <div className='col-xs-12 col-sm-6 header-top-align'>
                            <div className='header-top-left text-rigt header-align header-top-align'>

                            <Nav className="me-auto header-top-align ">
            <Nav.Link href="#home"><i class="fa-solid fa-user"></i> Login</Nav.Link>
            <Nav.Link href="#link"><i class="fa-sharp fa-solid fa-user-plus"></i> Register</Nav.Link>
            <NavDropdown title="Username" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><i class="fa-solid fa-user"></i> Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <i class="fa-solid fa-key"></i> Change Password
              </NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.4">
              <i class="fa-solid fa-right-from-bracket"></i> Logout
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
                 <img src="/images/logo.png" alt="" />
                
                
                 </div> 

                 <div className='col-xs-6 col-sm-4'>  
        
                 <div id="cart" className="btn-group btn-block mtb_40 m-top25">
             

                <button type="button" className="btn" data-target="#cart-dropdown" data-toggle="collapse" aria-expanded="true">
                    <span>   
                 <i class="fa-sharp fa-solid fa-bag-shopping fa-2xl"></i>
                </span><span class="p-left15">items (0)</span> </button>
                </div>
                
                
                </div> 
         

                </div>

  </div>
  <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12">
            <Navbar className='header-bg' expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-header first-l' href="#home"> HOME</Nav.Link>
           
            <NavDropdown className='nav-header' title="COLLECTION" id="basic-nav-dropdown">
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
            <Nav.Link className='nav-header'  href="#link"> PRODUCT</Nav.Link>
            <Nav.Link className='nav-header'  href="#link"> ABOUT US</Nav.Link>
            <Nav.Link className='nav-header'  href="#link"> CONTACT US</Nav.Link>
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