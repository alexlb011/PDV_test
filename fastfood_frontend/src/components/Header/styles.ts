import styled from "styled-components";

export const BasicDiv = styled.div`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .MenuItemLink {
    text-decoration: none;
    color: white;
  }

  .mobileMenu {
    display: flex;
    flex-direction: column;

    .dropdownMain {
      background-color: transparent;
      border: none;
      transition: 50ms;
      &:active {
        transform: scale(1.3);
      }
    }

    .dropdown {
      background-color: green;
      position: absolute;
      top: 90px;
      right: 20px;
      flex-direction: column;
      display: flex;
      z-index: 1100;
      justify-content: right;

      .dropdownItem {
        color: white;
        background-color: green;
        width: auto;
        font-size: 55px;
        font-weight: bold;
        padding: 15px;
        text-align: right;
        border: none;
        cursor: pointer;
        transition: 100ms;

        &:hover {
          background-color: #00000057;
        }
      }
    }
    @media (min-width: 0px) {
      .menuIcon {
        width: 30px;
        height: auto;
        opacity: 70%;
      }
    }
    @media (min-width: 767px) {
      .menuIcon {
        width: 0px;
        height: 0px;
        opacity: 0%;
      }
    }
  }
`;
export const MenuHeader = styled.div`
  color: white;
  display: flex;
  height: 100%;
`;
export const TitleFont = styled.text`
  font-size: 45px;
  font-weight: bold;
  align-items: center;
`;
export const MenuItem = styled.text`
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 13px;

  &:hover {
    transition: 300ms;
    cursor: pointer;
    background-color: #00000031;
  }
`;
