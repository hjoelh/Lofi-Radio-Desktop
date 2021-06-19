import { useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global.js";

import { AiOutlineApple } from "react-icons/ai";
import { SiWindows95 } from "react-icons/si";
import HeadMeta from "../components/head.js";
import Producthunt from "../components/producthunt.js";
import { rain } from "../components/rain.js";
import Github from "../components/github.js";

export default function Home() {
  useEffect(() => {
    rain();
  }, []);

  return (
    <>
      <HeadMeta />
      <GlobalStyle />
      <>
        <Container>
          <Title>Lofi Radio Desktop</Title>
          <Img src="/main.png" alt="lofi desktop app" />

          <div className="rain front-row" />

          <div style={{ display: "flex" }}>
            <Button_1>
              <Link
                href="https://www.dropbox.com/s/i0fihs3w21rb67e/lofi%20osx.zip?raw=1"
                download="lofi.app"
              >
                Download <AiOutlineApple />
              </Link>
            </Button_1>

            <Button_2>
              <Link
                href="https://www.dropbox.com/s/2f18mreoosdra71/lofi-1.0.0%20Setup.exe?raw=1"
                download="lofi.app"
              >
                Download <SiWindows95 />
              </Link>
            </Button_2>
          </div>
          <Producthunt />
          <Github />
        </Container>
      </>
    </>
  );
}

// STYLES

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0px auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 55px;
  color: white;
  display: inline-block;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 2.5rem;
  }
`;

const Img = styled.img`
  box-shadow: rgba(170, 170, 170, 0.3) 0px 19px 38px,
    rgba(158, 158, 158, 0.22) 0px 15px 12px;
  max-width: 603px;
  max-height: 339px;
  width: 90%;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  margin: 8em 2em;
  height: 3.75em;
  width: 10em;
  border-radius: 15px;
  border: none;
  font-size: 0.9rem;
  font-weight: 900;
  transition: 1s;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 420px) {
    margin: 5em 1em;
  }
`;

const Button_1 = styled(Button)`
  background: linear-gradient(
    90deg,
    rgba(253, 29, 29, 1) 24%,
    rgba(252, 176, 69, 1) 100%
  );
`;

const Button_2 = styled(Button)`
  background: linear-gradient(
    90deg,
    rgba(29, 79, 253, 1) 24%,
    rgba(69, 252, 161, 1) 100%
  );
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
  width: 100%;
  height: 54px;
  color: inherit;
  text-decoration: none;
`;
