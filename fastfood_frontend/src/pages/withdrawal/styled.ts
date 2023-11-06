import styled from "styled-components";

export const BasicContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-left: 150px;
  padding-right: 150px;

  .border {
    margin-top: 50px;
    width: 10px;
    height: 100%;
    background-color: #000000ab;
    border-radius: 100px;
  }
  .Side {
    width: 50%;
    padding: 50px;
  }
  .inProd {
    font-weight: 800;
    color: #a80000ff;
    font-size: 28px;
  }
  .finished {
    font-weight: 800;
    color: #00a81cff;
    font-size: 28px;
  }
`;
