import './styles.css';
import { MainRouters } from './routers/MainRouters';
import { NecoBotProvider } from './context/NecoBot_context';
import { Loading } from './components/UI/Loading';
import { ToastContainer } from 'react-toastify';

const MainComponent = () => {
  return (
    <>
      <Loading />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <MainRouters />
    </>
  );
};

function App() {
  return (
    <NecoBotProvider>
      <MainComponent />
    </NecoBotProvider>
  );
}

export default App;
