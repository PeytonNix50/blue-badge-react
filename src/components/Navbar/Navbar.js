import React from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText
//   } from 'reactstrap';
  import Logout from './Logout/Logout';

const Navbar = (props) => {
    return(
        <div>
            <nav>
                <Logout clearToken={props.clearToken} />
            </nav>
        </div>
    )
}

export default Navbar