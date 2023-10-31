import io from "socket.io-client";

export const socket = io("https://post-app-backend-dr19.onrender.com", {
  autoConnect: false,
  extraHeaders: {
    "Access-Control-Allow-Origin": "https://post-app-demo.web.app",
    "Access-Control-Allow-Credentials": "true",
  },
  withCredentials: true,
});
