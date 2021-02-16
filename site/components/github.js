import { VscGithub } from "react-icons/vsc";
import { IconContext } from "react-icons";

const Github = () => {
  return (
    <a
      rel="noopener"
      className="github"
      href="https://github.com/hjoelh/Lofi-Radio-Desktop"
      target="_blank"
    >
      <IconContext.Provider value={{ color: "white", size: "2.5em" }}>
        <VscGithub />
      </IconContext.Provider>
    </a>
  );
};

export default Github;
