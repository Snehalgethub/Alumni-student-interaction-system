import React, { useState,useEffect } from 'react'
import './PlacedStudents.css'
import { db } from '../Firebase'
import { collection , getDocs } from 'firebase/firestore'
import NavbarForDept from './NavbarForDept';
//import search_icon from '../Images/search_icon.png'

function PlacedStudentsIT() {
  
  const [users , setusers] = useState([]);
  const [text, settext] = useState('')

  useEffect(() => {
    const getUsers = async() => {
      const userCollectionRef = collection(db,"onCampus");
      const data = await getDocs(userCollectionRef);
      setusers(
        data.docs.map((doc) => ({
          ...doc.data(),id:doc.id
        }) )
      )
    }
    getUsers();
  }, [])

  const style ={
   inputstyle:{
     marginTop:'100px',
    padding:'12px 24px',
    borderRadius:'40px',
    width:'400px',
    fontSize:'20px',
   },
   imagestyle:{
    width:'25px' , 
    height:'25px',
    position:'absolute',
    left:'650px',
    paddingLeft:'4px',
    paddingTop:'10px'
   }
  }
  

  return (
    
    <>
    <NavbarForDept dept='Information Technology'/>

    <center>
      <h2>IT Department</h2>
    <div>
      <input style={style.inputstyle} value={text} onChange={(e) => settext(e.target.value)} type="text" placeholder='search...' />
    </div>

    
   
    <div style={{marginTop:'50px'}}>
      
       
           <table >
              
            <thead>
            <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Package</th>
                <th>Session</th>
                <th>LinkedIn Profile</th>
            </tr>
            </thead>
            
            {
              users.filter((val) => {
                if(text === ''){
                    return val;
                }
                else if(val.Name.toLowerCase().includes(text.toLowerCase()) ||
                val.company.toLowerCase().includes(text.toLowerCase()) ||
                val.session.toLowerCase().includes(text.toLowerCase()) ||
                val.Package.toLowerCase().includes(text.toLowerCase()) ||
                val.dept.toLowerCase().includes(text.toLowerCase())
                ){
                    return val;
                }
                return 0;
               }).map((user)=>{
                return(
                    <tr key={user.id}>
                        <td>{user.Name}</td>
                        <td>{user.company}</td>
                        <td>{user.Package}</td>
                        <td>{user.session}</td>
                        <td><a href={`https://www.linkedin.com/in/${user.Link}/`}>Profile Link</a></td>
                     </tr>
                  
                )
              })
            }
          
        </table>
      
       </div>
    </center>
    </>
  )
}

export default PlacedStudentsIT;


