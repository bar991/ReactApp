import { SyntheticEvent, useState } from "react";
import { setTextRange } from "typescript";
import "./Search.css";

export function Search(): JSX.Element {
    //1. state for the text value:
const [text, setText] = useState<string>("");

function handleChange(args: SyntheticEvent){
    const text = (args.target as HTMLInputElement).value;
    setText(text);
}
function searchInWebsite(){
    alert("Searching for" + text);
    setText("");
        }
    return (
        <div className="Search">
            {/* Two-Way Binding:*/}
			<input type="search" onChange={handleChange} value={text} style={{color:text}}/>
            <button onClick={searchInWebsite}>✔</button>
        </div>
    );
}
