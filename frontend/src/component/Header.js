import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../my.css'
import {LinkContainer} from 'react-router-bootstrap'
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/UserActions'; // Assuming you have created the getUserProfile action.


function Headers() {

  const userLogin = useSelector(state=>state.userLogin)
  const {userInfo} = userLogin

  const dispatch = useDispatch();

  const cart = useSelector(state=>state.cart)
  const {cartItems} = cart



  const getTotalItemCount = () =>{
    return cartItems.length;
  };


  const LogoutHandler=()=>{
    dispatch(logout());
  }

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
                          
                          {!userInfo ? (
                            <LinkContainer to='/login'>
  <Nav.Link><i className="fa-solid fa-user"></i> Login</Nav.Link>
</LinkContainer>
) : (<span></span>)}

{!userInfo ? (
<LinkContainer to='/register'>
         <Nav.Link><i className="fa-sharp fa-solid fa-user-plus"></i> Register</Nav.Link>
         </LinkContainer>

) : (<span></span>)}

{userInfo ? (
          <NavDropdown title={userInfo.username} id="basic-nav-dropdown">
          <LinkContainer to={`/Profile/${userInfo.username}`}>
            <NavDropdown.Item><i className="fa-solid fa-user"></i> Profile</NavDropdown.Item>
          </LinkContainer> 
          <LinkContainer to="/UpdateProfile">
          <NavDropdown.Item>
            <i className="fa-solid fa-key"></i> Update Profile
          </NavDropdown.Item>
          </LinkContainer> 
          <NavDropdown.Item onClick={LogoutHandler}>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </NavDropdown.Item>
        </NavDropdown>
) : (<span></span>)}

{userInfo && userInfo.is_superuser && (
          <NavDropdown title="Admin" id="basic-nav-dropdown">
          <LinkContainer to="/Category">
            <NavDropdown.Item><i className="fa-solid fa-user"></i> Category</NavDropdown.Item>
          </LinkContainer> 
          <LinkContainer to="/ProductControl">
          <NavDropdown.Item>
            <i className="fa-solid fa-key"></i>  Product
          </NavDropdown.Item>
          </LinkContainer> 
          <LinkContainer to="/UpdateProfile">
          <NavDropdown.Item>
            <i className="fa-solid fa-key"></i>  Order
          </NavDropdown.Item>
          </LinkContainer> 
          <LinkContainer to="/UpdateProfile">
          <NavDropdown.Item>
            <i className="fa-solid fa-key"></i>  User
          </NavDropdown.Item>
          </LinkContainer> 
        
        </NavDropdown>
)}
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
             
                 <LinkContainer to="/Cart">
  <div> {/* Wrap the button and its content in a parent element */}
    <button type="button" className="btn" data-target="#cart-dropdown" data-toggle="collapse" aria-expanded="true">
      <span>
        <i className="fa-sharp fa-solid fa-bag-shopping fa-2xl"></i>
      </span>
      <span className="p-left15">items ( {getTotalItemCount()} )</span>
    </button>
  </div>
</LinkContainer>

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
           <LinkContainer to='/'> 
            <Nav.Link className='nav-header first-l' > HOME</Nav.Link>
           </LinkContainer>
           <NavMenu></NavMenu>

       
           
            <LinkContainer to='/Product'> 
            <Nav.Link className='nav-header'> PRODUCT</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'> 
            <Nav.Link className='nav-header'> ABOUT US</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'> 
            <Nav.Link className='nav-header'> CONTACT US</Nav.Link>
            </LinkContainer>
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