import http from "http";

let movies = [];
let nextID = 1;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    if (req.url === "/movies") {
        if (req.method === "GET") res.end(JSON.stringify(movies));
        else if (req.method === "POST") {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", () => {
                const parsedBody = JSON.parse(body);
                const newMovie = {
                    id: nextID,
                    title: parsedBody.title,
                    director: parsedBody.director,
                };
                movies.push(newMovie);
                nextID++;
                res.statusCode = 201;
                res.end(JSON.stringify(newMovie));
            });
        } else if (req.method === "PUT") {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", () => {
                const parsedBody = JSON.parse(body);
                let movie = movies.find((m) => m.id === parsedBody.id);
                if (!movie) {
                    res.statusCode = 404;
                    let message = { message: "Movie not found" };
                    res.end(JSON.stringify(message));
                } else {
                    if (parsedBody.title !== undefined)
                        movie.title = parsedBody.title;
                    if (parsedBody.director !== undefined)
                        movie.director = parsedBody.director;
                }
                res.end(JSON.stringify(movie));
            });
        }
    }
});

server.listen(3000, () => {
    console.log("Movies server start successfully");
});
