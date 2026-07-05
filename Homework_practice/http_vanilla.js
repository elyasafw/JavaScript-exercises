import { cpSync } from "fs";
import http, { request } from "http";

// 1.
const server1 = http.createServer((request, response) => {
    response.end("Hello from my server");
});

server1.listen(3001, () => {
    console.log("Server 1 running on port 3000");
});

// 2.
const server2 = http.createServer((request, response) => {
    if (request.url === "/") response.end("Home page");
    else if (request.url === "/about") response.end("About page");
    else if (request.url === "/contact") response.end("Contact page");
    else {
        response.end(`Page not found: ${(response.statusCode = 404)}`);
    }
});

server2.listen(3001, () => {
    console.log("Server 2 running on port 3002");
});

// 3.
const server3 = http.createServer((request, response) => {
    if (request.url === "/users") {
        if (request.method === "GET") response.end("Users list");
        else if (request.method === "POST") response.end("User created");
        else response.end("Method Not Allowed");
    } else {
        response.end(`Page not found: ${(response.statusCode = 404)}`);
    }
});

server3.listen(3002, () => {
    console.log("Server 3 running on port 3003");
});
