import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Poppins } from "./fonts";

const GlobalStyle = createGlobalStyle`
  ${Poppins}
  body {
    font: 1rem Poppins, sans-serif;
    
  }
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Font_basic_titleH1 = styled.h1`
  margin: 0px;
  font-weight: 800;
`;
export const Font_basic_subTitleH2 = styled.h2`
  margin: 0px;
  font-size: 20px;
  font-weight: 800;

  @media (max-width: 500px) {
    font-size: 15px;
    /* background-color: pink; */
  }
`;
export const Font_basic_textP = styled.p`
  margin: 0px;
  font-weight: 700;
`;

export default GlobalStyle;
