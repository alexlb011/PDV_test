import styled from "styled-components";

export const PaymentBase = styled.div`
  @media (min-width: 200px) {
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 0%;
  }
  @media (min-width: 768px) {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 4%;
  }

  .confirmed {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: #0000008c;
  }

  .shape {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: solid 2px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px;
  }

  .containerBase {
    display: flex;
    justify-content: space-between;
    @media (min-width: 200px) {
      flex-direction: column;
    }
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  .group {
    width: 50%;
    padding: 30px;
    display: flex;
    flex-direction: column;

    @media (min-width: 200px) {
      width: 90%;
      padding: 5px;
    }
    @media (min-width: 768px) {
      margin: 15px;
    }

    .buttonsContainer {
      padding-top: 50px;
      display: flex;
      justify-content: right;
    }
  }
  .divMethod {
    :hover {
      cursor: pointer;
    }
    :active {
      background-color: green;
    }
  }

  .selected {
    background-color: green;
  }

  .method {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border: solid 1px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 15px;

    :hover {
      cursor: pointer;
    }
  }

  .value {
    display: flex;
    justify-content: space-between;
  }
  .valueInput {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    border: solid 1px;
    padding: 15px;
    font-size: 22px;
    font-weight: bold;
  }
  .clientNameInput {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    border: solid 1px;
    padding: 15px;
    font-size: 22px;
    /* background-color: red; */
  }
  .erroValidation {
    font-size: 28px;
    color: red;
  }
`;
