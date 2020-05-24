import express from "express";
import fs from "fs";
import path from "path";

var router = express.Router();

router.get("/app.js", (req, res, next) => {
  let str = fs.readFileSync(path.resolve(__dirname, "../bin/converter.js"), {
    encoding: "utf8",
  });

  res.setHeader("Content-Type", "text/javascript");
  res.send(str);
});

export default router;
