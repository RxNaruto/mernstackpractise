import { Heading } from "../components/Heading";
import { SubHeading } from "../components/subHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"


export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex justify-center bg-slate-300 h-screen">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 p-2 h-max px-4 text-center ">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter the information to create the account"} />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"Username"}
            placeholder={"Jon@gmail.com"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            placeholder={"12345678"}
          />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label={"First Name"}
            placeholder={"Jon"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            label={"Last Name"}
            placeholder={"Doe"}
          />
          <InputBox
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
            label={"Department"}
            placeholder={"Web Developer"}
          />
          <div className="pt-4">
          <Button 
           onClick={async () => {
            const response = await axios.post("http://localhost:3000/user/register", {
              username,
              password,
              firstName,
              lastName,
              department,
              
            });
            console.log(response.data);
          
            navigate("/usercr")
          }} 
              label={"Sign up"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
