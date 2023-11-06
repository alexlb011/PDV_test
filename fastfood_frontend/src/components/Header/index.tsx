import { useState, useEffect } from "react";
import { BasicDiv, TitleFont, MenuHeader, MenuItem } from "./styles";
import { Link } from "react-router-dom";
import menuIcon from "/svg/menu.svg";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenDropdown, setDropdown] = useState(false);

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  const checkScreenWidth = () => {
    // Defina isMobile como verdadeiro se a largura da tela for menor ou igual a 767 pixels
    setIsMobile(window.innerWidth <= 767);
  };
  const swithDropdown = () => {
    setDropdown(!isOpenDropdown);
  };

  return (
    <BasicDiv>
      <Link className="MenuItemLink" to="/">
        <TitleFont>fastfood</TitleFont>
      </Link>
      <MenuHeader>
        {isMobile ? (
          <div className="mobileMenu">
            <button className="dropdownMain" onClick={swithDropdown}>
              <img className="menuIcon " src={menuIcon} alt="Logo" />
            </button>
            {isOpenDropdown ? (
              <div className="dropdown">
                <button className="dropdownItem">
                  <Link className="MenuItemLink" to="/">
                    Inicio
                  </Link>
                </button>
                <button className="dropdownItem">
                  <Link className="MenuItemLink" to="/kitchen">
                    Cozinha
                  </Link>
                </button>
                <button className="dropdownItem">
                  <Link className="MenuItemLink" to="/withdrawal">
                    Retirada
                  </Link>
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <>
            <MenuItem>
              <Link className="MenuItemLink" to="/">
                Pedidos
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="MenuItemLink" to="/kitchen">
                Cozinha
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="MenuItemLink" to="/withdrawal">
                Retirada
              </Link>
            </MenuItem>
          </>
        )}
      </MenuHeader>
    </BasicDiv>
  );
}
