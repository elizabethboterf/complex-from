import React, { useState } from "react";

function RSVPForm() {
  const initialState={
        Name:"",
        Age:"",
        Newmember: false,
        Comment:"",
    };
  const [formData, setFormData]=useState({...initialState});
  const handleChange = ({ target }) => {
  const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  const handleSubmit=(event)=>{
     event.preventDefault();
     console.log(formData.Name, formData.Age, formData.Newmember, formData.Comment);
     setFormData({...initialState});
  };
  
  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name">
        Enter name:
       <input
         id="Name"
         type="text"
         name="Name"
         onChange={handleChange}
         value={formData.Name}
       />
     </label><label htmlFor="Age">
        What's your age?
       <select
         id="Age"
         name="Age"
         onChange={handleChange}
         value={formData.Age}
         >
         <option value="prefer not to say">Prefer not to say</option>
         <option value="0-19">0-19</option>
         <option value="20-39">20-39</option>
         <option value="40-59">40-59</option>
         <option value="60+">60+</option>
       </select>
     </label>
     <label htmlFor="Newmember">
       New Member
        <input
         id="Newmember"
         type="checkbox"
         name="Newmember"
         onChange={handleChange}
         checked={formData.Newmember}
         value="Newmember"
        />
      </label>
      <label htmlFor="Comment">
        Comment:
        <input
          id="Comment"
          type="textarea"
          name="Comment"
          onChange={handleChange}
          value={formData.Comment}
          maxlength="200"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
 )
}

export default RSVPForm;

