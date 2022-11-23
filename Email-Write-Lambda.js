console.log('Loading function');
import AWS from "aws-sdk";
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

export const handler = async (event) => {
    console.log(event.body);

    let body = event.body
    try {
        if (typeof (event.body) == 'string') {
            body = JSON.parse(event.body)
        }
    } catch (e) {
        throw new Error("Error parsing event body")
    }

    if (!body.email) {
        throw new Error('Event must include an mail address')
    }

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const isValid = regex.test(body.email)

    if (!isValid) {
        throw new Error('Email address is invalid.')
    }

    const TABLE_NAME = "TLDR_Mail_List"
    const userEmail = body.email

    const result = await dynamodb.putItem({
        "TableName": TABLE_NAME,
        "Item": {
            "Email": { S: userEmail }
        }
    }).promise()

    console.log(result)
    return result
};