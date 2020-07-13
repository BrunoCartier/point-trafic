const path = require("path");
const axios = require("axios");
const express = require("express");
const app = express();

const podcastUrl = "https://radio.vinci-autoroutes.com/medias/podcast/VOC4.MP3";

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/check", async (req, res, next) => {
    try {
        const response = await axios.head(podcastUrl);
        res.send({
            lastModified: response.headers["last-modified"],
            date: response.headers["date"],
        });
    } catch (e) {
        next(e);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is listening on", port);
});
