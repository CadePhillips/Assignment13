const express = require ("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
    console.log("listening");
});

app.get("/api/items", (req, res) => {
    const items = [];
    items[0] = {
        name: "Baseball",
        color: "White and red",
        sport: "Sport: Baseball",
        materials: ["Rubber", " String", " Cork", " Leather", " Cowhide"],
        img: "images/Baseball.jpeg"
    },
    items[1] = {
        name: "Basketball",
        color: "Orange",
        sport: "Sport: Basketball",
        materials: ["Leather", " Rubber", " Synthetic Composite", " Nylon"],
        img: "images/Basketball.jpg"
    },
    items[2] = {
        name: "Football",
        color: "Brown",
        sport: "Sport: Football",
        materials: [" Synthetic Rubber", " Leather Casing", " Pig Skin", " Leather Panels"],
        img: "images/Football.jpg"
    },
    items[3] = {
        name: "Soccer Ball",
        color: "White, can be multicolored",
        sport: "Sport: Soccer",
        materials: [" Plastic", " Petroleum Rubber", " Synthetic Cotton", " Leather", " Coloring"],
        img: "images/Soccer.jpg"
    },
    items[4] = {
        name: "Tennis Ball",
        color: "Yellow",
        sport: "Sport: Tennis",
        materials: [" Felt", " Air", " Wool", " Synthetic Materials", " Nitrogen"],
        img: "images/Tennis.jpeg"
    }
    res.json(items);
    
});