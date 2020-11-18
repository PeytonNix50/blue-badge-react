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
  import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div>
            <nav>
                <Link to="/create"><button>Create Review</button></Link>
                <Logout clearToken={props.clearToken} />
            </nav>
        </div>
    )
}

export default Navbar