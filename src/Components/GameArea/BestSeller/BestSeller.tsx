import { SyntheticEvent, useState } from "react";
import "./BestSeller.css";
export function BestSeller(): JSX.Element {

const [BestSeller, setBestSeller] = useState<String>();

function show(): void{
    setBestSeller("Amazing Games LTD"); //Get from backend
}

function showEmoji(args: SyntheticEvent){
const button = args.target as HTMLButtonElement;
alert(button.innerText);
    //onsole.log(args.target);    
}
function showIcon(icon: string){
    alert(icon);
}
    return (
        <div className="BestSeller">
            <button onClick={show}>Show Best Seller</button>
	<span>The Best Seller is: {BestSeller}</span>	
    <button onClick={showEmoji}>🎁</button>
    <button onClick={showEmoji}>🛩</button>
    <button onClick={showEmoji}>🚓</button>
    <button onClick={showEmoji}>🌡</button>
    <button onClick={() => showIcon("🌏")}>🌏</button>
    <button onClick={() => showIcon("🚿")}>🚿</button>

        </div>
    );
}
