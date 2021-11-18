import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { AuthorizationVerification } from '../components/AuthorizationVerification';

export const AuthPage = () => {

  let navigate = useNavigate();
  const [login, setLogin] = useState('KODE');
  const [password, setPassword] = useState('KODE');

  const auth = () => {
    const loginIsCorrect = login.toLowerCase() === 'kode';
    const passwordIsCorrect = password.toLowerCase() === 'kode';
    if (loginIsCorrect && passwordIsCorrect) {
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      navigate('/access-password');
    } else {
      alert('Логин или пароль неверны')
    }
  }

  return (
    <>
      <AuthorizationVerification />
      <div style={style.area}>
        <div style={style.container}>
          <Input icon='user' size='big' iconPosition='left' placeholder='Login' value={login} onChange={e => setLogin(e.currentTarget.value)} />
          <Input icon='lock' size='big' iconPosition='left' type='password' placeholder='Password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
          <Button circular size='massive' icon='arrow right' onClick={auth} />
        </div>
      </div>
    </>
  );
}

const style = {
  area: {
    background: 'url(./../assets/background-auth.jpg)',
    backgroundSize: 'cover',
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  container: {
    height: '40%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
}