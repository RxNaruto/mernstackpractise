import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"

export const Signup=()=>{
    return <div className="bg-neutral-700 h-screen flex justify-center">
        <div className=" border-amber-800 w-96 m-32 bg-neutral-950 border-4 shadow-2xl">
        <div className="flex flex-col">
            <div><Heading label={"Signup"} /></div>
            <div><InputBox label={"Username"} placeholder={"Jon@mail.com"}/></div>
            <div><InputBox label={"Username"} placeholder={"Jon@mail.com"}/></div>
            <div><InputBox label={"Username"} placeholder={"Jon@mail.com"}/></div>
        </div>
        </div>
    </div>
}