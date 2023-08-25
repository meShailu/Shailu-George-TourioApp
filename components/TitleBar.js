import styled from "styled-components";

const Headline = styled.h1`
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background-color: #ffd6a5;
  margin: 0;
  padding: 20px;
  text-align: center;
  z-index: 1;
  background: linear-gradient(135deg, #ff6b6b, #ffe66d);
`;

export default function TitleBar() {
  return <Headline>Tourio-App (Places to Explore)</Headline>;
}
