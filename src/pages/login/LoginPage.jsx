import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginCard } from '../../components';
import { useLoading } from '../../context/hooks';
import { storeToken } from '../../utils/authServices';

const LoginPage = () => {
  const { run } = useLoading();
  const navigate = useNavigate();

  const correoRef = useRef('');
  const passwordRef = useRef('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const { value: correo } = correoRef.current;
    const { value: password } = passwordRef.current;

    axios.post('https://sf-rest-server.vercel.app/api/auth/login', {
     correo,
     password
    })
    .then((response) => {
      console.log(response.data.token);
      storeToken(response.data.token)
      run();
      setTimeout(() => navigate('/'), 1500);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  };

  return (
    <>
      <LoginCard handleSubmit={handleSubmit} correoRef={correoRef} passwordRef={passwordRef} />
    </>
  );
};

export default LoginPage;
