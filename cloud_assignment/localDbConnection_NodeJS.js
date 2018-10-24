var express = require('express');
var app = express();

const AWS = require('aws-sdk');
AWS.config.loadFromPath('./nodeJS/config.json');
AWS.config.update({
    endpoint: "http://localhost:8000"
});
const docClient = new AWS.DynamoDB.DocumentClient();