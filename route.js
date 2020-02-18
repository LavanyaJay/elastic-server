const express = require("express");
const router = express.Router();
const searchDoc = require("./search");
/* var elasticsearch = require("elasticsearch");
var client = new elasticsearch.Client({
  node: "http://localhost:9200",
  log: "trace"
}); */

router.get("/search", async (req, res, next) => {
  console.log("calling router");
  const fromAge = req.query.fromAge;
  const toAge = req.query.toAge;
  console.log("fromAge:", fromAge);
  const body = {
    query: {
      range: {
        age: {
          gt: 10,
          lte: 20
        }
      }
    }
  };
  const result = await searchDoc("financial", "accounts", body);
  console.log(result);
  return res.send(result);
});
module.exports = router;
