import React, {useState} from 'react';
import Logout from './Logout/Logout';
import {Link} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import './Navbar.css';

const NavFile = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

return (
  <div>
    <Navbar color="faded" light>
      <NavbarBrand href="/" className="mr-auto">NatuReview</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink><Link to="/create"><Button className="navButtons" color='success'>Create Review</Button></Link></NavLink>
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