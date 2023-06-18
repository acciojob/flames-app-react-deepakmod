import React, { useState } from 'react'

let Flames = () => {

    let data=["Siblings","Friends","Love","Affection","Marriage","Enemy"];

    let [firstName,setFirstName]=useState("");
    let [secondName,setSecondName]=useState("");
    let [relationship,setRelationship]=useState("");
    let [error,setError]=useState("");

    function calculateRelationship(event){
        event.preventDefault();
        if(firstName.trim()=="" && secondName.trim()=="" ){
            setError("Please Enter valid input");
            return;
        }
        setError("");

        let array1 = firstName.toLowerCase().split('');
        let array2 = secondName.toLocaleLowerCase().split('');

        let commonChars = new Set(array1.filter(char => array2.includes(char)));
      
        let resultArray1 = array1.filter(char => !commonChars.has(char));
        let resultArray2 = array2.filter(char => !commonChars.has(char));
      
        let length = (resultArray1.length + resultArray2.length) % 6;
      
        setRelationship(data[length]);

    }

    function clearData(event){
        event.preventDefault();
        setError("");
        setFirstName("");
        setSecondName("");
        setRelationship("");
    }


  return (
    <div>

        <input  value={firstName}  data-testid="input1"  type='text' placeholder='Enter first name' onChange={(e)=>{setFirstName(e.target.value)}} />
        <input  value={secondName}  data-testid="input2"  type='text' placeholder='Enter second name'  onChange={(e)=>{setSecondName(e.target.value)}} />
        <button  data-testid="calculate_relationship"  onClick={(e)=>{calculateRelationship(e)}}  >Calculate Relationship Future</button>
        <button  data-testid="clear" onClick={(e)=>{clearData(e)}} >Clear</button>
        {relationship && <h3  data-testid="answer"  >{relationship}</h3>}
        {error && <p>{error}</p>}

    </div>
  )
}

export default Flames;