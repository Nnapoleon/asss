import React,{useEffect} from 'react'
import axios from "axios"
import {API} from "../utils/Api"

const ApiListing = () => {
  const[Company ,setCompany] = useState([]);
    useEffect(()=>{
        API.get("/campany/fetchall")
        .then((response)=> {

          setCompany(response.data.data);
          console.log(Company);

        })
        .catch((err)=>{
          console.log("error fetching data",err)
        });
      },[]);
    return(

      <>
        <h2>the list of all Company</h2>
        <hr/>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Company</th>
              <th>Status</th>
              <th>Creation Date</th>
            </tr>

          </thead>
          {Company && Company.length > 0 ?(
            Company.map((com, index) =>(
              <tbody key ={index}>
                <tr>

                  <td>{index + 1}</td>
                  <td>{com.comp_name}</td>
                  <td>{com.comp_status}</td>
                  <td>{com.comp_creation_date}</td>

                </tr>

              </tbody>

            ))
          ): (
            <h2 style={{textAlign: "center"}}>{"data Loading"}</h2>
          )}
       </table>
      
      </>
    );


        };
 

export default ApiListing