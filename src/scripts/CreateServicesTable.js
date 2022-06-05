var AWS = require("aws-sdk");

AWS.config.update({
  region: "ca-central-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Services",
  KeySchema: [
    // Partition Key
    { AttributeName: "service", KeyType: "HASH" },
    // Sort Keys
  ],
  AttributeDefinitions: [
    { AttributeName: "service", AttributeType: "S" },
    
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});