import styled, { css } from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  .border {
    padding-top: 50px;
  }
`;
export const SearchDiv = styled.div`
  width: 100%;
`;
export const SearchBox = styled.input`
  width: 100%;
  border: none;
  height: 40px;
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
`;
export const CategoryDiv = styled.div`
  width: 100%;
  border: 0px;
  padding: 0px;
  margin: 20px;
`;
export const CategoryElementsDiv = styled.div`
  /* width: 100%; */
  display: flex;
`;
export const MenuDiv = styled.div`
  width: 100%;
`;
export const MenuDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: flex;
  /* justify-content: space-around; */
`;
export const CheckListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  /* justify-content: space-around; */
`;
export const CheckListElement = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const MenuElementsDiv = styled.div`
  border-radius: 50px;
  width: 250px;
  height: 400px;
  display: flex;
  text-align: center;
  margin-right: 119px;
  margin-top: 50px;
  transition: 50ms;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(1.1);
  }
`;
export const MenuProdImg = styled.img`
  border-radius: 50px;
  width: 250px;
  height: 250px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.12);
`;

export const CheckValue = styled.div`
  width: 100%;
  border-radius: 10px;
  border-width: 5px;
  border: solid 2px;
  border-color: #00000056;
  margin-top: 100px;
`;
export const ButtonPositive = styled.button`
  border-radius: 15px;
  width: 250px;
  height: 50px;
  color: white;
  border-width: 1px;
  font-weight: bold;
  margin: 20px;
  background-color: green;
  font-size: 18px;
  &:hover {
    transition: 150ms;
    cursor: pointer;
  }
`;
export const ButtonNegative = styled.button`
  border-radius: 15px;
  width: 250px;
  height: 50px;
  border-width: 1px;
  font-weight: bold;
  margin: 20px;
  border-color: green;
  color: green;
  &:hover {
    transition: 150ms;
    cursor: pointer;
  }
`;
export const BorderBasic = styled.div`
  width: 100%;
  border-bottom: dashed 2px;
  margin-bottom: 20px;
  margin-top: 100px;
`;
