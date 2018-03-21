const express = require("express");
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

app.get('/whoami', (req, res) => {
  var l = req.headers["accept-language"];
  var s = req.headers["user-agent"];
  var o = {
    "ipaddress": req.ip,
    "language": l.slice(0, l.indexOf(",")),
    "software": s.slice(s.indexOf("(") + 1, s.indexOf(")"))
  };
  res.send(o);
});
