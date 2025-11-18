const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_URL = "https://prim.iledefrance-mobilites.fr/marketplace/gtfs-rt/vehicle-position";
const API_KEY = "7y6UbPM2nv9RWlmqfQ0waaazmH0ri5Im";  // mets ta clé ici

app.get("/rer", async (req, res) => {
    try {
        const response = await axios.get(API_URL, {
            headers: { apikey: API_KEY },
            responseType: "arraybuffer"
        });
        res.send(response.data);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
