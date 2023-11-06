import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0000005d;
  z-index: 1000;
  overflow-y: auto;
`;
export const ModalShape = styled.div`
  position: relative;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -25%);
  width: 60%;
  border-radius: 15px;
  background-color: #fff;
  margin-bottom: 20%;
  .invoicePlace {
    margin: 20px;
    padding-bottom: 15px;
  }
  .buttonsContainer {
    display: flex;
    justify-content: right;
  }

  @media (min-width: 200px) {
    top: 45%;
    width: 90%;

    .closeButtonDiv {
      position: absolute;
      display: flex;
      right: 0;
      justify-content: right;
      padding: 5px;
      transition: 150ms;
      :hover {
        cursor: pointer;
        background-color: #09ff0046;
      }
    }
    .closeButton {
      display: flex;
      justify-content: right;
      padding: 15px;
      font-size: 100%;
      border: solid 1px;
      border-radius: 20px;
    }
  }
  @media (min-width: 767px) {
    top: 45%;
    width: 80%;

    .closeButtonDiv {
      position: absolute;
      display: flex;
      right: 0;
      justify-content: right;
      padding: 25px;
      transition: 150ms;
      :hover {
        cursor: pointer;
        background-color: #09ff0046;
      }
    }
    .closeButton {
      display: flex;
      justify-content: right;
      padding: 35px;
      font-size: 100%;
      border: solid 1px;
      border-radius: 20px;
    }
  }
`;

export const ModelInfo = styled.div`
  .buttonContainer {
    border: solid 3px;
    border-radius: 100px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    border-color: green;

    .button {
      border-radius: 100%;
      width: 50px;
      height: 50px;
      font-size: 40px;
      border: none;
      background-color: green;
      color: white;
      transform: scale(1.1);
      transition: 150ms;
      &:active {
        transform: scale(1.3);
      }
    }
  }

  @media (min-width: 200px) {
    padding-top: 20px;
    padding-left: 10px;

    .Order {
      display: flex;
    }
    .orderData {
      padding-left: 8px;
      width: 50%;
      .description {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .Adicionais {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      .info {
        margin: 0%;
        width: 40%;
      }
      .value {
        width: 20%;
      }

      .selecteButton {
        appearance: none;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        outline: solid 2px;
        outline-color: green;
        cursor: pointer;
        transition: 150ms;
        &:active {
          transform: scale(1.1);
        }
      }
      .selecteButton:before {
        content: "";
        position: absolute;
        border-radius: 50%;
        height: 55px;
        width: 55px;
        background-color: green;
        opacity: 0;
        transition: all 50ms ease-in-out;
      }
      .selecteButton:checked:before {
        opacity: 1;
      }
    }

    .obsInput {
      border: solid 1px;
      margin: 20px;
      height: 100px;
      text-align: start;
      flex-wrap: wrap;
      font-size: 22px;
    }
  }

  @media (min-width: 767px) {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;

    .orderData {
      padding-left: 8px;
      width: 50%;
      .description {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .Adicionais {
      display: flex;
      flex-direction: row;
      align-items: center;
      .AdicionalImg {
        width: 15%;
        border-radius: 50px;
      }
      .info {
        margin: 5%;
        width: 40%;
      }
      .value {
        width: 20%;
      }

      .selecteButton {
        appearance: none;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        outline: solid 2px;
        outline-color: green;
        cursor: pointer;
        transition: 150ms;
        &:active {
          transform: scale(1.1);
        }
      }

      .selecteButton:before {
        content: "";
        position: absolute;
        border-radius: 50%;
        height: 55px;
        width: 55px;
        background-color: green;
        opacity: 0;
        transition: all 50ms ease-in-out;
      }
      .selecteButton:checked:before {
        opacity: 1;
      }
    }

    .obsInput {
      border: solid 1px;
      margin: 20px;
      width: 90%;
      height: 100px;
      text-align: start;
      flex-wrap: wrap;
      font-size: 22px;
    }
  }
`;
export const Order = styled.div`
  @media (min-width: 200px) {
    display: flex;
    .orderIMG {
      border-radius: 10px;
      width: 20%;
      height: 20%;
    }
  }
  @media (min-width: 767px) {
    display: flex;
    .orderIMG {
      border-radius: 50px;
      width: 30%;
      padding: 20px;
    }
  }
`;
