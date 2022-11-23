import React, { useState } from "react";

import { Content } from "../content/Content";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import fetch from 'node-fetch';

// https://mui.com/material-ui/api/form-control/

const MailingList = () => {
  const [emailValue, setEmailValue] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [hasSent, setHasSent] = useState(false)
  const [isSuccesful, setIsSuccesful] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(true)

  const onSendClick = async () => {
    const isValid = validateEmail()
    if (isValid) {
      setIsSending(true)
      setHasSent(false)
      setIsSuccesful(false)
      const body = { "email": emailValue };
      const API_GATEWAY_URL = `https://p23xchxvcg.execute-api.ap-southeast-2.amazonaws.com/prd/email/add`

      try {
        const response = await fetch(API_GATEWAY_URL, {
          method: 'post',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();

        console.log('data')
        console.log(data)

        if (data.message && data.message.includes('Error')) {
          throw new Error('Error in send email request')
        }


        setIsSending(false)
        setHasSent(true)
        setIsSuccesful(true)
      } catch (e) {
        console.log('send error')
        console.error(e)
        setIsSending(false)
        setHasSent(true)
      }
    }




  }

  const validateEmail = (() => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const isValid = regex.test(emailValue)

    setIsValidEmail(isValid)
    return isValid
  })

  const onEmailChange = ((e: any) => {
    setEmailValue(e.target.value)
    setIsValidEmail(true)
    setHasSent(false)
    setIsSuccesful(false)
  })


  const handleTextKeypress = ((e: any) => {
    if (e.code === 'Enter') {
      onSendClick();
    }
  })


  return (
    <Main meta={<Meta title="Mailing List" description="Mailing List" />}>
      < Content >
        <h1 className="text-center  text-3xl text-gray-900">{`Mailing List`}</h1>
        <br></br>
        <div className="flex justify-center items-center">
          <div>If you would like a friendly reminder whenever I add a new post, add your email below</div>
        </div>
        <br></br>
        <TextField
          id="filled-basic"
          label="Email Address"
          variant="filled"
          onChange={onEmailChange}
          onKeyPress={handleTextKeypress}
          error={!isValidEmail} />
        {!isValidEmail ? <div> Please enter a valid email address</div> : <div style={{ height: '30px' }}> </div>}
      </Content >
      <br></br>
      <div style={{ display: 'flex' }}>
        <Button
          onClick={onSendClick}
          disabled={isSending || !isValidEmail || isSuccesful}
          style={{
            borderRadius: 35,
            backgroundColor: "#419bf0",

          }} variant="contained" endIcon={<SendIcon />}>
          Add me
        </Button>
      </div>

      {
        // spinner
        isSending ? <div style={{ marginTop: '30px' }}>
          <CircularProgress></CircularProgress>
        </div> :
          // no spinner
          <div></div>
      }
      <div style={{ width: '80%', marginTop: '10px', marginLeft: '10px' }}>
        {
          // on Success
          hasSent && isSuccesful && <div style={{ marginTop: '30px' }}>{`Success! ${emailValue} has been added`}</div>
        }
        {
          // on fail
          hasSent && !isSuccesful && <div style={{ marginTop: '30px', color: 'red' }}>
            Something went wrong, sorry! Throw me a line at
            tom.deruijter@hotmail.com and I can manually add you (and maybe fix this)</div>
        }
      </div>

    </Main >
  )
};

export default MailingList;
