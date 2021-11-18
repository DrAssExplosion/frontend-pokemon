import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthorizationVerification = () => {


  let navigate = useNavigate();
  const login = localStorage.getItem('login');
  const password = localStorage.getItem('password');
  const accessPasswordOTP = localStorage.getItem('accessPasswordOTP');
  const loginVerifAndPasswordVerif = (typeof login === 'string' && typeof password === 'string') ? login.toLowerCase() === 'kode' && password.toLowerCase() === 'kode' : false;


  useEffect(() => {
    if (login && password) {
      if (loginVerifAndPasswordVerif && !accessPasswordOTP) {
        navigate('/access-password');
      } else if (loginVerifAndPasswordVerif && accessPasswordOTP) {
        navigate('/pokemon-list');
      } else {
        navigate('/auth');
      }
    } else {
      navigate('/auth');
    }
  }, []);
  return null;
}