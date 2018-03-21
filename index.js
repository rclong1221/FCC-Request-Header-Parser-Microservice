const express = require("express");
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/whoami", (req, res) => {
  var ip = req.ip.slice(":");
  var l = req.headers["accept-language"];
  var s = req.headers["user-agent"];
  var o = {
    "ipaddress": ip[ip.length - 1],
    "language": l.slice(0, l.indexOf(",")),
    "software": s.slice(s.indexOf("(") + 1, s.indexOf(")"))
  };
  res.send(o);
});
