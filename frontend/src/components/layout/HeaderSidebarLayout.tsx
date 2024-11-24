import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

type HeaderSidebarLayoutType = {
  children: React.ReactNode;
  headerProps?: {};
  sidebarProps?: {};
};

const HeaderSidebarLayout = ({
  children,
  headerProps,
  sidebarProps,
}: HeaderSidebarLayoutType) => {
  return (
    <div className="app-wrapper">
      <Sidebar {...sidebarProps} />
      <Header {...headerProps} />
      <main className="app-main-container">{children}</main>
    </div>
  );
};

export default HeaderSidebarLayout;
