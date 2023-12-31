import { useState } from "react";

function DisplayText(){

    const [message,setMessage]=useState('');
    const [updated,setUpdated]=useState(message);

const handleChange=(event)=>{
    setMessage(event.target.value);
}
const handleClick=()=>{
    setUpdated(message);
}

return(
    <div>
    <input
    type="text" id="message"  name="message"
    onChange={ handleChange}></input>
    <h2>Message:{message}</h2>
    <h2>Updated:{updated}</h2>

    <button onClick={handleClick}>Update</button>
    </div>
)

}
export default DisplayText;