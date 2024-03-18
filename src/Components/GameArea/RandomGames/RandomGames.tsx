import { useEffect, useState } from "react";
import arsenal from "../../../Assets/images/arsenal.jpg";
import barca from "../../../Assets/images/barca.jpg";
import israel from "../../../Assets/images/israel.jpg";
import spain from "../../../Assets/images/spain.jpg";
import Liverpool from "../../../Assets/images/Liverpool.jpg";


import "./RandomGames.css";

export function RandomGames(): JSX.Element {
    const arr = [arsenal,barca,israel,spain,Liverpool];
    const [index, setIndex] = useState<number>(0);

useEffect(() => {
       const timerId = setInterval(() =>{
        const index = Math.floor(Math.random()*arr.length);
        setIndex(index);
        }, 3000);
        //return a function which will be invoked when component destroy (Unmount):
        return () => {
            clearInterval(timerId);
        };
}, []); // [] --> Dependencies
    return (
        <div className="RandomGames">

<img src={arr[index]} />

        </div>
    );
}
