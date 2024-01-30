import { Heading } from "../components/Heading"
import { SubHeading } from "../components/subHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
export const Signup=()=>{
    return <div className="flex justify-center bg-slate-300 h-screen">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 p-2 h-max px-4 text-center ">
        <Heading label={"Sign Up"}/>
        <SubHeading label={"Enter the information to create the account"}/>
        <InputBox label={"Username"} placeholder={"Jon@gmail.com"}/>
        <InputBox label={"Password"} placeholder={"12345678"}/>
        <InputBox label={"First Name"} placeholder={"Jon"}/>
        <InputBox label={"Last Name"} placeholder={"Doe"}/>
        <InputBox label={"Department"} placeholder={"Web Developer"}/>
        <div className="pt-4">
          <Button label={"Sign up"} />
        </div>
        </div>

        </div>

       
        
        

    </div>
}