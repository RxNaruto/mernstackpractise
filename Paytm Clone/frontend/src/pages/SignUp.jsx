import {Heading} from "../components/Heading"
import { SubHeading } from "../components/subHeading"
import { InputBox } from "../components/inputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/bottomWarning"
import { useState } from "react"
export const Signup = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onchange={e=>{
            setFirstName(e.target.value);
        }} placeholder="Japneet" label={"First Name"} />
        <InputBox onchange={e=>{
            setLastName(e.target.value);
        }} placeholder="Singh" label={"Last Name"} />
        <InputBox onchange={e=>{
            setUsername(e.target.value);
        }}placeholder="japneet@gmail.com" label={"Email"} />
        <InputBox onchange={e=>{
            setPassword(e.target.value);
        }}placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={()=>{
            axios.post("https://localhost:3000/api/v1/user/signup"),{
                username,
                password,
                firstName,
                lastName
            }
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}