
import Day from "./days";

function Week({Daylist, WeekNum}){
   

    return(

     <div>
<h3>Week:{WeekNum}</h3>
        {Daylist.map(i=>(

            <Day key={i} Day={i}></Day>
        ))}
        </div>
    );
}
export default Week;