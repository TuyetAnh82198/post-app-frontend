import io from "socket.io-client";

export const socket = io("https://post-app-backend-dr19.onrender.com", {
  autoConnect: false,
  extraHeaders: {
    "Access-Control-Allow-Origin": "https://post-app-2rt8.onrender.com",
    "Access-Control-Allow-Credentials": "true",
  },
  withCredentials: true,
});
