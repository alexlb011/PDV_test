import express from "express";
import swaggerUi from "swagger-ui-express";
import http from "http";
import { Server } from "socket.io";
import router from "./src/routes/basic_routes";
import path from "path"; // Importe o módulo 'path'

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Substitua com o seu domínio React
    methods: ["GET", "POST"],
  },
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Substitua com o seu domínio React
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

io.on("connection", (socket) => {
  console.log("Um cliente se conectou.");

  // Manipule eventos de WebSocket aqui
  socket.on("order", (message) => {
    console.log("chegou no server");
    console.log(message);
    io.emit("order", message);
  });
  socket.on("ordersFinished", (message) => {
    console.log("chegou no server : ordersFinished");
    console.log(message);
    io.emit("ordersFinished", message);
  });
  socket.on("ordersPending", (message) => {
    console.log("chegou no server : ordersPending");
    console.log(message);
    io.emit("ordersPending", message);
  });

  socket.on("disconnect", () => {
    console.log("Um cliente se desconectou.");
  });
});

import swaggerJson from "./src/swagger.json";
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);

server.listen(3000, () => {
  console.log("Servidor HTTP está ouvindo na porta 3000.");
});
