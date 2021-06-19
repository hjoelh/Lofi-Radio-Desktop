import { VscGithub } from "react-icons/vsc";

export default function Github() {
  return (
    <a
      rel="noreferrer"
      className="github"
      href="https://github.com/hjoelh/Lofi-Radio-Desktop"
      target="_blank"
      aria-label="GitHub"
      style={{
        color: "white",
        fontSize: "30px",
        position: "fixed",
        bottom: "15px",
        right: "15px",
      }}
    >
      <VscGithub />
    </a>
  );
}
