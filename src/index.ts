import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import getAnswer from "./get-answer";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
GET /api/chat/v1/bot?question=<some question>
  { "answer": "<some answer>" }
*/

app.get("/api/chat/v1/bot", (req, res) => {
  const { question } = req.query;

  const answer = getAnswer(question.toLowerCase());

  res.json({
    answer,
  });
});

app.listen(3000, () => {
  console.log(
    `Example app listening at http://localhost:3000/api/chat/v1/bot?question=`
  );
});
