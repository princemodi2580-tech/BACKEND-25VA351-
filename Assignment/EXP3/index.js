import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    fs.readFile("./pages/home.html", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading home page");
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});