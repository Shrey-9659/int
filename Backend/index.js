const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb+srv://shreykhandelwal9659:KnNVUte4SRMx4E8n@cluster0.si9xs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("DB connection successful"))
  .catch(() => console.log("DB connection failed"));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const userModel = mongoose.model("user", userSchema);

const app = express();

app.use(express.json());
app.use(cors(
  {
    origin: ["https://int-blj1.vercel.app"],
    methods : ["POST", "GET", "PUT", "PATCH", "DELETE"],
    credentials : true
  }
));

app.get("/", (req, res) => res.send("Hello World"));

app.post("/register", async (req, res) => {
  const userData = req.body;
  console.log(userData);
  const newUserToAdd = new userModel(userData);
  await newUserToAdd.save();
  res.send("Register Successful");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
//   console.log({ username, password });
  const user = await userModel.findOne({ username });
  if (!user || !(password === user.password)) {
    res.status(401).send("Invalid Credentials");
  } else {
    res.status(200).send("Login Successful");
  }
});

app.listen(5000, () => console.log(`http://localhost:5000`));
