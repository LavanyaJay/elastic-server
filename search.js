var elasticsearch = require("elasticsearch");
var client = new elasticsearch.Client({
  node: "http://localhost:9200",
  log: "trace"
});

const searchDoc = async function(indexName, mappingType, payload) {
  return client.search({
    index: indexName,
    type: mappingType,
    body: payload
  });
};

module.exports = searchDoc;
