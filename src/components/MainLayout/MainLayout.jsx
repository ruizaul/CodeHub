import { Outlet } from 'react-router-dom';
import style from './MainLayout.module.sass';
import { SideBar } from '../../components';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const MainLayout = () => {
  const [isDarkMode, setDarkMode] = useLocalStorage('theme', false);

  const toggleDarkMode = () => {
    setDarkMode((checked) => !checked);
  };

  return (
    <>
      <main className={`${isDarkMode ? style.layout : style.layout_dark} `}>
        <Outlet context={[isDarkMode]} />
      </main>
      <SideBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};
