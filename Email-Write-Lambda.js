console.log('Loading function');
import AWS from "aws-sdk";
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event, null, '  '));
    var tableName = "TLDR_Mail_List";
    dynamodb.putItem({
        "TableName": tableName,
        "Item": {
            "Email": "tom.deruijter@hotmail.com",
        }
    }, function (err, data) {
        if (err) {
            console.log('Error putting item into dynamodb failed: ' + err);
            context.done('error');
        }
        else {
            console.log('great success: ' + JSON.stringify(data, null, '  '));
            context.done('Done');
        }
    });
};