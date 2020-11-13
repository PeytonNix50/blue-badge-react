import React from 'react';


const Logout = (props) => {
    const logout = () => {
        props.clearToken()
    }
    return(
        <div>
            <button id='logout' onClick={logout}>Logout</button>
        </div>
    )
}

export default Logout