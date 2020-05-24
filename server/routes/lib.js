import express from "express";
import fs from "fs";
import path from "path";
import mime from 'mime';

var router = express.Router();

router.get("/*", (req, res, next) => {
  let filePath = path.resolve(__dirname, "../lib/" + req.path);
  let str = fs.readFileSync(filePath, {
    encoding: "utf8",
  });

  let type = mime.getType(filePath);
  res.setHeader("Content-Type", type);
  res.send(str);
});

export default router;
