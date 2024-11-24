"use client";

import logo from "../../../assets/images/logo.png";
import HeaderSidebarLayout from "@/components/layout/HeaderSidebarLayout";
import {
  getMessages,
  postMessage,
} from "@/store/features/message/message.actions";
import { formatDate } from "@/utils/helperFunctions";
import { ChatType, MessageType } from "@/utils/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdSend } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const senders = {
  USER: "USER",
  BOT: "BOT",
};

const getSender = (sender: string) => {
  if (sender == senders.USER) {
    return "Du";
  } else if (sender == senders.BOT) {
    return "AI";
  }
};

function page({ params }: { params: Promise<{ id: string }> }) {
  const dispatch = useDispatch();
  const [promptMessage, setPromptMessage] = useState("");
  const messages: MessageType[] = useSelector(
    (state: any) => state.message.messages
  );
  const { id } = React.use(params);
  const chat: ChatType = useSelector((state: any) => state.chat.chats).find(
    (chat: ChatType) => chat.id == id
  );

  const sendPrompt = () => {
    dispatch(
      postMessage({
        text: promptMessage,
        sender: senders.USER,
        chat: chat.id,
      })
    );
    setPromptMessage("");
  };

  useEffect(() => {
    dispatch(getMessages(id));
  }, []);

  return (
    <HeaderSidebarLayout>
      <div className="app-main__chat-container">
        <header className="app-main__chat-container__header">
          <h3>{chat?.title}</h3>
        </header>
        <main className="app-main__chat-container__main">
          <ul>
            {messages.map((message: MessageType) => (
              <li
                key={message.id}
                className={`sender-${getSender(message.sender)?.toLowerCase()}`}
              >
                {message.sender === "BOT" && <Image src={logo} alt="" />}
                <div>
                  <p>{message.text}</p>
                  <small>{formatDate(message.created)}</small>
                </div>
              </li>
            ))}
          </ul>
        </main>
        <div className="app-main__chat-container__bottom">
          <div className="promptInputField">
            <textarea
              value={promptMessage}
              rows={promptMessage.split("\n").length}
              onChange={(e) => setPromptMessage(e.target.value)}
              name="promptInput"
              placeholder="Send a message to AI"
            ></textarea>
            <button onClick={sendPrompt}>
              <MdSend />
            </button>
          </div>
        </div>
      </div>
    </HeaderSidebarLayout>
  );
}

export default page;
