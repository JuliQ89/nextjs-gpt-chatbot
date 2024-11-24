import "../../assets/styles/sidebar-header.css";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { MdChatBubbleOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { ChatType } from "@/utils/types";
import { RiAddFill, RiDeleteBin5Line } from "react-icons/ri";
import { deleteChat, postChat } from "@/store/features/chat/chat.actions";
import { usePathname } from "next/navigation";
import { BsPencil, BsThreeDots } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ContextMenu from "./ContextMenu";

const ChatContextDots = ({ chat }: { chat: ChatType }) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpened, setIsOpend] = useState(false);
  const contextModalRef = useRef<HTMLDivElement | null>(null);

  const openChatContextModal = (e: React.MouseEvent<Element>) => {
    e.preventDefault();
    setIsOpend(true);
  };

  const closeChatContextModal = (e: MouseEvent) => {
    if (
      contextModalRef.current &&
      !contextModalRef.current.contains(e.target as Node)
    ) {
      setIsOpend(false);
    }
  };

  function handleDeleteChat() {
    dispatch(deleteChat(chat.id));
    router.push("/");
  }

  useEffect(() => {
    document.addEventListener("click", closeChatContextModal);
    return () => {
      document.removeEventListener("click", closeChatContextModal);
    };
  }, []);

  return (
    <>
      {pathname.includes(chat.id) && (
        <abbr
          title="Options"
          ref={contextModalRef}
          onClick={(e) => openChatContextModal(e)}
        >
          <BsThreeDots />
          <ContextMenu
            isOpened={isOpened}
            options={[
              {
                icon: <BsPencil />,
                name: "Rename",
                clickFunction: () => console.log("rename"),
              },
              {
                icon: <RiDeleteBin5Line />,
                name: "Delete",
                clickFunction: () => handleDeleteChat(),
                style: { color: "#d9162c" },
              },
            ]}
          />
        </abbr>
      )}
    </>
  );
};

const Sidebar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const chats = useSelector((state: any) => state.chat.chats);
  const sortedChats = [...chats].sort((a: ChatType, b: ChatType) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  });

  const createNewChat = () => {
    dispatch(postChat());
  };

  return (
    <aside className="app-sidebar">
      <header className="app-sidebar__header">
        <Link href="/">
          <Image src={logo} alt="" priority />
          <h4>Chatbot</h4>
        </Link>
        <button onClick={createNewChat}>
          <RiAddFill /> New Chat
        </button>
      </header>
      <main className="app-sidebar__main">
        <ul className="app-sidebar__chats-list">
          {sortedChats.map((chat: ChatType) => (
            <li key={chat.id}>
              <Link
                href={`/chat/${chat.id}`}
                className={`${pathname.includes(chat.id) ? "active" : ""}`}
              >
                <MdChatBubbleOutline />
                <input
                  type="text"
                  value={chat.title}
                  name="chatTitle"
                  id="chat_title"
                  readOnly={true}
                  style={{ cursor: "pointer" }}
                />
                <ChatContextDots chat={chat} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </aside>
  );
};

export default Sidebar;
