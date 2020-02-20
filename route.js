const express = require("express");
const router = express.Router();
const searchDoc = require("./search");
/* var elasticsearch = require("elasticsearch");
var client = new elasticsearch.Client({
  node: "http://localhost:9200",
  log: "trace"
}); */

router.get("/search", async (req, res, next) => {
  const body = {
    query: {
      range: {
        age: {
          gte: req.query.fromAge,
          lte: req.query.toAge
        }
      }
    }
  };
  const result = await searchDoc("financial", "accounts", body);
  console.log(result);
  return res.send(result);
});
module.exports = router;
