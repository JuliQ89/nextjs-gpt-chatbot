import { axiosInstance } from "./axios";

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("de-de", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
};
