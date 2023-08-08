import express, { Express } from "express";

class Main {

    static #instance: Main;

    static get(): Main {
        if (!this.#instance) {
            this.#instance = new Main();
        }
        return this.#instance;
    }

    #server: Express = express();
    port: number = 9090;

    constructor() {
        
        this.#server.listen(this.port, () => {
            console.log(`The server is running on: ${this.port}`);
        })
    }
}

Main.get();