"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { getChats } from "./features/chat/chat.actions";
import { useEffect } from "react";

const ReduxInitializer = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChats());
  }, []);

  return <>{children}</>;
};

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <ReduxInitializer>{children}</ReduxInitializer>
      </Provider>
    </>
  );
};

export default ReduxProvider;
