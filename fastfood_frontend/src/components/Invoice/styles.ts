import styled from "styled-components";

export const CheckValue = styled.div`
  width: 100%;
  border-radius: 10px;
  border-width: 5px;
  border: solid 2px;
  border-color: #00000056;

  /* margin-top: 100px; */
  @media (min-width: 200px) {
  }
  @media (min-width: 768px) {
  }
`;

export const CheckListContainer = styled.div`
  @media (min-width: 200px) {
    display: flex;
    flex-direction: column;
    padding: 5px;

    .OBS {
      max-width: 100%;
      word-wrap: break-word;
      font-size: 18px;
      color: #0000008f;
    }
    .Addons {
      font-size: 12px;
      color: #000000c4;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 50px;

    .OBS {
      max-width: 100%;
      word-wrap: break-word;
      font-size: 18px;
      color: #0000008f;
    }
  }
`;

export const CheckListElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
  .line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1 {
      width: 20%;
    }
    h2 {
      width: 25%;
    }
  }
  .Addons {
    font-size: 12px;
    color: #000000c4;
  }
  @media (min-width: 200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 0px;
    margin-bottom: 0px;
    .line {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      h1 {
        width: 50%;
        font-size: 20px;
        margin-top: 0px;
      }
      h2 {
        width: 25%;
        font-size: 20px;
        margin: 0px;
      }
    }
    .Addons {
      font-size: 12px;
      color: #000000c4;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    .line {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      h1 {
        width: 50%;
        font-size: 40px;
        margin-top: 20px;
      }
      h2 {
        width: 25%;
        font-size: 40px;
        margin: 20px;
      }
    }
  }
`;

export const BorderBasic = styled.div`
  width: 100%;
  border-bottom: dashed 2px;
  margin-bottom: 20px;
  margin-top: 100px;
`;
