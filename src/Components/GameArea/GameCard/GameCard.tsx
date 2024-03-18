import "./GameCard.css";
import imageSource from "../../../Assets/images/barca.jpg";
export function GameCard() : JSX.Element {
    const discount = 20; //Backend demo.
return (
<div className="GameCard">
    <p>Amazing</p> 
<span>{discount} % on all games</span>
<br />
<img src={imageSource} />
</div>
);
}
