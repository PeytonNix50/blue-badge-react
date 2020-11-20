import React from 'react';
import {Button} from 'reactstrap';


const Logout = (props) => {
    const logout = () => {
        props.clearToken()
    }
    return(
        <div>
            <Button color='danger' id='logout' onClick={logout}>Logout</Button>
        </div>
    )
}

export default Logout