import "./Staff.css";

export function Staff(): JSX.Element {
    const now = new Date();
    const day = now.getDay() + 1;
    //if(day !==1)
    //return <></>; //Fragment
    return (
        <div className="Staff">

            {day === 2 && <p>Now , on Sunday - HelpDesk Support</p>}
			{day !== 2 && <p>we don't have HelpDesk Support today</p>}
        </div>
    );
}
