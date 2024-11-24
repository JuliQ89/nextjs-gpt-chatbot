export type ChatType = {
  title: string;
  created: string;
  id: string;
};

export type MessageType = {
  chat: ChatType;
  created: string;
  id: number;
  sender: string;
  sequence_number: number;
  text: string;
};
