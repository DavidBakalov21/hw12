function Input({type}){
   
    return(
 
      <div>
         <h5>{type}</h5>
     <input className="FullWidth" type={type} placeholder={type}/>
         </div>
     );
 }
 export default Input;