import express, { Express } from "express";

const PORT: number = 9090;

const server: Express = express();

server.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
