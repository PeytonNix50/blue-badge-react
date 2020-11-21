import React from 'react';
import {Button} from 'reactstrap';
import './Logout.css';


const Logout = (props) => {
    const logout = () => {
        props.clearToken()
    }
    return(
        <div>
            <Button className="navButtons" color='danger' id='logout' onClick={logout}>Logout</Button>
        </div>
    )
}

export default Logout