import express from "express";
import cors from "cors";
import { sample_clothes, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/clothes", (req, res) => {
  res.send(sample_clothes);
});

app.get("/api/clothes/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const clothes = sample_clothes.filter((cloth) =>
    cloth.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(clothes);
});

app.get("/api/clothes/:clothId", (req, res) => {
  const clothId = req.params.clothId;
  const cloth = sample_clothes.find((cloth) => cloth.id == clothId);
  res.send(cloth);
});

app.post("/api/users/login", (req, res) => {
  const { email, password } = req.body;
  const user = sample_users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.send(generateTokenReponse(user));
  } else {
    const BAD_REQUEST = 400;
    res.status(BAD_REQUEST).send("Username or password is invalid!");
  }
});

const generateTokenReponse = (user: any) => {
  const token = jwt.sign(
    {
      email: user.email,
      isAdmin: user.isAdmin,
    },
    "SomeRandomText",
    {
      expiresIn: "30d",
    }
  );

  user.token = token;
  return user;
};

const port = 5000;
app.listen(port, () => {
  console.log("website served on http://localhost:" + port);
});
