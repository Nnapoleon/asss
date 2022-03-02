import React, {useState} from 'react'

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`younhave submitted: ${name} and ${email}`);

  }


  
 
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name}  onChange={(e) =>setName(e.target.value)}  placeholder="enter your name"/>
          
            <input type="text" value={email}  onChange={(e) =>setEmail(e.target.value)} placeholder="enter email"/>
            <p>{name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp;
                    
             {email}</p>
            <button type="submit">SUBMIT</button>
            

        </form>
       


    </div>
  )
}

export default Form;