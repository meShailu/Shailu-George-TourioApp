import TitleBar from "./TitleBar.js";
import styled from "styled-components";
import Head from "next/head.js";

const Main = styled.main`
  display: grid;

  gap: 0.5rem;
  /* margin-bottom:0; */
  margin: 5rem auto 0;
  /* margin-top: 5rem; */
  padding: 0.5rem;
  position: relative;
  width: 50%;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tourio</title>
      </Head>
      <TitleBar />
      <Main>{children}</Main>
    </>
  );
}
