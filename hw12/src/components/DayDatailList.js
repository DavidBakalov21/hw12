import DayDetail from "./dayDetails";


function DayDetailList({Detaillist}){
   

    return(

     <div>

        {Detaillist.map(i=>(

            <DayDetail key={i} DayDetail={i}></DayDetail>
        ))}
        </div>
    );
}
export default DayDetailList;