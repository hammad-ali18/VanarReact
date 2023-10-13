// server.js

const express = require("express");
const { spawn } = require("child_process");
const cors = require('cors');
const app = express();
const port = 3001;

let hardhatProcess;

// Define the origin that is allowed to access your server (http://localhost:3000)
const allowedOrigins = ['http://localhost:3000'];

// Configure CORS with options
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));




app.get("/startHardhat", (req, res) => {
  if (!hardhatProcess) {
    hardhatProcess = spawn("npx", ["hardhat", "node"]);
    res.send("Hardhat node started.");
  } else {
    res.send("Hardhat node is already running.");
  }
});

app.get("/stopHardhat", (req, res) => {
  if (hardhatProcess) {
    hardhatProcess.kill("SIGINT");
    hardhatProcess = undefined;
    res.send("Hardhat node stopped.");
  } else {
    res.send("Hardhat node is not running.");
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
