import express from "express";
import fs from "fs";
import multer from "multer";
import path from "path";

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});

let upload = multer({ storage: storage });

let router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "World" });
});

router.post("/file/post", upload.single("file"), (req, res, next) => {
  console.log("req.file: " + JSON.stringify(req.file));
  console.log("file-upload is called");
});

export default router;
