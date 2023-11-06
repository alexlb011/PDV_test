import styled from "styled-components";

export const BasicContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  h1,
  h2,
  h3,
  h4,
  p {
    border: 0px;
    margin: 0px;
    @media (min-width: 200px) {
      font-size: 15px;
    }
    @media (min-width: 768px) {
      font-size: 35px;
    }
  }

  .border {
    margin-top: 50px;
    width: 2px;
    height: 100%;
    background-color: #000000ab;
    border-radius: 100px;
  }

  .Side {
    @media (min-width: 200px) {
      width: 50%;
      padding: 10px;
      padding-top: 20px;
    }
    @media (min-width: 768px) {
      width: 40%;
      height: 20%;
      padding: 50px;
    }

    .orderGroup {
      @media (min-width: 200px) {
        border: solid 1px;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 5px;
        p {
          @media (min-width: 200px) {
            font-size: 15px;
          }
          @media (min-width: 768px) {
          }
        }
        h4 {
          @media (min-width: 200px) {
            font-size: 15px;
          }
          @media (min-width: 768px) {
          }
        }
      }
      @media (min-width: 768px) {
        padding: 15px;
        margin-bottom: 15px;
      }
    }

    .inProdItem {
      color: #0000009c;
      font-weight: 800;
    }
    .HBase {
      padding-bottom: 50px;
      @media (min-width: 200px) {
        font-size: 25px;
      }
      @media (min-width: 768px) {
        font-size: 35px;
      }
    }

    .buttons {
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 50px;
      button {
        width: 50px;
        height: 50px;
      }

      .clientName {
        display: flex;
        justify-content: space-between;
        /* margin-right: 50px; */
      }
    }
    .orderItem {
      display: flex;
      flex-direction: column;
      .Top {
        display: flex;
        justify-content: space-between;
        margin-right: 50px;
        margin-right: 50px;
        font-weight: bold;
      }
    }
    .finishedItem {
      color: #00a81cff;
      font-weight: 800;
    }
  }

  #inProd {
  }
  #finished {
  }
`;
