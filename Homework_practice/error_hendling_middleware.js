import bodyParser from "body-parser";
import express from "express";

const app = express();
app.use(express.json());

// 1.
function addTimeForm(req, res, next) {
    req.requestTime = new Date().toISOString();
    next();
}

// 2.
app.use(addTimeForm);
app.get("/time", addTimeForm, (req, res) => {
    res.send(`Request received at: ${req.requestTime}`);
});

// 3.
function checkBody(req, res, next) {
    if (!req.body) {
        return res.status(400).json({ error: "Body cannot be empty" });
    }
    next();
}
app.use(checkBody);

// 4.
app.post("/data", checkBody, (req, res) => {
    res.json({ message: "Data received" });
});

// 5.
const exe5Router = express.Router();

function validPassword(req, res, next) {
    const password = req.body.password;
    if (password.length < 8) {
        return res
            .status(400)
            .json({ error: "Password must be at least 8 chars." });
    }
    next();
}
app.use(validPassword)

exe5Router.post("/register",validPassword, (req, res) => {
    console.log(req.body);
    res.status(201).json({
        name: req.body.name,
        password: req.body.password,
    });
});

app.post("/", exe5Router);

app.listen(3001, () => console.log("App running on port 3001 ..."));
