
import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import UserInfoModal from '../pages/User/UserInfoModal/UserInfoModal';
import { Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Logout';
import img from '../images/baby.png'
import './Header.css'
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { user, logout } = useAuth();
    const headerHome = {
        color: 'rgba(243, 240, 191)',
    }
    const headerHomeHome = {
        color: 'rgba(204, 117, 132)',

    }
    const imglogo = {
        height: '70px',
        width: '70px'
    }
    return (
        <div>
            <Navbar className='outline-none box-shadow: none' collapseOnSelect expand="lg" style={{
                backgroundColor: 'rgba(204, 117, 132)', color: 'rgba(243, 240, 191)', position: 'sticky',
                top: 0
            }}>
                <Container>
                    <Navbar.Brand className="d-flex outline-none box-shadow: none"><Link to='/'><div style={imglogo}><img src={img} alt="" /></div></Link><Link className='no-underline ' to='/'><Typography variant='h5' className="mt-3"><span style={{color:'#fea87c'}} className='paci '>Ibrar</span><span style={{color:'#fea87c'}} className='lob'>'s</span> <span style={{color:'#fea87c'}} className='paci'>Smile</span ></Typography></Link></Navbar.Brand>
                    <Navbar.Toggle className='border-0 outline-none box-shadow: none'  />
                    <Navbar.Collapse className='outline-none box-shadow: none' id="responsive-navbar-nav">
                        <Nav className="ml-auto outline-none box-shadow: none">
                            <Link className="no-underline" to="/"><Button style={headerHomeHome} >Home</Button></Link>
                            <Link className="no-underline" to="/explore"><Button style={headerHome} >Explore</Button></Link>
                            <Link className="no-underline" to="/dashboard"><Button style={headerHome} >Dashboard</Button></Link>
                            

                            {
                                user?.email ?
                                    <div className="md:flex justify-center items-center">
                                        <h6 className="text-white ml-4">Hi! {user.displayName}</h6>
                                        {
                                            user.photoURL ?
                                                (<img onClick={() => setToggle(true)} className="w-10 h-10 ml-4 rounded-full cursor-pointer" src={user?.photoURL} alt="" />)
                                                :
                                                (<img onClick={() => setToggle(true)} className="w-10 h-10 ml-4 rounded-full cursor-pointer" src="https://i.ibb.co/7kCyq0z/no-user-image-icon-0.png" alt="" />)
                                        }
                                        <Button style={headerHome} onClick={logout}><LogoutIcon />Log Out</Button>
                                    </div>
                                    : <Link className="no-underline text-white" to="/login"><Button style={headerHome} onClick={logout}><LoginIcon />Log In</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <UserInfoModal toggle={toggle} setToggle={setToggle} />
        </div>
    );
};

export default Header;