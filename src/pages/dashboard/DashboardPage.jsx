import { useEffect, useState } from 'react';
import { useLoading } from '../../context/hooks';
import { ErrorClick, InfoClick, SuccessClick, WarningClick } from '../../components/UI/Alerts';
import { getToken } from '../../utils/authServices';
import axios from 'axios';

const DashboardPage = () => {
  const { stop } = useLoading();
  const uid = getToken('decode').uid

  const [user, setUser] = useState([''])

  useEffect(() => {
    axios.get(`https://sf-rest-server.vercel.app/api/usuarios/${uid}`).then(response => {
    setUser(response.data)
  })
    stop();
  }, [stop]);

  return (
    <>
    <h1 className='text-white text-2xl'>Bienvenido {user?.nombre}</h1>
      <main className='h-screen w-auto bg-zinc-600 rounded-2xl flex justify-center align-middle items-center flex-wrap gap-2'>
        <button className='h-60 w-60 bg-green-700 rounded-2xl text-center' onClick={SuccessClick}>
          Success
        </button>
        <button className='h-60 w-60 bg-blue-700 text-center rounded-2xl' onClick={InfoClick}>
          Info
        </button>
        <button className='h-60 w-60 bg-yellow-700 text-center rounded-2xl' onClick={WarningClick}>
          Warning
        </button>
        <button className='h-60 w-60 bg-red-700 text-center rounded-2xl' onClick={ErrorClick}>
          Error
        </button>
      </main>
    </>
  );
};

export default DashboardPage;
