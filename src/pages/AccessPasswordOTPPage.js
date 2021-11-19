import React, { useEffect, useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { AuthorizationVerification } from '../components/AuthorizationVerification';


export const AccessPasswordOTPPage = () => {

  let navigate = useNavigate();
  const [code, setCode] = useState('');
  const [generateCode, setGenerateCode] = useState('');
  const login = localStorage.getItem('login');
  const password = localStorage.getItem('password');

  const generateOTP = () => {
    setTimeout(() => {
      let codeOTP = '';
      for (let i = 0; i < 4; i++) {
        let num = ~~(Math.random() * 10);
        codeOTP += num.toString();
      }
      alert(codeOTP);
      setGenerateCode(codeOTP);
    }, 1000)
  };


  useEffect(() => {
    if (!login && !password) return;
    generateOTP();
  }, [])

  const auth = () => {
    if (code === generateCode) {
      localStorage.setItem('accessPasswordOTP', true);
      navigate('/pokemon-list');
    } else {
      alert('Код неверный');
    }
  }

  return (
    <>
      <AuthorizationVerification />
      <div style={style.area}>
        <div style={style.container}>
          <Input icon='mail' size='big' iconPosition='left' placeholder='Code from SMS' value={code} onChange={e => setCode(e.currentTarget.value)} />
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