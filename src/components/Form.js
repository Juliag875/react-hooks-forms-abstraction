import React, { useState } from "react";
import DisplayData from "./DisplayData"

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John", 
    lastName: "Henry",
    checkboxicon : false,
  });
  const [submittedData, setSubmittedData] = useState([]);

  function handleChange(event){
      // name is the KEY in of the formData object we're trying to update
    const key = event.target.name;
    const value = event.target.type === "checkbox" ?
      event.target.checked
      :
      event.target.value

    setFormData({...formData, 
      [key]: value, 
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newDataEntry = {firstName:formData.firstName, lastName:formData.lastName};
    const newDataArray = [{...formData}, newDataEntry]
    setSubmittedData(newDataArray);
  }

  const listOfSubmittedData = submittedData.map((data, index) => {
    return (
    <div key = {index}>
      {data.firstName}{data.lastName}
      </div>
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName"
      onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" 
      onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="checkboxicon"
      onChange={handleChange} checked={formData.checkboxicon} />
      <button type="submit">Submit</button>
      <DisplayData 
        firstName ={formData.firstName}
        lastName={formData.lastName}
        />
        <h3>Submitted Data</h3>
        <p>{listOfSubmittedData}</p>
        
    </form>
    
  );
  }

export default Form;

  // formData is an object, so we need to copy all the key/value pairs
  // we want to overwrite the lastName key with a new value
  // function handleFirstNameChange(event) {
  //   setFormData({...formData, firstName: event.target.value})
  // }

  // function handleLastNameChange(event) {
  //   setFormData({...formData, lastName: event.target.value})
  // }