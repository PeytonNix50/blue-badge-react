import React, {useState} from 'react';
import Logout from './Logout/Logout';
import {Link} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Button } from 'reactstrap';
import './Navbar.css';
import logo2 from '../../assets/logo2.jpg'

const NavFile = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

return (
  <div>
    <Navbar color="faded" light>
      <img style={{width:'100px', height: 'auto'}} alt='Logo' src={logo2} />
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <Link to="/create"><Button className="navButtons" color='success'>Create Review</Button></Link>
          </NavItem>
          <NavItem>
            <NavLink > <Logout clearToken={props.clearToken} /></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
);
}

export default NavFile