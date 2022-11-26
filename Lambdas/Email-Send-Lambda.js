console.log('Loading function');
import AWS from "aws-sdk";
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

export const handler = async (event) => {
    console.log(event.body);

    const TABLE_NAME = "TLDR_Mail_List"

    const result = await dynamodb.scan({
        "TableName": TABLE_NAME
    }).promise()

    const emailList = result.Items.map((record) => record.Email.S)


    console.log(emailList)
    return result
};