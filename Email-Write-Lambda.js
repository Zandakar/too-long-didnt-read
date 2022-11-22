console.log('Loading function');
import AWS from "aws-sdk";
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

export const handler = async (event, context) => {
    console.log('event body')
    console.log(event.body);

    let body
    try {
        body = JSON.parse(event.body)
    } catch (e) {
        throw new Error("Error parsing event body")
    }
    console.log(typeof (body))
    const TABLE_NAME = "TLDR_Mail_List"

    console.log("body.email")
    console.log(body.email)

    if (!body.email) {
        throw new Error('Event must include an mail address')
    }

    const userEmail = body.email

    const result = await dynamodb.putItem({
        "TableName": TABLE_NAME,
        "Item": {
            "Email": { S: userEmail }
        }
    }).promise()


    console.log('after putitem')
    console.log(result)
    return result
};