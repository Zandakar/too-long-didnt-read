import React from "react";

import { Content } from "../content/Content";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import fetch from 'node-fetch';

// https://mui.com/material-ui/api/form-control/

const onClick = async () => {
  const body = { "email": "fromWebsite@test.com" };
  const API_GATEWAY_URL = `https://p23xchxvcg.execute-api.ap-southeast-2.amazonaws.com/prd/email/add`

  try {
    const response = await fetch(API_GATEWAY_URL, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();

    console.log(data)
  } catch (e) {
    console.error(e)
  }

}


const MailingList = () => (
  <Main meta={<Meta title="Mailing List" description="Mailing List" />}>
    < Content >
      <h1 className="text-center  text-3xl text-gray-900">{`Mailing List`}</h1>
      <br></br>
      <div className="flex justify-center items-center">
        <div>If you would like a friendly reminder whenever I add a new post, add your email below</div>
      </div>
      <br></br>
      <TextField id="filled-basic" label="Email Address" variant="filled" />
    </Content >
    <br></br>
    <Button
      onClick={onClick}
      style={{
        borderRadius: 35,
        backgroundColor: "#419bf0",
      }} variant="contained" endIcon={<SendIcon />}>
      Add me!
    </Button>
  </Main >
);

export default MailingList;
