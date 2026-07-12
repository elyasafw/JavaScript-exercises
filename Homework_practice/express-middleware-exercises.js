import express from "express";

const app = express();
app.use(express.json());

// חלק ב
// .6
function logger(req, res, next) {
    console.log(`Method: ${req.method}`);
    console.log(`Url: ${req.url}`);
    next();
}
app.use(logger);

// 7.
app.post("/users", (req, res) => {
    console.log(req.body);
    res.json({ received: req.body });
});

// 8.
function auth(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}
app.use("/api", auth);

// 9
app.get("/home", (req, res) => res.send("Home"));
app.get("/api/data", (req, res) => res.send("Data"));

// a: Home
// b: Unauthorized
// c: Data

// 10.
// חסר return לעצירה של הפונקציה לפני הריצה להדפסה הבאה

// 11.
function requestTimer(req, res, next) {
    req.startTime = Date.now();
    next();
}

app.listen(3000, () => {
    console.log("server on!");
});
