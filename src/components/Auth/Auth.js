import React, { useState } from 'react'
// import './Auth.css'
import { Button } from 'reactstrap';
import API_URL from '../../env';


const Auth = (props) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, setLogin] = useState(true)

  const loginToggle = () => {
    setLogin(!login)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = `${API_URL}/user/${login ? 'login' : 'register'}`
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    if (password.length > 4) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(r => r.json())
      .then(rObj => props.updateToken(rObj.sessionToken, rObj.user.id))
  } else {
    window.alert("Password must be at least 5 characters")
  }}

  const signupFields = () => {
    if (login) {
      return null
    } else {
      return (
        <div>
          <label htmlFor="firstName">First Name</label>
          <br/>
          <input style={{borderRadius: '10px'}} id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
          <br/>
          <label htmlFor="lastName">Last Name</label>
          <br/>
          <input style={{borderRadius: '10px'}} id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
      )
    }
  }

  return (
    <form style={{marginLeft: '450px', fontFamily:'Roboto'}}>
      <h1>{ login ? 'Login' : 'Register' }</h1>
      <label htmlFor="email">Email</label>
      <br/>
      <input style={{borderRadius: '10px'}} id="email" value={email} onChange={e => setEmail(e.target.value)} />
      <br/>
      <label htmlFor="password">Password</label>
      <br/>
      <input style={{borderRadius: '10px'}} type="password" id="password" minLength='5' value={password} onChange={e => setPassword(e.target.value)} />
      <br/>
      {signupFields()}
      <br/>
      <Button style={{marginLeft: '-20px'}} type="button" onClick={loginToggle}>{login ? "Click Here to Register" : "Click Here to Login"}</Button>
      <Button style={{marginLeft: '15px'}} onClick={handleSubmit} type='submit'>Submit</Button>
    </form>
  )
}

export default Auth