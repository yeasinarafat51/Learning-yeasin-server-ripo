const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const course = require("./data/course.json");

app.get("/", (req, res) => {
    res.send("now server is running");
});

app.get("/allcourse", (req, res) => {
    res.send(course);
});

app.get("/categories/:id", (req, res) => {
    const id = req.params.id;
    const item = course?.find((c) => c.id == id);
    if(!item) {
        res.send("Course ar nai");
    }
    res.send(item);
})
app.get("/checke/:id", (req, res) => {
    const id = req.params.id;
    const item = course?.find((c) => c.id == id);
    if(!item) {
        res.send("Course ar nai");
    }
    res.send(item);
})


app.listen(Port, () => {
    console.log("server is running", Port);
});