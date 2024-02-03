import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";}

export const Signup=()=>{
    return(
        <div>
            <div>
                <div>
                    <Heading label={"Sign-up"}/>
                    <InputBox label={"username"} placeholder={"jon@gmail.com"} />
                </div>
            </div>
        </div>
    )
}