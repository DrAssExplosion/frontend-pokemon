import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { AuthorizationVerification } from '../components/AuthorizationVerification';
import { useStoreActions } from 'easy-peasy';

export const AuthPage = () => {

  let navigate = useNavigate();
  const [loginInput, setLoginInput] = useState('kode@kode.ru');
  const [passwordInput, setPasswordInput] = useState('Enk0deng');

  const setLogin = useStoreActions((actions) => actions.userData.setLogin);
  const setPassword = useStoreActions((actions) => actions.userData.setPassword);

  const auth = () => {
    const loginIsCorrect = loginInput.toLowerCase() === 'kode@kode.ru';
    const passwordIsCorrect = passwordInput.toLowerCase() === 'enk0deng';
    if (loginIsCorrect && passwordIsCorrect) {
      setLogin(loginInput);
      setPassword(passwordInput);
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
          <Input icon='user' size='big' iconPosition='left' placeholder='Login' value={loginInput} onKeyPress={(event) => event.key === 'Enter' ? auth() : false} onChange={e => setLoginInput(e.currentTarget.value)} />
          <Input icon='lock' size='big' iconPosition='left' type='password' placeholder='Password' value={passwordInput} onKeyPress={(event) => event.key === 'Enter' ? auth() : false} onChange={e => setPasswordInput(e.currentTarget.value)} />
          <Button circular size='massive' icon='arrow right' onClick={auth}  />
        </div>
      </div>
    </>
  );
}

const style = {
  area: {
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