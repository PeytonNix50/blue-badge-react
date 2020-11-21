import React, { useState } from 'react'
// import './Auth.css'

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

    const url = `http://localhost:8080/user/${login ? 'login' : 'register'}`
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(r => r.json())
      .then(rObj => props.updateToken(rObj.sessionToken, rObj.user.id))
  }

  const signupFields = () => {
    if (login) {
      return null
    } else {
      return (
        <div>
          <label htmlFor="firstName">First Name</label>
          <br/>
          <input id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
          <br/>
          <label htmlFor="lastName">Last Name</label>
          <br/>
          <input id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
      )
    }
  }

    return (
    <form>
      <h1>{ login ? 'Login' : 'Signup' }</h1>

      <label htmlFor="email">Email</label>
      <br/>
      <input id="email" value={email} onChange={e => setEmail(e.target.value)} />
      <br/>
      <label htmlFor="password">Password</label>
      <br/>
      <input type="password" id="password"  value={password} onChange={e => setPassword(e.target.value)} />
      <br/>
      {signupFields()}
      <br/>
      <button type="button" onClick={loginToggle}>{login ? "Click Here to Register" : "Click Here to Login"}</button>
      <button onClick={handleSubmit}>Submit</button>
    </form>

  )


}

export default Auth