const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const dotev = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");

dotev.config();
mongoose.connect(process.env.MONGO_URL, {
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Not connected:", err));

  //middleware
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(morgan('common'));
  
  app.use("/images", express.static(path.join(__dirname, "/images")));
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({storage:storage});

  app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
  });
  app.use("/api/users", userRoute);
  app.use("/api/auth", authRoute);
  app.use("/api/posts", postRoute);

//   app.get("/", (req,res)=>{
//     res.send("welcome to homepage");
//   });
//   app.get("/users", (req,res)=>{
//     res.send("welcome to users page");
//   });
app.listen(8800, () => {
    console.log("Backened server is running!");
});