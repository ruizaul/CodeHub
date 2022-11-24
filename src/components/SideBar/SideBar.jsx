import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import style from "./SideBar.module.sass";
import logoPic from "../../assets/logo.png";
import {
  HiOutlineHome,
  HiLogout,
  HiOutlineDocumentAdd,
  HiOutlineClipboardCopy,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { logout } from "../../utils/authServices";
import usercat from "../../assets/usercat.jpg";

export const SideBar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <>
      <nav className={`${isDarkMode ? style.nav : style.nav_dark} `}>
        <div
          className={`${isDarkMode ? style.logo_image : style.logo_image_dark}`}
        >
          <img src={logoPic} alt="logopic" title="necobot :3" />
        </div>
        <div className={`${style["menu_items"]}`}>
          <ul className={`${style["nav_links"]}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                <span className={`${style["link_tooltip"]}`}>Dashboard</span>
                <HiOutlineHome className={`${style["link_icon"]}`} />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dailies"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                <span className={`${style["link_tooltip"]}`}>Dailies</span>
                <HiOutlineDocumentAdd className={`${style["link_icon"]}`} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reportes"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                <span className={`${style["link_tooltip"]}`}>Reportes</span>
                <HiOutlineClipboardCopy className={`${style["link_icon"]}`} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/usuarios"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                <span className={`${style["link_tooltip"]}`}>Usuarios</span>
                <HiOutlineUser className={`${style["link_icon"]}`} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/empleados"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                <span className={`${style["link_tooltip"]}`}>Empleados</span>
                <HiOutlineUserGroup className={`${style["link_icon"]}`} />
              </NavLink>
            </li>
          </ul>
          <ul
            className={`${
              isDarkMode ? style.bottom_links : style.bottom_links_dark
            }`}
          >
            <li>
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                moonColor={"#514F44"}
                sunColor={"#f9d71c"}
                className={`${style["link_toggle"]}`}
              />
            </li>
            <li>
              <img
                src={usercat}
                alt="profilepic"
                className={`${style["link_profile"]}`}
              />
            </li>
            <li>
              <NavLink to="/auth/login" onClick={() => logout()}>
                <span className={`${style["link_tooltip"]}`}>Logout</span>
                <HiLogout className={`${style["link_logout"]}`} />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
