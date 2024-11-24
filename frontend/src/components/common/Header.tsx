import "../../assets/styles/sidebar-header.css";

type HeaderProps = {};

const GPTModelDropdown = () => {
  const versions: string[] = ["gpt 3.5", "gpt 4", "gpt o-mini"];

  return (
    <div>
      {versions.map((version: string, i: number) => (
        <div key={i}>{version}</div>
      ))}
    </div>
  );
};

const Header = ({}: HeaderProps) => {
  return <header className="app-header"></header>;
};

export default Header;
