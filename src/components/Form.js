import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([])
      //set a state and setter function to mock a server to send our data


  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault()

    // putting together the current form data into an object using the values stored in state.
    const formData = {
      firstName: firstName,
      lastName: lastName
    };
    //A form, when submitted should send the form data somewhere.
    //set a state and setter function to mock a server to send our data
    const newDataArray = [...submittedData, formData]
    setSubmittedData(newDataArray)

    //clear the input fields, all we need to do is set state! 
    setFirstName("");
    setLastName("");
  }
  
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

    const newSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>

    )
    
  })


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h3>Submissions Go Here</h3>
    {newSubmissions}
    </>
  );
}

export default Form;
