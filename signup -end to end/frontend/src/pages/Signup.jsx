import { useState } from "react";
import { Inputbox } from "../components/InputBox";
import { Button } from "../components/Button";

import axios from "axios";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  return (
    <div className="flex justify-center bg-slate-300 h-screen">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 p-2 h-max px-4 text-center ">
          <Inputbox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"Username"}
            placeholder={"Jon@gmail.com"}
          />

          <Inputbox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            placeholder={"123456"}
          />

          <Inputbox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label={"First Name"}
            placeholder={"Jon"}
          />
          <div>
            <Button onClick={async()=>{
                try{
                    await axios.post("http://localhost:3000/user/signup", {
                    username,
                    password,
                    firstName,
                    
                    
                  });
                }catch(error){
                    console.log(error);
                }
                
            }} label={"Register"}/>
          </div>
        </div>
      </div>
    </div>
  );
};
