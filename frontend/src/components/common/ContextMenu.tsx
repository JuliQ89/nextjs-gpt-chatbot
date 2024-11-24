type ContextMenuProps = {
  isOpened: boolean;
  options?: {
    icon: React.ReactNode;
    name: string;
    clickFunction: () => void;
    style?: React.CSSProperties;
  }[];
};

const ContextMenu = ({ isOpened, options }: ContextMenuProps) => {
  return (
    <ul className={`app-sidebar__chat-modal ${isOpened ? "active" : ""}`}>
      {options?.map((option, i) => (
        <li key={i} onClick={option.clickFunction} style={option.style}>
          {option.icon}
          {option.name}
        </li>
      ))}
    </ul>
  );
};

export default ContextMenu;
