import React from 'react'
import data from "../assets/data";

const Listing = () => {
  return (

  
    <div>
      
      {data && data .length> 0 ? (
        data.map((result, index)=>(
          <p key={index}>
            {result.id}. {result.task}

            
            </p>

        ))
      ):(

        <div> No task found </div>
          

      )}
    </div>
    


  );
}

export default Listing