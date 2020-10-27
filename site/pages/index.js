import { AiOutlineApple } from "react-icons/ai";
import { SiWindows95 } from "react-icons/si";
import HeadMeta from "../components/head.js";
import Producthunt from "../components/producthunt.js";
import { rain } from "../components/rain.js";

export default function Home() {
  React.useEffect(() => {
    rain();
  }, []);

  return (
    <>
      <HeadMeta />

      <div className="main">
        <h1>Lofi Radio Desktop</h1>
        <img className="image" src="/main.png" alt="lofi desktop app" />
        <div className="rain front-row"></div>

        <div className="buttonDiv">
          <button className="button1" type="button">
            <a className="link" href="https://bit.ly/lofimac3" download="lofi">
              Download <AiOutlineApple />
            </a>
          </button>
          <button className="button2" type="button">
            <a className="link" href="https://bit.ly/lofiwin3" download="lofi">
              Download <SiWindows95 />
            </a>
          </button>
        </div>
        <Producthunt />
      </div>
    </>
  );
}
