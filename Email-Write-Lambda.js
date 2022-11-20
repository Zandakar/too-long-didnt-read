console.log('Loading function');
import AWS from "aws-sdk";
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

export const handler = async (event, context) => {
    console.log(JSON.stringify(event, null, '  '));
    console.log('before putitem')

    const bla = await dynamodb.putItem({
        "TableName": "TLDR_Mail_List",
        "Item": {
            "Email": { S: "lambda@test.com" }
        }
    }).promise()


    console.log('after putitem')
    console.log(bla)
    return bla
};