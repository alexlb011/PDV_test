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

  @media (min-width: 200px) {
    padding-left: 2%;
    padding-right: 2%;
  }
  @media (min-width: 768px) {
    padding-left: 4%;
    padding-right: 4%;
  }
`;

export const SearchDiv = styled.div`
  width: 100%;
`;
export const SearchBox = styled.input`
  width: 100%;
  border: none;
  height: 40px;
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
  display: flex;
  flex-direction: row;

  .containerArea {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
  }

  @media (min-width: 200px) {
    align-items: center;
    .containerArea {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media (min-width: 768px) {
    .containerArea {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
export const MenuDiv = styled.div`
  width: 100%;
`;
export const MenuDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .containerArea {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;

    @media (min-width: 200px) {
      .containerArea {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    @media (min-width: 768px) {
      align-items: center;
      .containerArea {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
`;
export const CheckListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
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
  flex-direction: row;
  text-align: center;
  justify-content: center;
  margin-right: 119px;
  margin-top: 50px;
  transition: 50ms;
  .prodData {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(1.1);
  }

  @media (min-width: 200px) {
    display: flex;
    width: 140px;
    height: auto;
    margin: 0px;
    border: 0px;
    padding: 0px;
    margin-bottom: 0px;
    .prodData {
    }
  }
  @media (min-width: 768px) {
    width: 200px;
    height: auto;
    border: 0px;
    padding: 0px;
    margin: 0px;
    margin-bottom: 80px;
    justify-content: center;
    .prodData {
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: top;
    }
  }
  @media (min-width: 1400px) {
    width: 300px;
  }
`;
export const MenuProdImg = styled.img`
  border-radius: 50px;
  width: 250px;
  height: auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.12);

  @media (min-width: 200px) {
    width: 100px;
    border-radius: 20px;
  }
  @media (min-width: 768px) {
    width: 150px;
    border-radius: 20px;
  }
  @media (min-width: 1400px) {
    width: 250px;
    border-radius: 20px;
  }
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
