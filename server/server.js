const path = require("path");
const express = require("express");

// Configuration
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "..", "public");

// Set public path for static content
app.use(express.static(publicPath));

// Routes
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log("Server is up on port: " + port);
});
