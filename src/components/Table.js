import React, { useEffect } from 'react'
import RowElement from "./RowElement";
import players from '../players';
import { useState } from 'react';


export const Table = () => {
    const [collapsed,setCollapsed]=useState([0,0,0]);
    const numbers = [0,1,2];
    const [numb,setNumb]=useState('[]');
    let numb2=0;
    
    useEffect(()=>{
    var arr=[0,0,0];
    setNumb(1);
    setCollapsed(arr);},[])

   useEffect(()=>{
      console.log("triggered");
    },numb2);

    //console.log("team undef",players[0].projects);
    console.log(collapsed);

    const function1=(x)=>{
        
       
        
        if(collapsed[x]==0)
        {
       var newArr=collapsed;
        newArr[x]=1;
       // console.log(typeof(newArr));
       setCollapsed(newArr);
       setNumb(numb+1);
       numb2=numb2+1;
        }
        else
        {
            var newArr=collapsed;
            newArr[x]=0;
        // console.log(typeof(newArr));
           setCollapsed(newArr);
           setNumb(numb+1);
           numb2=numb2+1;

        }
        console.log("array mod",collapsed);
       // console.log("number",numb)

    }


  return (
    <>
    <div>
    
   

    <table className="our-table">
  <thead>
    <tr>
      <th>firstName</th>
      <th>LastName</th>
      <th>Team</th>
    </tr>
  </thead>
  
  {numbers.map((number) =>
  <tbody className="projects" key={number.toString()}>
    


    <tr>
      <td>{players[number].firstName}</td>
      <td>{players[number].lastName}</td>
      <td>{players[number].team}</td>  
      <td><button onClick={(e)=>function1(number)}>click here</button></td>
      
    
    </tr>
    

    <tr className={collapsed[number]==0 ? "inside" : "hidden"} >
         { (players[number].projects) ?
          <table   >
                <caption>{collapsed[2]}</caption>

          <thead>
              <th>id</th>
              <th>name</th>
          </thead>

          <tr>
              <td>{players[number].projects[number].id}</td>
              <td>{players[number].projects[number].name}</td>
          </tr>
          </table>
          
          
          :
          <tr>
              no projects
          </tr>
         }
          
          
    </tr>

</tbody>)}

    


    
  
  <tfoot>
    
  </tfoot>
</table>
    </div>
    </>
  )
}
/*
<tr>
      <td>{players[1].firstName}</td>
      <td>{players[1].lastName}</td>
      <td>{players[1].team}</td>
      
      
      
    
    </tr>
    <tr >
         { players[1].projects ?
          <table>
                <caption>projects</caption>

          <thead>
              <th>id</th>
              <th>name</th>
          </thead>

          <tr>
              <td>{players[1].projects[1].id}</td>
              <td>{players[1].projects[1].name}</td>
          </tr>
          </table>
          
          
          :
          <tr>
              no projects
          </tr>
         }
          
          
        </tr>*/