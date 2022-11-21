import React from "react";

import { Content } from "../content/Content";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';


// https://p23xchxvcg.execute-api.ap-southeast-2.amazonaws.com/prd/email/add
// https://mui.com/material-ui/api/form-control/

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
    <Button style={{
      borderRadius: 35,
      backgroundColor: "#419bf0",
      // padding: "18px 36px",
      // fontSize: "18px"
    }} variant="contained" endIcon={<SendIcon />}>
      Add me!
    </Button>
  </Main >
);

export default MailingList;
