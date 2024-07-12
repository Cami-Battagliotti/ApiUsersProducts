import net from "net";
import { PORT } from "./constants";
import { endpoints } from "./app";

const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", async (message) => {
    const path = await endpoints(message);
    socket.write(path);
  });
});

server.listen(PORT, () =>
  console.log("Servidor escuchando en puerto: " + PORT)
);
