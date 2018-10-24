const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json'); // load 
AWS.config.update({
	//endpoint: "http://192.168.99.100:8000"
	endpoint: "http://localhost:8000"
});
const docClient = new AWS.DynamoDB.DocumentClient();
const dynamodb = new AWS.DynamoDB();
//console.log(dynamodb);
module.exports = {
	//view list of tables in database
	getAllTables: function () {
		dynamodb.listTables({}, function (err, data) {
			if (err) {
				console.error("Error JSON:", JSON.stringify(err, null, 2));
			} else {
				console.log("All Tables : ", JSON.stringify(data, null, 2));
			}
		});
	},

	//view "employee" table Structure
	getTableStructure: function () {
		dynamodb.describeTable({ TableName: 'employees' }, function (err, data) {
			if (err) {
				console.error("Error JSON:", JSON.stringify(err, null, 2));
			} else {
				console.log("employees table structure:", JSON.stringify(data, null, 2));
			}
		});
	},

	//get employee or manager list
	getUsers: function (filterOption) {
		return new Promise(function (resolve, reject) {
			var params = {
				TableName: "employees",
				/*Key: {
					"name": "Marge",
					"ID": 1710
				}*/
				/*KeyConditionExpression: "#mgr = :a",
				ExpressionAttributeNames: {
					"#mgr": "is_manager"
				},
				ExpressionAttributeValues: {
					":a": false
				}*/
			};

			var params2 = {
				TableName: "employees",
				FilterExpression: "#nm = :v",
				ExpressionAttributeNames: {
					"#nm": "is_manager"
				},
				ExpressionAttributeValues: {
					":v": filterOption.is_manager
				},
				PojectionExpression: 'ID',
				//Limit:0,
				//Reverse:false,
				//Page:1,
				//PageSize:1,
				//Segment:1,
				//TotalSegments:999999

			};
			docClient.scan(params2, function (err, data) {
				if (err) {
					console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
					reject(JSON.stringify(err, null, 2));
				} else {
					resolve(data);
				}
			});
		})
	},
	// for add employee or manager
	addUser: function (item) {
		return new Promise(function (resolve, reject) {
			var params = {
				TableName: 'employees',
				Item: item
			};
			console.log("Adding a new user...");
			docClient.put(params, function (err, data) {
				if (err) {
					console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
					reject(err);
				} else {
					resolve(data)
				}
			});

		});
	},

};