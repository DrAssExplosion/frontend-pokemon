import React, { useEffect, useState, useRef } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { AuthorizationVerification } from '../components/AuthorizationVerification';
import { useStoreState, useStoreActions } from 'easy-peasy';

export const AccessPasswordOTPPage = ({ locationKeyThis }) => {

  let navigate = useNavigate();
  const [code, setCode] = useState('');
  const [generateCode, setGenerateCode] = useState('');

  const setAccessPasswordOTP = useStoreActions((actions) => actions.userData.setAccessPasswordOTP);
  const login = useStoreState((state) => state.userData.data.login);
  const password = useStoreState((state) => state.userData.data.password);

  const generateOTP = () => {
    let codeOTP = '';
    for (let i = 0; i < 4; i++) {
      let num = ~~(Math.random() * 10);
      codeOTP += num.toString();
    }
    setGenerateCode(codeOTP);
    setTimeout(() => {
      alert(codeOTP);
    }, 1000);
  };


  useEffect(() => {
    if (login && password && locationKeyThis !== 'default') {
      generateOTP();
    }
  }, [])

  const auth = () => {
    if (code === generateCode) {
      setAccessPasswordOTP(true);
      navigate('/pokemon-list');
    } else {
      alert('Код неверный');
    }
  }

  return (
    <>
      <AuthorizationVerification />
      <div style={style.area} >
        <div style={style.container}>
          <Input icon='mail' size='big' iconPosition='left' placeholder='Code from SMS' value={code} onChange={e => setCode(e.currentTarget.value)} />
          <Button circular size='massive' icon='arrow right' onClick={auth} />
        </div>
      </div>
    </>
  );
};

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