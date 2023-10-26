import { Button, Input } from "@mui/base";
import React, { useEffect, useState } from "react";
import { GetResponse } from "../lib/Functions";
import CardResponse from "./Card";

const Response = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

//   useEffect(async() => {
//    const res= 
//     setResponse(res);
//   },[text]);
   console.log(response)
  return (
    <div>
        <div>
            <Input/>
        <Button variant="outlined" onClick={async()=>{
          await GetResponse(text)
        }}>Outlined</Button>
        </div>
      {/* <CardResponse text={text} response={response} /> */}
    </div>
  );
};

export default Response;
