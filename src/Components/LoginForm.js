import React from 'react';


function LoginForm() {
  
  return (
    <div className='page'>
      <div className="cover">
        <h1>LOGIN</h1>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <div className='login-btn'>Login</div>
        <p className='text'>OR LOGIN USING</p>
      <div className='alt-login'>
          <button className='login'>GOOGLE</button>
          <button>FACEBOOK</button>
      </div>
      </div>

    </div>
  )
}

export default LoginForm;